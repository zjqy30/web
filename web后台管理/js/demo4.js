var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 获取商家人员列表
var sj_industry = $("#sj_platName").val();
var sj_sex = $("#sj_sex").val();
var sj_wxName = $("#sj_wxName").val();
var page = page ? page : 1;
var pageSize = 7;

var sj_data = {
    'token': token,
    'pageNumber': page,//页数
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
// 更多资料(点击之后不能刷新，点击下一个还是上一个信息，必须手动刷新才行)
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
            console.log(list)
            // debugger
            $("#row").append(
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
                '<img class="cardidImg" src="' + list.idCardPic + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                '</div>' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">营业执照：</P>' +
                '<img class="cardidImg" src="' + list.businessLicense + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                '</div>' +
                '<div class="more_cardID cardid">' +
                '<P class="cardText">身份证正/反面照：</P>' +
                ' <img class="cardidImg" src="' + list.idCardUpPic + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                '<img class="cardidImg" style="margin: 0" src="' + list.idCardDownPic + '" alt="" data-toggle="modal" data-target="#myModal1">' +
                '</div>' +
                '</div>'
            )

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
            window.location.reload()//实时刷新
        }
    })
}


// 分页
var sj_industry = $("#sj_platName").val();
var sj_sex = $("#sj_sex").val();
var sj_wxName = $("#sj_wxName").val();
var page = page ? page : 1;
var pageSize = 7;

function goodstable(p) {
    var sj_data = {
        'token': token,
        'pageNumber': page,//页数
        'pageSize': pageSize,//页面值
        'orderBy': 'createDate desc',
        'industry': sj_industry,//平台名
        'wxName': sj_wxName,
        'sex': sj_sex
    }
    page = p
    $.ajax({
        url: globel + "/hone/backend/userBasic/seller/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            console.log('分页', data)
            // 总条数
            var totalCount = data.data.pageData.totalCount;
            var list = data.data.pageData.list;
            //  页数
            pageToti = Math.ceil(totalCount / pageSize);
            console.log(pageToti);

            if (p >= 0 && p <= pageToti + 1) {
                p = 1
                // 添加页数
                document.getElementById("span").innerHTML = page + "/" + pageToti;
                $("#content").find("tbody").empty()
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
        }
    })
}



// 查询
function sj_seach(p) {
    var sj_industry = $("#sj_platName").val();
    var sj_sex = $("#sj_sex").val();
    var sj_wxName = $("#sj_wxName").val();
    var sex = sj_sex == '女' ? '2' : '1'
    var sj_data = {
        'token': token,
        'pageNumber': page,//页数
        'pageSize': pageSize,//页面值
        'orderBy': 'createDate desc',
        'industry': sj_industry,//行业
        'wxName': sj_wxName,
        'sex': sex
    }
    page=p
    $.ajax({
        url: globel + "/hone/backend/userBasic/seller/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            console.log('cc', data)
            // 总条数
            var totalCount = data.data.pageData.totalCount;
             //  页数
            pageToti = Math.ceil(totalCount / pageSize);
            var list = data.data.pageData.list;
            if (p >= 0 && p <= pageToti + 1) {
                //  页数
             pageToti = Math.ceil(totalCount / pageSize);
                $("#content").find("tbody").empty()
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
            // window.location.reload()//需要手动刷新
        }
    })
}