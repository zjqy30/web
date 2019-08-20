var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')

var sj_wxName = '';
var sj_industry = "";
var sj_sex = "";

sj_industry = $("#sj_platName").val();
sj_sex = $("#sj_sex").val();
sj_wxName = $("#sj_wxName").val();
var currPage = parseInt($('#currPage').text()); // 初始页
var pageSize = 8;//页面数
var allPage = 0;//总页面

sj_lists()
listenerDom();

// 搜索
$('#sj_xun').click(function () {
    currPage = 1; // 初始页
    $('#currPage').text(currPage); // 初始页
    sj_industry = $("#sj_platName").val();
    sj_sex = $("#sj_sex").val();
    sj_wxName = $("#sj_wxName").val();
    if(sj_sex=="女"){
        sj_sex=2;
      }else if(sj_sex=='男'){
        sj_sex=1;
      }
    sj_lists()
})
function listenerDom() {
    // 上一页
    $('.last').click(function () {
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            sj_lists();
        }
    })

    // 点击下一页
    $('.next').click(function () {
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            sj_lists();
        }
    })

}

// 获取商家人员列表
function sj_lists() {
    var sj_data = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize,//页面值
        'orderBy': 'createDate desc',
        'industry': sj_industry,//平台名
        'wxName': sj_wxName,
        'sex': sj_sex
    }
    $.ajax({
        url: globel + "/hone/backend/userBasic/seller/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            console.log('商家人员列表', data)
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#sjData").html('');
             // 总页数
             allPage = parseInt(data.data.pageData.totalCount) / pageSize;
             allPage = Math.ceil(allPage);
             $('#allPage').text(allPage);
             // 非空判断
             if (list.length == 0) {
                 currPage = 0
                 $('#currPage').text(currPage);
                 return false;
             }
            $.each(list, function (index, item) {
                var id = item.id;
                $("#sjData").append(
                    '<tr>' +
                    '<td><img src="' + item.headPic + '" alt=""></td>' +
                    '<td class="tabel_name">' + item.wxName + '</td>' +
                    '<td>' + (item.sex == 2 ? '女' : '男') + '</td>' +
                    '<td>' + item.industry + '</td>' +
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
        url: globel + "/hone/backend/userBasic/sellerInfo",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(more),
        success: function (data) {
            console.log('网红详情列表', data)
            var list = data.data.userInfo;
            $("#row").html("")//清空上一个模态框的内容
            console.log('list', list.id)
            // debugger
            $("#row").append(
                '<div class="layui-row">' +
                '<P class="cardText">基本信息：</P>' +
                '<div class="layui-col-md4" id="md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">姓名：</span>' +
                '<span class="color_gray">' + list.wxName + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4" id="md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">性别：</span>' +
                '<span class="color_gray">' + (list.sex == 2 ? "女" : "男") + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md4" id="md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">邀请人：</span>' +
                '<span class="color_gray">' + list.marketer + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md6" id="md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">手机号：</span>' +
                '<span class="color_gray">' + list.phoneNo + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md6" id="md4">' +
                '<div class="grid-demo grid-demo-bg1">' +
                '<span class="color_black">申请时间：</span>' +
                '<span class="color_gray">' + list.createDate + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md6" id="md4">' +
                '<div class="grid-demo">' +
                '<span class="color_black">行业：</span>' +
                '<span class="color_gray">' + list.industry + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md6" id="md4">' +
                '<div class="grid-demo grid-demo-bg1">' +
                '<span class="color_black">居住地址：</span>' +
                '<span class="color_gray">' + list.country + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md9" id="md4">' +
                '<div class="grid-demo grid-demo-bg1">' +
                '<span class="color_black">身份证号码：</span>' +
                '<span class="color_gray">' + list.idCardNumber + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">手持身份证照：</P>' +
                '<img class="cardidImg" src="' + list.idCardPic + '" alt="" data-toggle="modal" data-target="#myModal1'+1+'">' +
                '</div>' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">营业执照：</P>' +
                '<img class="cardidImg" src="' + list.businessLicense + '" alt="" data-toggle="modal" data-target="#myModal4'+4+'">' +
                '</div>' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">身份证正/反面照：</P>' +
                ' <img class="cardidImg" src="' + list.idCardUpPic + '" alt="" data-toggle="modal" data-target="#myModal2'+2+'">' +
                '<img class="cardidImg" style="margin: 0" src="' + list.idCardDownPic + '" alt="" data-toggle="modal" data-target="#myModal3'+3+'">' +
                '</div>' +
                '</div>' +
                '</div>'+
                '<!-- 二级模态框 -->' +
                    '<!-- 手持身份证照 -->' +
                    '<div class="modal fade" id="myModal1' + 1 + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" onclick="methodName()"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">手持身份证照：</P>' +
                    '<img src="' + list.idCardPic + '" alt="" style="width:100%;">' +
                    '</div>' +
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
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 二级模态框 -->' +
                    '<!-- 营业执照 -->' +
                    '<div class="modal fade" id="myModal4' + 4 + '" tabindex="1" role="dialog" style="margin-left: -18px;" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" onclick="methodName4()" aria-hidden="true">×</button>' +
                    '<h4 class="modal-title" id="myModalLabel">查看大图</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<div class="more_cardID">' +
                    '<P class="cardText">营业执照：</P>' +
                    '<img src="' + list.businessLicense + '" alt="" style="width:100%;">' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
            )

        }
    })
}
function methodName(){
    $('#myModal1' + 1 + '').modal('toggle')
}
function methodName2(){
    $('#myModal2' + 2 + '').modal('toggle')
}
function methodName3(){
    $('#myModal3' + 3 + '').modal('toggle')
}
function methodName4(){
    $('#myModal4' + 4 + '').modal('toggle')
}
// 删除资料
function red_del(id) {
    console.log(123)
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
            console.log('删除资料', data)
            if(data.errorCode==0){
                alert("删除成功!")
            }else{
                alert("删除失败!")
            }
            window.location.reload()//实时刷新
        }
    })
}
