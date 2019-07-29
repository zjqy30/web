var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')
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
            console.log('网红列表', data)
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
                var img = item.headPic
                // console.log('头像', img)
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
// 更多资料(点击之后不能刷新，点击下一个还是上一个信息，必须手动刷新才行)
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
            console.log('网红详情列表', data)
            var list = data.data.userInfo;
            console.log(list)
            var str = list.personalImgs;
            var img = str.split(",");
            console.log('形象照', img);
            for (var i = 0; i < img.length; i++) {
                // debugger
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
                    '<span class="color_gray">' + (list.sex == 1 ? "女" : "男") + '</span>' +
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
                    '<img class="cardidImg" src="' + list.idCardPic + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                    '</div>' +
                    '<div class="more_cardID cardid">' +
                    '<P class="cardText">身份证正/反面照：</P>' +
                    ' <img class="cardidImg" src="' + list.idCardUpPic + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                    '<img class="cardidImg" style="margin: 0" src="' + list.idCardDownPic + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                    '</div>' +
                    '<div class="more_cardID cardid">' +
                    '<P class="cardText">形象照：</P>' +
                    '<img class="cardidImg" src="' + img[i] + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                    '</div>' +
                    '<div class="more_cardID cardid">' +
                    '<P class="cardText">平台截图：</P>' +
                    '<img class="cardidImg" src="' + list.platformImgs + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                    '</div>' +
                    '</div>'
                )
                break;
            }
        }
    })
}
// 删除资料（可以刷新，但是是全局，不是仅仅当前页面）
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
            if (data.errorCode == 0) {
                alert("删除成功！")
            } else {
                alert("删除失败！")
            }
            window.location.reload()//实时刷新
        }
    })
}




