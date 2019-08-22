var token = localStorage.getItem('token');
var globel = localStorage.getItem('globel')
var type = 'AP';
var wxName = '';

var ipt = $("#dd_ipt").val();
var currPage1 = parseInt($('#currPage1').text()); // 初始页1
var currPage2 = parseInt($('#currPage2').text()); // 初始页1
var currPage3 = parseInt($('#currPage3').text()); // 初始页1
var currPage4 = parseInt($('#currPage4').text()); // 初始页1
var allPage1 = 0;
var allPage2 = 0;
var allPage3 = 0;
var allPage4 = 0;
var pageSize = 6;

getPYList();
getAPList();
getLKList();
getFNList();
listenerDom();

// 先确定当前的tab
function currTab() {
    $('.tab-pane').each(function (index) {
        if ($(this).hasClass('active')) {
            switch (index) {
                case 0:
                    type = 'PY';
                    break;
                case 1:
                    type = 'AP';
                    break;
                case 2:
                    type = 'LK';
                    break;
                case 3:
                    type = 'FN';
                    break;
            }
        }
    })
    return type;
}

// 搜索
$('#basic-addon2').click(function () {
    currPage1 = 1; // 初始页1
    currPage2 = 1; // 初始页1
    currPage3 = 1; // 初始页1
    currPage4 = 1; // 初始页1
    $('#currPage1').text(currPage1); // 初始页1
    $('#currPage2').text(currPage2); // 初始页1
    $('#currPage3').text(currPage3); // 初始页1
    $('#currPage4').text(currPage4); // 初始页1
    wxName = $('#dd_ipt').val();
    type = currTab();
    getPYList();
    getAPList();
    getLKList();
    getFNList();
})

