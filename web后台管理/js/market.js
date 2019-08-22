// var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')
var globel = localStorage.getItem('globel')
var market_name = $("#market_name").val();

var currPage = parseInt($('#currPage').text()); // 初始页
var currPage1 = parseInt($('#currPage1').text()); // 初始页
var pageSize = 8;//页面数
var allPage = 0;//总页面
var allPage1 = 0;//总页面
var yid;

market();
listenerDom();
next_li();

function listenerDom(){
    // 上一页
    $('.last').click(function () {
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            market();
        }
    }) 
    // 点击下一页
    $('.next').click(function () {
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            market();
        }
    })
}
function next_li(){
    $('.last1').click(function () {
        if (currPage1 == 1 || currPage1 == 0) {
            alert('这是第一页');
        } else {
            currPage1--;
            $('#currPage1').text(currPage1);
            please(yid)
        }
    })
    $('.next1').click(function () {
        if (currPage1 == allPage1) {
            alert('这是最后一页');
        } else {
            currPage1++;
            $('#currPage1').text(currPage1);
            please(yid)
        }
    })
}
// 局部刷新
function zhi(){
    $("#market_name").val('');
    var type_data = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize //页面值
    }
    $.ajax({
        url: globel + "/hone/backend/marketer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(type_data),
        success: function (data) {
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#red_ti").html('');
            $(".models").html('');
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
                var id = list[index].id
                $("#red_ti").append(
                    '<tr>' +
                    '<td><img src="images/hehua.jpg" alt=""></td>' +
                    '<td class="market_name">' + item.marketName + '</td>' +
                    '<td>男</td>' +
                    '<td>' + item.inviteNums + '</td>' +
                    '<td>' + item.userCode + '</td>' +
                    '<td><img src="' + item.qrcodeUrl + '" alt="" data-toggle="modal" data-target="#myModal1' + index + '"></td>' +
                    '<td>' +
                    '<button class="market_table_btn right" onclick="please(\'' + id + '\')" data-toggle="modal" data-target="#myModalmore">邀请人员</button>' +
                    '<button class="market_table_btn" onclick="market_del(\'' + id + '\')">删除资料</button>' +
                    ' </td>' +
                    '</tr>'
                )
                $(".models").append(
                    ' <div class="modal fade" id="myModal1' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"  aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">' + item.marketName + '</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<img src="' + item.qrcodeUrl + '" alt="">' +
                    '</div>' +
                    '<div class="modal-footer">' +
                    '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}
// 获取销售人员列表
function market(){
    var type_data = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize //页面值
    }
    $.ajax({
        url: globel + "/hone/backend/marketer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(type_data),
        success: function (data) {
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#red_ti").html('');
            $(".models").html('');
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
                var id = list[index].id
                $("#red_ti").append(
                    '<tr>' +
                    '<td><img src="images/hehua.jpg" alt=""></td>' +
                    '<td class="market_name">' + item.marketName + '</td>' +
                    '<td>男</td>' +
                    '<td>' + item.inviteNums + '</td>' +
                    '<td>' + item.userCode + '</td>' +
                    '<td><img src="' + item.qrcodeUrl + '" alt="" data-toggle="modal" data-target="#myModal1' + index + '"></td>' +
                    '<td>' +
                    '<button class="market_table_btn right" onclick="please(\'' + id + '\')" data-toggle="modal" data-target="#myModalmore">邀请人员</button>' +
                    '<button class="market_table_btn" onclick="market_del(\'' + id + '\')">删除资料</button>' +
                    ' </td>' +
                    '</tr>'
                )
                $(".models").append(
                    ' <div class="modal fade" id="myModal1' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    ' <div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal"  aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">' + item.marketName + '</h4>' +
                    '</div>' +
                    ' <div class="modal-body">' +
                    '<img src="' + item.qrcodeUrl + '" alt="">' +
                    '</div>' +
                    '<div class="modal-footer">' +
                    '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}

//点击弹出邀请人员
function please(id) {
    yid=id;
    var market_data = {
        'token': token,
        'marketerId': id,
        'pageNumber': currPage1,
        'pageSize': pageSize

    }
    $.ajax({
        url: globel + "/hone/backend/marketer/inviteList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(market_data),
        success: function (data) {
            var please_list = data.data.pageData.list;
            // 渲染前先清空
            $("#market_red").html('');
             // 总页数
             allPage1 = parseInt(data.data.pageData.totalCount) / pageSize;
             allPage1 = Math.ceil(allPage1);
             $('#allPage1').text(allPage1);
             // 非空判断
             if (please_list.length == 0) {
                 currPage1 = 0
                 $('#currPage1').text(currPage1);
                 return false;
             }
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
            // console.log('删除', data)
            if (data.errorCode == 0) {
                alert("删除成功！")
            } else {
                alert("删除失败！")
            }
            zhi()
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
            var liss = data.data.hoMarketer;
            $("#red_ti").append(
                '<tr>' +
                '<td><img src="images/hehua.jpg" alt=""></td>' +
                '<td class="market_name">' + liss.marketName + '</td>' +
                '<td>男</td>' +
                '<td>' + liss.inviteNums + '</td>' +
                '<td>' + liss.userCode + '</td>' +
                '<td class="market_btn" style="color:#1890ff;">' + liss.qrcodeUrl + '</td>' +
                '<td>' +
                '<button class="market_table_btn right" data-toggle="modal" data-target="#myModalmore">邀请人员</button>' +
                '<button class="market_table_btn">删除资料</button>' +
                ' </td>' +
                '</tr>'
            )
            market_name = ""
            zhi()
        }
    })
}
