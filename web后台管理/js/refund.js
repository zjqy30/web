var globel = localStorage.getItem('globel')
var token = localStorage.getItem('token')

var currPage = parseInt($('#currPage').text()); // 初始页
var pageSize = 9;//页面数
var allPage = 0;//总页面
refund()
listenerDom()
function listenerDom() {
    // 上一页
    $('.last').click(function () {
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            refund();
        }
    })
    // 点击下一页
    $('.next').click(function () {
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            refund();
        }
    })
}

// 局部刷新
function zhi(){
    var redata = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize//页面值
    }
    $.ajax({
        url: globel + "/hone/backend/refund/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(redata),
        success: function (data) {
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#refund").html('');
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
            var arr;
            var tag;
            $.each(list, function (index, item) {
                var id = item.id;
                tag = item.tags.split(",");
                arr = item.pics.split(",");
                $("#refund").append(
                    '<div class="col-md-4" id="refund-content">' +
                    '<div class="refund_tab_detail" data-toggle="modal" data-target="#refundModal'+index+'">' +
                    '<div class="refund_detail">' +
                    '<div class="refund_userImg">' +
                    ' <img class="refund_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="refund_userText">' +
                    '<div class="refund_userName">' + item.wxName + '</div>' +
                    '<div class="refund_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="refund_price">' +
                    '<span style="color: #F03D37;font-weight: bold;">' + item.price + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="refund_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="refund_foot">' +
                    '<span class="re_del" style="border-right: 1px solid #dedede" onclick="tui(\'' + id + '\',this)">通过</span>' +
                    '<span class="re_del"  onclick="no(\'' + id + '\',this)">拒绝</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<div class="modal fade" id="refundModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p id="span">' +
                    '需求标签：' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="refund_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>发布时间：<span class="refund_layui_span">' + item.approveDate + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>创建时间：<span class="refund_layui_span">' + item.createDate + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>订单编号：<span class="refund_layui_span">' + item.orderNo + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>退款原因：<span class="refund_layui_span">' + item.reason + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p id="p"></p>' +
                    ' </div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
    
                )
            })
            // 循环图片(两个内容相同)
            $.each(arr, function (index, item) {
                $("#p").append(
                    '商品图片：<img src="' + item + '" alt="">'
                )
            })
            // 循环标签(两个内容相同)
            $.each(tag, function (index, tt) {
                $("#span").append(
                    '<span class="layui_span">'+tt+'</span>'
                )
             })
        }
    })
}

// 退款列表
function refund(){
    var redata = {
        'token': token,
        'pageNumber': currPage,//页数
        'pageSize': pageSize//页面值
    }
    $.ajax({
        url: globel + "/hone/backend/refund/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(redata),
        success: function (data) {
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#refund").html('');
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
            var arr;
            var tag;
            $.each(list, function (index, item) {
                var id = item.id;
                tag = item.tags.split(",");
                arr = item.pics.split(",");
                $("#refund").append(
                    '<div class="col-md-4" id="refund-content">' +
                    '<div class="refund_tab_detail" data-toggle="modal" data-target="#refundModal'+index+'">' +
                    '<div class="refund_detail">' +
                    '<div class="refund_userImg">' +
                    ' <img class="refund_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="refund_userText">' +
                    '<div class="refund_userName">' + item.wxName + '</div>' +
                    '<div class="refund_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="refund_price">' +
                    '<span style="color: #F03D37;font-weight: bold;">' + item.price + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="refund_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="refund_foot">' +
                    '<span class="re_del" style="border-right: 1px solid #dedede" onclick="tui(\'' + id + '\',this)">通过</span>' +
                    '<span class="re_del"  onclick="no(\'' + id + '\',this)">拒绝</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<div class="modal fade" id="refundModal'+index+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p id="span">' +
                    '需求标签：' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="refund_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>发布时间：<span class="refund_layui_span">' + item.approveDate + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>创建时间：<span class="refund_layui_span">' + item.createDate + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>订单编号：<span class="refund_layui_span">' + item.orderNo + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p>退款原因：<span class="refund_layui_span">' + item.reason + '</span></p>' +
                    ' </div>' +
                    ' <div class="layui-col-md12">' +
                    '<p id="p"></p>' +
                    ' </div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
    
                )
            })
            // 循环图片(两个内容相同)
            $.each(arr, function (index, item) {
                $("#p").append(
                    '商品图片：<img src="' + item + '" alt="">'
                )
            })
            // 循环标签(两个内容相同)
            $.each(tag, function (index, tt) {
                $("#span").append(
                    '<span class="layui_span">'+tt+'</span>'
                )
             })
        }
    })
}

// 退款
function tui(id, that) {
    $(that).attr('disabled', 1)//按钮只能点击一次
    $(that).css({ background: "#1890FF", color: "white" })
    var data = {
        'token': token,
        'offerId': id,
        'ifPass': 'pass'
    }
    $.ajax({
        url: globel + "/hone/backend/refund/operate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("退款成功!")
            } else {
                alert("退款失败!")
            }
            zhi()
            // window.location.reload()
        }
    })
}
// 拒绝
function no(id, that) {
    $(that).attr('disabled', 1)//按钮只能点击一次
    $(that).css({ background: "#1890FF", color: "white" })
    var data = {
        'token': token,
        'offerId': id,
        'ifPass': 'nopass'
    }
    $.ajax({
        url: globel + "/hone/backend/refund/operate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("退款已拒绝!")
            } else {
                alert("拒绝失败!")
            }
            zhi()
            // window.location.reload()
        }
    })
}