function listenerDom() {
    // 上一页
    $('.last').click(function () {
        type = currTab();
        switch (type) {
            case 'PY':
                if (currPage1 == 1 || currPage1 == 0) {
                    alert('这是第一页');
                } else {
                    currPage1--;
                    $('#currPage1').text(currPage1);
                    getPYList();
                }
                break;
            case 'AP':
                if (currPage2 == 1 || currPage2 == 0) {
                    alert('这是第一页');
                } else {
                    currPage2--;
                    $('#currPage2').text(currPage2);
                    getAPList();
                }
                break;
            case 'LK':
                if (currPage3 == 1 || currPage3 == 0) {
                    alert('这是第一页');
                } else {
                    currPage3--;
                    $('#currPage3').text(currPage3);
                    getLKList();
                }
                break;
            case 'FN':
                if (currPage4 == 1 || currPage4 == 0) {
                    alert('这是第一页');
                } else {
                    currPage4--;
                    $('#currPage4').text(currPage4);
                    getFNList();
                }
                break;
        }
    })
    // 点击下一页
    $('.next').click(function () {
        type = currTab();
        switch (type) {
            case 'PY':
                if (currPage1 == allPage1) {
                    alert('这是最后一页');
                } else {
                    currPage1++;
                    $('#currPage1').text(currPage1);
                    getPYList();
                }
                break;
            case 'AP':
                if (currPage2 == allPage2) {
                    alert('这是最后一页');
                } else {
                    currPage2++;
                    $('#currPage2').text(currPage2);
                    getAPList();
                }
                break;
            case 'LK':
                if (currPage3 == allPage3) {
                    alert('这是最后一页');
                } else {
                    currPage3++;
                    $('#currPage3').text(currPage3);
                    getLKList();
                }
                break;
            case 'FN':
                if (currPage4 == allPage4) {
                    alert('这是最后一页');
                } else {
                    currPage4++;
                    $('#currPage4').text(currPage4);
                    getFNList();
                }
                break;
        }
    })
}
// 局部刷新
function zhi(){
    currPage1 = 1; // 初始页1
    currPage2 = 1; // 初始页1
    currPage3 = 1; // 初始页1
    currPage4 = 1; // 初始页1
    $('#currPage1').text(currPage1); // 初始页1
    $('#currPage2').text(currPage2); // 初始页1
    $('#currPage3').text(currPage3); // 初始页1
    $('#currPage4').text(currPage4); // 初始页1
    wxName = '';//测试版生效
    $('#dd_ipt').val('')//正式版生效
    type = currTab();
    // 
    var need_data = {
        'token': token,
        'pageNumber': currPage1,
        'pageSize': pageSize,
        'type': 'PY',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(need_data),
        success: function (data) {
            var needList = data.data.pageData.list;
            // 渲染前先清空
            $("#needData").html('');
            // 总页数
            allPage1 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage1 = Math.ceil(allPage1);
            $('#allPage1').text(allPage1);
            // 非空判断
            if (needList.length == 0) {
                currPage1 = 0
                $('#currPage1').text(currPage1);
                return false;
            }
            $.each(needList, function (index, item) {
                var id = item.id;
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#needData").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjmyModal' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span id="rob_del" style="border-right: 1px solid #dedede" onclick="pass(\'' + id + '\')">通过</span>' +
                    '<span id="rob_del" onclick="nopass(\'' + id + '\')">拒绝</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjmyModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家平台：<span class="dd_layui_span">' + item.platName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                     tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                    images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
    // 派单中需求列表
    var need_data = {
        'token': token,
        'pageNumber': currPage2,
        'pageSize': pageSize,
        'type': 'AP',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(need_data),
        success: function (data) {
            var needList = data.data.pageData.list;
            $("#paiData").html('');
            // 总页数
            allPage2 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage2 = Math.ceil(allPage2);
            $('#allPage2').text(allPage2);
            if (needList.length == 0) {
                currPage2 = 0
                $('#currPage2').text(currPage2);
                return false;
            }
            $.each(needList, function (index, item) {
                var id = item.id;
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#paiData").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjModal' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 抢单人员-模态框 -->' +
                    '<div class="dd_foot">' +
                    '<span style="border-right: 1px solid #dedede" class="rob_del" onclick="rob(\'' + id + '\',this)" data-toggle="modal" data-target=".bs-example-modal-lg' + index + '">抢单人员</span>' +
                    '<span class="rob_del" onclick="rob_del(\'' + id + '\',this)">删除订单</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    ' <!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close"  id="close" data-dismiss="modal" aria-label="Close"><span  aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                      tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>发布时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>创建时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                     images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 完 -->' +
                    ' </div>' +
                    // 抢单人员列表
                    '<div class="modal fade bs-example-modal-lg' + index + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">' +
                    '<div class="modal-dialog modal-lg" role="document">' +
                    '<div class="modal-content" id="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">抢单人员</h4>' +
                    '</div>' +
                    '<table class="dd_table wh_table">' +
                    '<tbody id="robData">' +
                    '<!-- 抢单人员 -->' +
                    '</tbody>' +
                    '</table>' +
                    ' </div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
    //进行中列表展示 
    var need_data = {
        'token': token,
        'pageNumber': currPage3,
        'pageSize': pageSize,
        'type': 'LK',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(need_data),
        success: function (data) {
            var needList = data.data.pageData.list;
            $("#unway").html('');
            // 总页数
            allPage3 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage3 = Math.ceil(allPage3);
            $('#allPage3').text(allPage3);
            if (needList.length == 0) {
                currPage3 = 0
                $('#currPage3').text(currPage3);
                return false;
            }
            $.each(needList, function (index, item) {
                var id = item.id;
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#unway").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjing' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span style="border-right: 1px solid #dedede" id="rob_del" onclick="ipass(\'' + id + '\')">恢复订单</span>' +
                    '<span id="rob_del" onclick="noipass(\'' + id + '\')">结束订单</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjing' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +'<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>抢单人员：<span>' + item.starName + '</span><span style="color:#1890FF ">' + item.starPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                    tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>发布时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>创建时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                     images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
    //已完成列表展示 
    var fn_data = {
        'token': token,
        'pageNumber': currPage4,
        'pageSize': pageSize,
        'type': 'FN',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(fn_data),
        success: function (data) {
            var fiList = data.data.pageData.list;
            $("#finish").html('');
            // 总页数
            allPage4 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage4 = Math.ceil(allPage4);
            $('#allPage4').text(allPage4);
            if (fiList.length == 0) {
                currPage4 = 0
                $('#currPage4').text(currPage4);
                return false;
            }
            $.each(fiList, function (index, item) {
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#finish").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span id="dd_foot_detail" data-toggle="modal" data-target="#sjachieve' + index + '">订单详情</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjachieve' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +'<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>抢单人员：<span>' + item.starName + '</span><span style="color:#1890FF ">' + item.starPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                    tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>发布时间：<span class="dd_layui_span">' + item.approveDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>创建时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>完成时间：<span class="dd_layui_span">' + item.finshDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                     images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}

// 待审核需求列表
function getPYList() {
    var need_data = {
        'token': token,
        'pageNumber': currPage1,
        'pageSize': pageSize,
        'type': 'PY',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(need_data),
        success: function (data) {
            var needList = data.data.pageData.list;
            // 渲染前先清空
            $("#needData").html('');
            // 总页数
            allPage1 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage1 = Math.ceil(allPage1);
            $('#allPage1').text(allPage1);
            // 非空判断
            if (needList.length == 0) {
                currPage1 = 0
                $('#currPage1').text(currPage1);
                return false;
            }
            $.each(needList, function (index, item) {
                var id = item.id;
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#needData").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjmyModal' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span id="rob_del" style="border-right: 1px solid #dedede" onclick="pass(\'' + id + '\')">通过</span>' +
                    '<span id="rob_del" onclick="nopass(\'' + id + '\')">拒绝</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjmyModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家平台：<span class="dd_layui_span">' + item.platName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                     tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                    images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}

// 待审核-通过
function pass(id) {
    var dd_wait = {
        'token': token,
        'id': id,
        'ifPass': 'pass'
    }
    $.ajax({
        url: globel + "/hone/backend/offer/approveOperate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(dd_wait),
        success: function (data) {
            if (data.errorCode == 0) {
                alert('审核通过！')
            } else {
                alert('审核未通过！')
            }
            zhi()
            // window.location.reload()//实时刷新
        }
    })
}
// 待审核-拒绝
function nopass(id) {
    var dd_wait = {
        'token': token,
        'id': id,
        'ifPass': 'nopass'
    }
    $.ajax({
        url: globel + "/hone/backend/offer/approveOperate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(dd_wait),
        success: function (data) {
            if (data.errorCode == 0) {
                alert('审核已拒绝！')
            } else {
                alert('审核拒绝失败！')
            }
            zhi()
            // window.location.reload()//实时刷新
        }
    })
}

// 派单中需求列表
function getAPList() {
    var need_data = {
        'token': token,
        'pageNumber': currPage2,
        'pageSize': pageSize,
        'type': 'AP',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(need_data),
        success: function (data) {
            var needList = data.data.pageData.list;
            $("#paiData").html('');
            // 总页数
            allPage2 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage2 = Math.ceil(allPage2);
            $('#allPage2').text(allPage2);
            if (needList.length == 0) {
                currPage2 = 0
                $('#currPage2').text(currPage2);
                return false;
            }
            $.each(needList, function (index, item) {
                var id = item.id;
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#paiData").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjModal' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 抢单人员-模态框 -->' +
                    '<div class="dd_foot">' +
                    '<span style="border-right: 1px solid #dedede" class="rob_del" onclick="rob(\'' + id + '\',this)" data-toggle="modal" data-target=".bs-example-modal-lg' + index + '">抢单人员</span>' +
                    '<span class="rob_del" onclick="rob_del(\'' + id + '\',this)">删除订单</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    ' <!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close"  id="close" data-dismiss="modal" aria-label="Close"><span  aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                      tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>发布时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>创建时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                     images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<!-- 完 -->' +
                    ' </div>' +
                    // 抢单人员列表
                    '<div class="modal fade bs-example-modal-lg' + index + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">' +
                    '<div class="modal-dialog modal-lg" role="document">' +
                    '<div class="modal-content" id="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">抢单人员</h4>' +
                    '</div>' +
                    '<table class="dd_table wh_table">' +
                    '<tbody id="robData">' +
                    '<!-- 抢单人员 -->' +
                    '</tbody>' +
                    '</table>' +
                    ' </div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}

// 抢单人员
function rob(id, that) {
    $(that).css({ background: "#1890FF", color: "white" })
    var rob_data = {
        'token': token,
        'id': id,
        'pageNumber': '1',
        "pageSize": '6'
    }
    $.ajax({
        url: globel + "/hone/backend/offer/snatchUserList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(rob_data),
        success: function (data) {
            var robList = data.data.pageData.list;
            $.each(robList, function (index, item) {
                $("#robData").append(
                    '<tr>' +
                    '<td><img src="' + item.headPic + '" alt=""></td>' +
                    '<td class="tabel_name">' + item.wxName + '</td>' +
                    '<td>' + item.platName + '</td>' +
                    '<td>' + (item.sex == 2 ? "女" : "男") + '</td>' +
                    '<td>' + item.fansNums + '</td>' +
                    '</tr>'
                )
            })
            $(that).css({ background: "#FAFAFA", color: "#333333" })
        }
    })
}
// 删除订单
function rob_del(id, that) {
    $(that).attr('disabled', 1)//按钮只能点击一次
    $(that).css({ background: "#1890FF", color: "white" })
    var rob_del = {
        'token': token,
        'id': id
    }
    $.ajax({
        url: globel + "/hone/backend/offer/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(rob_del),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("删除成功")
            } else {
                alert("删除失败")
            }
            zhi()
            // window.location.reload()//实时刷新
        }
    })
}

// 进行中列表展示
function getLKList() {
    var need_data = {
        'token': token,
        'pageNumber': currPage3,
        'pageSize': pageSize,
        'type': 'LK',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(need_data),
        success: function (data) {
            var needList = data.data.pageData.list;
            $("#unway").html('');
            // 总页数
            allPage3 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage3 = Math.ceil(allPage3);
            $('#allPage3').text(allPage3);
            if (needList.length == 0) {
                currPage3 = 0
                $('#currPage3').text(currPage3);
                return false;
            }
            $.each(needList, function (index, item) {
                var id = item.id;
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#unway").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjing' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span style="border-right: 1px solid #dedede" id="rob_del" onclick="ipass(\'' + id + '\')">恢复订单</span>' +
                    '<span id="rob_del" onclick="noipass(\'' + id + '\')">结束订单</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjing' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +'<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>抢单人员：<span>' + item.starName + '</span><span style="color:#1890FF ">' + item.starPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                    tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>发布时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>创建时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                     images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}


// 进行中恢复订单
function ipass(id) {
    var ing_data = {
        'token': token,
        'id': id
    }
    $.ajax({
        url: globel + "/hone/backend/offer/recover",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(ing_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("恢复订单成功")
            } else {
                alert("恢复订单失败")
            }
            zhi()
            // window.location.reload()
        }
    })
}
// 进行中结束订单
function noipass(id) {
    var ing_data = {
        'token': token,
        'id': id
    }
    $.ajax({
        url: globel + "/hone/backend/offer/finsh",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(ing_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("订单已结束！")
            } else {
                alert("结束订单失败")
            }
            zhi()
            // window.location.reload()
        }
    })
}

// 已完成列表展示
function getFNList() {
    var fn_data = {
        'token': token,
        'pageNumber': currPage4,
        'pageSize': pageSize,
        'type': 'FN',//类型
        'wxName': wxName //商家微信名
    }
    $.ajax({
        url: globel + "/hone/backend/offer/list",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(fn_data),
        success: function (data) {
            var fiList = data.data.pageData.list;
            $("#finish").html('');
            // 总页数
            allPage4 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage4 = Math.ceil(allPage4);
            $('#allPage4').text(allPage4);
            if (fiList.length == 0) {
                currPage4 = 0
                $('#currPage4').text(currPage4);
                return false;
            }
            $.each(fiList, function (index, item) {
                // 循环标签
                var tags = item.tags;
                var tt = tags.split(",")
                var tagsHtml = '';
                 for(var i=0;i<tt.length;i++){
                     tagsHtml +=  '<span class="layui_span">' + tt[i] + '</span>';
                 }
                //循环图片
                var str = item.pics
                var img = str.split(",");
                var images="";
                for(var i=0;i<img.length;i++){
                    images +=  '<img style="width:98%" src="' + img[i] + '" alt="">';
                }
                $("#finish").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.wxName + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span>' + item.platName + '</span>' +
                    '<span style="margin-left: 10px;">' + item.title + '</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_price">' +
                    '<span style="color: #F03D37">' + item.price + '元</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<p>' + item.infos + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span id="dd_foot_detail" data-toggle="modal" data-target="#sjachieve' + index + '">订单详情</span>' +
                    '</div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjachieve' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +'<div class="layui-col-md12">' +
                    '<p>商家名称：<span style="color:#1890FF ">' + item.wxName + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>抢单人员：<span>' + item.starName + '</span><span style="color:#1890FF ">' + item.starPhone + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>' +
                    '需求标签：' +
                    tagsHtml+
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>发布时间：<span class="dd_layui_span">' + item.approveDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>创建时间：<span class="dd_layui_span">' + item.createDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>完成时间：<span class="dd_layui_span">' + item.finshDate + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p>商品图片：</p>' +
                     images +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}
