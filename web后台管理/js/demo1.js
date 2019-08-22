var token = localStorage.getItem('token')
var globel = localStorage.getItem('globel')

var currPage = parseInt($('#currPage').text()); // 初始页
var pageSize = 6;//页面数
var allPage = 0;//总页面
WHList()
listenerDom()
function listenerDom() {
    // 上一页
    $('.last').click(function () {
        console.log(1111)
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            WHList();
        }
    })
    // 点击下一页
    $('.next').click(function () {
        console.log(22222)
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            WHList();
        }
    })
}
// 点击局部刷新
function zhi(){
    var red_data = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize//页面值
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/starApproveList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(red_data),
        success: function (data) {
            var list = data.data.pageData.list;
            console.log(list)
            if(list==''){
                $("#red_sh").append('<h1 class="demo">暂时还没有网红加入!</h1>')
            }else{
            // 渲染前先清空
            $("#red_sh").html('');
            // 总页数 parseInt解析一个字符串并返回一个整数
            allPage = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage = Math.ceil(allPage);
            $('#allPage').text(allPage);//text(c)该方法用于设置值时，它会覆盖被选元素的所有内容
            // 非空判断
            if (list.length == 0) {
                currPage = 0
                $('#currPage').text(currPage);
                return false;
            }
            var html = '';
            var arr;
            $.each(list, function (index, item) {
                var id = item.id;
                var img = item.personalImgs;
                arr = img.split(",")
                // console.log('形象照',arr);//每个人的形象照数组
                // 形象照
                for (var i = 0; i < arr.length; i++) {
                    html += '<img class="cardImg" src="' + arr[i] + '" alt="" style="width:200px;">'
                }
                $("#red_sh").append(
                    '<div class="content_row" id="content_row">' +
                    '<div class="layui-row" id="row">' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">姓名：</span>' +
                    '<span class="color_gray">' + item.wxName + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">性别：</span>' +
                    '<span class="color_gray">' + (item.sex == 1 ? "男" : "女") + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">年龄：</span>' +
                    '<span class="color_gray">' + item.age + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">店铺：</span>' +
                    '<span class="color_gray">' + item.hasShop + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo">' +
                    ' <span class="color_black">平台ID：</span>' +
                    '<span class="color_gray text">' + item.id + '</span>' +
                    '</div>' +
                    ' </div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">平台：</span>' +
                    '<span class="color_gray">' + item.platFormName + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">手机号码：</span>' +
                    '<span class="color_gray">' + item.phoneNo + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">邀请人：</span>' +
                    '<span class="color_gray">' + item.marketer + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">粉丝量：</span>' +
                    '<span class="color_gray">' + item.fansNums + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">申请时间：</span>' +
                    '<span class="color_gray">' + item.createDate + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">居住地址：</span>' +
                    '<span class="color_gray">' + item.country + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md9">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">身份证号码：</span>' +
                    '<span class="color_gray">' + item.idCardNumber + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md3">' +
                    //'<!-- 一级模态框-->'+
                    '<div class="grid-demo grid-demo-bg1" data-toggle="modal" data-target="#myModal' + index + '">' +
                    '更多资料' +
                    '</div>' +
                    ' <!-- Modal -->' +
                    '<div class="modal fade" id="myModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y:auto">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel"> 更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">手持身份证照：</P>' +
                    '<img class="cardImg" src="' + item.idCardPic + '" alt="" data-toggle="modal" data-target="#myModal1' + index + '">' +
                    '</div>' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">身份证正/反面照：</P>' +
                    ' <img class="cardImg" src="' + item.idCardUpPic + '" alt="" data-toggle="modal" data-target="#myModal2' + index + '">' +
                    '<img class="cardImg" src="' + item.idCardDownPic + '" alt="" data-toggle="modal" data-target="#myModal3' + index + '">' +
                    '</div>' +
                    '<div class="more_cardID" id="person">' +
                    '<P class="cardText">形象照：</P>' + html +
                    ' </div>' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">平台截图：</P>' +
                    '<img class="cardImg" src="' + item.platformImgs + '" alt="" data-toggle="modal" data-target="#myModal4' + index + '">' +
                    '</div>' +
                    '</div>' +
                    '<button type="button" id="pass" onclick="pass(\''+id+'\')" class="btn btn_green" style="margin: 10% 10px 10% 36%;">通过</button>' +
                    '<button type="button" id="nopass" onclick="nopass(\''+id+'\')" class="btn btn-default">拒绝</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 手持身份证照 -->' +
                    '<div class="modal fade" id="myModal1' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">手持身份证照：</P>' +
                    '<img src="' + item.idCardPic + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 身份证正面 -->' +
                    '<div class="modal fade" id="myModal2' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">身份证正面照：</P>' +
                    '<img src="' + item.idCardUpPic + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 身份证反面 -->' +
                    '<div class="modal fade" id="myModal3' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">身份证反面：</P>' +
                    '<img src="' + item.idCardDownPic + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 平台截图 -->' +
                    '<div class="modal fade" id="myModal4' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">平台截图：</P>' +
                    '<img src="' + item.platformImgs + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
        }
    })
}

// 获取待审核人员列表
function WHList() {
    var red_data = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize//页面值
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/starApproveList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(red_data),
        success: function (data) {
            var list = data.data.pageData.list;
            console.log(list)
            if(list==''){
                $("#red_sh").append('<h1 class="demo">暂时还没有网红加入!</h1>')
            }else{
            // 渲染前先清空
            $("#red_sh").html('');
            // 总页数 parseInt解析一个字符串并返回一个整数
            allPage = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage = Math.ceil(allPage);
            $('#allPage').text(allPage);//text(c)该方法用于设置值时，它会覆盖被选元素的所有内容
            // 非空判断
            if (list.length == 0) {
                currPage = 0
                $('#currPage').text(currPage);
                return false;
            }
            var html = '';
            var arr;
            $.each(list, function (index, item) {
                var id = item.id;
                var img = item.personalImgs;
                arr = img.split(",")
                // console.log('形象照',arr);//每个人的形象照数组
                // 形象照
                for (var i = 0; i < arr.length; i++) {
                    html += '<img class="cardImg" src="' + arr[i] + '" alt="" style="width:200px;">'
                }
                $("#red_sh").append(
                    '<div class="content_row" id="content_row">' +
                    '<div class="layui-row" id="row">' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">姓名：</span>' +
                    '<span class="color_gray">' + item.wxName + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">性别：</span>' +
                    '<span class="color_gray">' + (item.sex == 1 ? "男" : "女") + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">年龄：</span>' +
                    '<span class="color_gray">' + item.age + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">店铺：</span>' +
                    '<span class="color_gray">' + item.hasShop + '</span>' +
                    ' </div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo">' +
                    ' <span class="color_black">平台ID：</span>' +
                    '<span class="color_gray text">' + item.id + '</span>' +
                    '</div>' +
                    ' </div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">平台：</span>' +
                    '<span class="color_gray">' + item.platFormName + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">手机号码：</span>' +
                    '<span class="color_gray">' + item.phoneNo + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">邀请人：</span>' +
                    '<span class="color_gray">' + item.marketer + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md4">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">粉丝量：</span>' +
                    '<span class="color_gray">' + item.fansNums + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">申请时间：</span>' +
                    '<span class="color_gray">' + item.createDate + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">居住地址：</span>' +
                    '<span class="color_gray">' + item.country + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md9">' +
                    '<div class="grid-demo grid-demo-bg1">' +
                    '<span class="color_black">身份证号码：</span>' +
                    '<span class="color_gray">' + item.idCardNumber + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="layui-col-md3">' +
                    //'<!-- 一级模态框-->'+
                    '<div class="grid-demo grid-demo-bg1" data-toggle="modal" data-target="#myModal' + index + '">' +
                    '更多资料' +
                    '</div>' +
                    ' <!-- Modal -->' +
                    '<div class="modal fade" id="myModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y:auto">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel"> 更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">手持身份证照：</P>' +
                    '<img class="cardImg" src="' + item.idCardPic + '" alt="" data-toggle="modal" data-target="#myModal1' + index + '">' +
                    '</div>' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">身份证正/反面照：</P>' +
                    ' <img class="cardImg" src="' + item.idCardUpPic + '" alt="" data-toggle="modal" data-target="#myModal2' + index + '">' +
                    '<img class="cardImg" src="' + item.idCardDownPic + '" alt="" data-toggle="modal" data-target="#myModal3' + index + '">' +
                    '</div>' +
                    '<div class="more_cardID" id="person">' +
                    '<P class="cardText">形象照：</P>' + html +
                    ' </div>' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">平台截图：</P>' +
                    '<img class="cardImg" src="' + item.platformImgs + '" alt="" data-toggle="modal" data-target="#myModal4' + index + '">' +
                    '</div>' +
                    '</div>' +
                    '<button type="button" id="pass" onclick="pass(\''+id+'\')" class="btn btn_green" style="margin: 10% 10px 10% 36%;">通过</button>' +
                    '<button type="button" id="nopass" onclick="nopass(\''+id+'\')" class="btn btn-default">拒绝</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 手持身份证照 -->' +
                    '<div class="modal fade" id="myModal1' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">手持身份证照：</P>' +
                    '<img src="' + item.idCardPic + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 身份证正面 -->' +
                    '<div class="modal fade" id="myModal2' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">身份证正面照：</P>' +
                    '<img src="' + item.idCardUpPic + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 身份证反面 -->' +
                    '<div class="modal fade" id="myModal3' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">身份证反面：</P>' +
                    '<img src="' + item.idCardDownPic + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 平台截图 -->' +
                    '<div class="modal fade" id="myModal4' + index + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">平台截图：</P>' +
                    '<img src="' + item.platformImgs + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    ' <div class="modal-footer">确定</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
        }
    })
}

// 审核通过
function pass(id) {
    var pass_data = {
        'token': token,
        'appletUserId': id,//用户ID
        'ifPass': 'pass'//过或不过
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/starApproveOperate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(pass_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("审核通过")
            } else {
                alert("审核未通过")
            }
            zhi()
            // window.location.reload();
        }
    })
}
// 审核未通过
function nopass(id) {
    var nopass_data = {
        'token': token,
        'appletUserId': id,//用户ID
        'ifPass': 'nopass'//过或不过
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/starApproveOperate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(nopass_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("审核已拒绝")
            } else {
                alert("审核拒绝失败")
            }
            zhi()
            // window.location.reload();
        }
    })
}
