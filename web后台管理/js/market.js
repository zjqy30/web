var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 页数没写
// 获取销售人员列表
var type_data = {
    'token': token,
    'pageNumber': 1,//页数
    'pageSize': 15 //页面值
}
$.ajax({
    url: globel + "/hone/backend/marketer/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(type_data),
    success: function (data) {
        var list = data.data.pageData.list;
        console.log('销售人员列表', list)
        $.each(list, function (index, item) {
            var id = list[index].id
            $("#red_ti").append(
                '<tr>' +
                '<td><img src="images/hehua.jpg" alt=""></td>' +
                '<td class="market_name">' + item.marketName + '</td>' +
                '<td>男</td>' +
                '<td>' + item.inviteNums + '</td>' +
                '<td>' + item.userCode + '</td>' +
                // '<td><img src="'+item.qrcodeUrl+'" alt=""></td>' +
                '<td class="market_btn" style="color:#1890ff;">' + item.qrcodeUrl + '</td>' +
                '<td>' +
                '<button class="market_table_btn right" onclick="please(\'' + id + '\')" data-toggle="modal" data-target="#myModalmore">邀请人员</button>' +
                '<button class="market_table_btn" onclick="market_del(\'' + id + '\')">删除资料</button>' +
                ' </td>' +
                '</tr>'
            )
        })
    }
})
//点击弹出邀请人员
function please(id) {
    var market_data = {
        'token': token,
        'marketerId': id,
        'pageNumber': '1',
        'pageSize': '10'

    }
    $.ajax({
        url: globel + "/hone/backend/marketer/inviteList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(market_data),
        success: function (data) {
            // console.log('邀请人员', data)
            var please_list = data.data.pageData.list;
            console.log(please_list)
            if (please_list) {
                $.each(please_list, function (index, item) {
                    $("#market_red").append(
                        '<tr>' +
                        '<td><img src="' + item.headPic + '" alt=""></td>' +
                        '<td class="tabel_name">' + item.wxName + '</td>' +
                        '<td>' + (item.type == '1' ? "网红" : "商家") + '</td>' +
                        '<td>' + (item.type == '1' ? item.platName : item.industry) + '</td>' +
                        '</tr> '
                    )
                })
            } else {
                $("#bobo").append(
                    '<div>暂时还没有邀请到人，要加油哦~</div>'
                )
            }
        }
    })
}
// 点击删除销售人员
function market_del(id) {
    var market_del = {
        'token': token,
        'marketerId': id
    }
    $.ajax({
        url: globel + "/hone/backend/marketer/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(market_del),
        success: function (data) {
            console.log('删除', data)
            if (data.errorCode == 0) {
                alert("删除成功！")
                window.location.reload()
            } else {
                alert("删除失败！")
            }

        }
    })
}

// 创建销售人员
function market_btn() {
    var market_name = $("#market_name").val();
    var mar_data = {
        'token': token,
        'name': market_name
    }
    $.ajax({
        url: globel + "/hone/backend/marketer/create",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(mar_data),
        success: function (data) {
            console.log('创建销售人员', data)
            var liss = data.data.hoMarketer;
            $("#red_ti").append(
                '<tr>' +
                '<td><img src="images/hehua.jpg" alt=""></td>' +
                '<td class="market_name">' + liss.marketName + '</td>' +
                '<td>男</td>' +
                '<td>' + liss.inviteNums + '</td>' +
                '<td>' + liss.userCode + '</td>' +
                // '<td><img src="'+item.qrcodeUrl+'" alt=""></td>' +
                '<td class="market_btn" style="color:#1890ff;">' + liss.qrcodeUrl + '</td>' +
                '<td>' +
                '<button class="market_table_btn right" data-toggle="modal" data-target="#myModalmore">邀请人员</button>' +
                '<button class="market_table_btn">删除资料</button>' +
                ' </td>' +
                '</tr>'
            )
            window.location.reload()
            market_name = ""
        }
    })
}
