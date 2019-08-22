var token = localStorage.getItem('token')
var globel = localStorage.getItem('globel')
var wxName = '';
var platName = "";
var sex = "";

platName = $("#ipt_platName").val();
wxName = $("#ipt_wxName").val();
sex = $("#ipt_sex").val();
var currPage = parseInt($('#currPage').text()); // 初始页
var pageSize = 8;//页面数
var allPage = 0;//总页面

wh_list();
listenerDom();

// 搜索
$('#xun').click(function () {
    currPage = 1; // 初始页
    $('#currPage').text(currPage); // 初始页
    platName = $("#ipt_platName").val();
    wxName = $("#ipt_wxName").val();
    sex = $("#ipt_sex").val();
    if (sex == "女") {
        sex = 2;
    } else if (sex == '男') {
        sex = 1;
    }
    wh_list()
})
function listenerDom() {
    // 上一页
    $('.last').click(function () {
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            wh_list();
        }
    })
    // 点击下一页
    $('.next').click(function () {
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            wh_list();
        }
    })
}
// 局部刷新
function zhi() {
    currPage = 1; // 初始页
    $('#currPage').text(currPage); // 初始页
    $("#ipt_platName").val('');
    $("#ipt_wxName").val('');
    $("#ipt_sex").val('');
    var red_data = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize,//页面值
        'orderBy': 'createDate desc',
        'platName': platName,//平台名
        'wxName': wxName,
        'sex': sex
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/star/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(red_data),
        success: function (data) {
            var lists = data.data.pageData.list;
            // 渲染前先清空
            $("#red_tbody").html('');
            // 总页数
            allPage = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage = Math.ceil(allPage);
            $('#allPage').text(allPage);
            // 非空判断
            if (lists.length == 0) {
                currPage = 0
                $('#currPage').text(currPage);
                return false;
            }
            $.each(lists, function (index, item) {
                var id = item.id;
                setTimeout(aa, 100)
                function aa() {
                    $("#red_tbody").append(
                        '<tr>' +
                        '<td><img src="' + item.headPic + '" alt=""></td>' +
                        '<td class="tabel_name list_one">' + item.wxName + '</td>' +
                        '<td class="list_one">' + item.platName + '</td>' +
                        '<td class="list_one">' + (item.sex == 2 ? '女' : '男') + '</td>' +
                        '<td>' + item.fansNums + '</td>' +
                        '<td>' + item.createDate + '</td>' +
                        '<td>' +
                        '<button class="wh_table_btn right" onclick="red_more(\'' + id + '\')" data-toggle="modal" data-target="#myModalmore">更多资料</button>' +
                        '<button class="wh_table_btn" onclick="red_del(\'' + id + '\')">删除资料</button>' +
                        '</td>' +
                        '</tr> '
                    )
                }
            })
        }
    })
}
// 获取网红人员列表
function wh_list() {
    var red_data = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize,//页面值
        'orderBy': 'createDate desc',
        'platName': platName,//平台名
        'wxName': wxName,
        'sex': sex
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/star/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(red_data),
        success: function (data) {
            var lists = data.data.pageData.list;
            // 渲染前先清空
            $("#red_tbody").html('');
            // 总页数
            allPage = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage = Math.ceil(allPage);
            $('#allPage').text(allPage);
            // 非空判断
            if (lists.length == 0) {
                currPage = 0
                $('#currPage').text(currPage);
                return false;
            }

            $.each(lists, function (index, item) {
                var id = item.id;
                $("#red_tbody").append(
                    '<tr>' +
                    '<td><img src="' + item.headPic + '" alt=""></td>' +
                    '<td class="tabel_name list_one">' + item.wxName + '</td>' +
                    '<td class="list_one">' + item.platName + '</td>' +
                    '<td class="list_one">' + (item.sex == 2 ? '女' : '男') + '</td>' +
                    '<td>' + item.fansNums + '</td>' +
                    '<td>' + item.createDate + '</td>' +
                    '<td>' +
                    '<button class="wh_table_btn right" onclick="red_more(\'' + id + '\')" data-toggle="modal" data-target="#myModalmore">更多资料</button>' +
                    '<button class="wh_table_btn" onclick="red_del(\'' + id + '\')">删除资料</button>' +
                    '</td>' +
                    '</tr> '
                )
            })
        }
    })
}
// 更多资料
function red_more(id) {
    var more = {
        'token': token,
        'appletUserId': id
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/starInfo",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(more),
        success: function (data) {
            var list = data.data.userInfo;
            $("#row").html('')//清空上一个模态框的内容
            var html = '';
            var str = list.personalImgs;
            var img = str.split(",");
            for (var i = 0; i < img.length; i++) {
                html += '<img class="cardImg" src="' + img[i] + '" alt="" style="width:200px;">'
            }
            $("#row").append(
                '<P class="cardText">基本信息：</P>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">姓名：</span>' +
                '<span class="color_gray">' + list.wxName + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">性别：</span>' +
                '<span class="color_gray">' + (list.sex == 2 ? "女" : "男") + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">年龄：</span>' +
                '<span class="color_gray">' + list.age + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">店铺：</span>' +
                '<span class="color_gray">' + list.hasShop + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">平台ID：</span>' +
                '<span class="color_gray text">' + list.id + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">平台：</span>' +
                '<span class="color_gray">' + list.platFormName + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">手机号：</span>' +
                '<span class="color_gray">' + list.phoneNo + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">邀请人：</span>' +
                '<span class="color_gray">' + list.marketer + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4 md4">' +
                '<div class="grid-demo grid-demo-bg1">' +
                '<span class="color_black">粉丝量：</span>' +
                '<span class="color_gray">' + list.fansNums + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md12 md4">' +
                '<div class="grid-demo grid-demo-bg1">' +
                '<span class="color_black">申请时间：</span>' +
                '<span class="color_gray">' + list.createDate + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md12 md4">' +
                '<div class="grid-demo grid-demo-bg1">' +
                '<span class="color_black">居住地址：</span>' +
                '<span class="color_gray">' + list.country + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md9 md4">' +
                '<div class="grid-demo grid-demo-bg1">' +
                '<span class="color_black">身份证号码：</span>' +
                '<span class="color_gray">' + list.idCardNumber + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">手持身份证照：</P>' +
                '<img class="cardidImg" src="' + list.idCardPic + '" alt="" data-toggle="modal" data-target="#myModal1' + 1 + '">' +
                '</div>' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">身份证正/反面照：</P>' +
                ' <img class="cardidImg" src="' + list.idCardUpPic + '" alt="" data-toggle="modal" data-target="#myModal2' + 2 + '">' +
                '<img class="cardidImg" style="margin: 0" src="' + list.idCardDownPic + '" alt="" data-toggle="modal" data-target="#myModal3' + 3 + '">' +
                '</div>' +
                '<div class="more_cardID cardid" style="width:561px">' +
                '<P class="cardText">形象照：</P>' + html +
                '</div>' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">平台截图：</P>' +
                '<img class="cardidImg" src="' + list.platformImgs + '" alt="" data-toggle="modal" data-target="#myModal4' + 4 + '">' +
                '</div>' +
                '</div>' +
                '<!-- 二级模态框 -->' +
                '<!-- 手持身份证照 -->' +
                '<div class="modal fade" id="myModal1' + 1 + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                ' <div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" onclick="methodName()" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                '</div>' +
                ' <div class="modal-body">' +
                '<div class="more_cardID">' +
                '<P class="cardText">手持身份证照：</P>' +
                '<img src="' + list.idCardPic + '" alt="" style="width:100%;">' +
                '</div>' +
                '</div>' +
                ' <div class="modal-footer">确定</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!-- 二级模态框 -->' +
                '<!-- 身份证正面 -->' +
                '<div class="modal fade" id="myModal2' + 2 + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                ' <div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" onclick="methodName2()" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                '</div>' +
                ' <div class="modal-body">' +
                '<div class="more_cardID">' +
                '<P class="cardText">身份证正面照：</P>' +
                '<img src="' + list.idCardUpPic + '" alt="" style="width:100%;">' +
                '</div>' +
                '</div>' +
                ' <div class="modal-footer">确定</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!-- 二级模态框 -->' +
                '<!-- 身份证反面 -->' +
                '<div class="modal fade" id="myModal3' + 3 + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                ' <div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" onclick="methodName3()" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                '</div>' +
                ' <div class="modal-body">' +
                '<div class="more_cardID">' +
                '<P class="cardText">身份证反面：</P>' +
                '<img src="' + list.idCardDownPic + '" alt="" style="width:100%;">' +
                '</div>' +
                '</div>' +
                ' <div class="modal-footer">确定</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!-- 二级模态框 -->' +
                '<!-- 平台截图 -->' +
                '<div class="modal fade" id="myModal4' + 4 + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                ' <div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" onclick="methodName4()" aria-hidden="true">×</button>' +
                '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                '</div>' +
                ' <div class="modal-body">' +
                '<div class="more_cardID">' +
                '<P class="cardText">平台截图：</P>' +
                '<img src="' + list.platformImgs + '" alt="" style="width:100%;">' +
                '</div>' +
                '</div>' +
                ' <div class="modal-footer">确定</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>'
            )
        }
    })
}
function methodName() {
    $('#myModal1' + 1 + '').modal('toggle')
}
function methodName2() {
    $('#myModal2' + 2 + '').modal('toggle')
}
function methodName3() {
    $('#myModal3' + 3 + '').modal('toggle')
}
function methodName4() {
    $('#myModal4' + 4 + '').modal('toggle')
}
// 删除资料
function red_del(id) {
    var del = {
        'token': token,
        'appletUserId': id
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/delUser",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(del),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("删除成功！")
            } else {
                alert("删除失败！")
            }
            // window.location.reload()//实时刷新
            zhi()
        }
    })
}




