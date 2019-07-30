var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')

// var type = status;
// type = 'AP';
var status = "PY"
var title = '';

var ipt = $("#cun_ipt").val();
var currPage1 = parseInt($('#currPage1').text()); // 初始页1
var currPage2 = parseInt($('#currPage2').text()); // 初始页1
var currPage3 = parseInt($('#currPage3').text()); // 初始页1
var allPage1 = 0;//初始化总页数
var allPage2 = 0;
var allPage3 = 0;
var pageSize = 6;

check();
single();
fanish();
listenerDom()

// 先确定当前的tab
function currTab() {
    $('.tab-pane').each(function (index) {
        if ($(this).hasClass('active')) {
            switch (index) {
                case 0:
                    // type = 'PY';
                    status = "PY"
                    break;
                case 1:
                    // type = 'AP';
                    status = "AP"
                    break;
                case 2:
                    // type = 'FN';
                    status = "FN"
                    break;
            }
        }
    })
    return status;
}
// 搜索
$('#basic-addon2').click(function () {
    currPage1 = 1; // 初始页1
    currPage2 = 1; // 初始页1
    currPage3 = 1; // 初始页1
    $('#currPage1').text(currPage1); // 初始页1
    $('#currPage2').text(currPage2); // 初始页1
    $('#currPage3').text(currPage3); // 初始页1
    title = $('#cun_ipt').val();
    console.log(123)
    console.log(title)
    type = currTab();
    check();
    single();
    fanish();
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
                    check();
                }
                break;
            case 'AP':
                if (currPage2 == 1 || currPage2 == 0) {
                    alert('这是第一页');
                } else {
                    currPage2--;
                    $('#currPage2').text(currPage2);
                    single();
                }
                break;
            case 'FN':
                if (currPage3 == 1 || currPage3 == 0) {
                    alert('这是第一页');
                } else {
                    currPage3--;
                    $('#currPage3').text(currPage3);
                    fanish();
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
                    check();
                }
                break;
            case 'AP':
                if (currPage2 == allPage2) {
                    alert('这是最后一页');
                } else {
                    currPage2++;
                    $('#currPage2').text(currPage2);
                    single();
                }
                break;
            case 'FN':
                if (currPage3 == allPage3) {
                    alert('这是最后一页');
                } else {
                    currPage3++;
                    $('#currPage3').text(currPage3);
                    fanish();
                }
                break;
        }

    })

}

// 纯佣订单
// 待审核
function check() {
    var data = {
        'token': token,
        'pageNumber': currPage1,
        'pageSize': pageSize,
        'status': 'PY',
        'title': title
    }
    $.ajax({
        url: globel + '/hone/backend/pureOffer/list',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log('待审核', data);
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#homeData").html('');
            // 总页数
            allPage1 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage1 = Math.ceil(allPage1);
            $('#allPage1').text(allPage1);
            // 非空判断
            if (list.length == 0) {
                currPage1 = 0;
                $('#currPage1').text(currPage1);
                return false;
            }
            $.each(list, function (index, item) {
                var id = item.id;
                $("#homeData").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjmyModal' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.title + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span style="color: #ADADAD">发布时间</span>' +
                    '<span style="margin-left: 10px;">' + item.createDate + '</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<div class="dd_gn_first">' +
                    '<div>' +
                    '<span class="first_gary">商品类型：</span><span class="first_3">' + item.productType + '</span>' +
                    ' </div>' +
                    '<div style="float:right">' +
                    '<span class="first_gary">粉丝要求：</span><span class="first_3">' + item.fansNums + '</span>' +
                    '</div>' +
                    '<div>' +
                    '<span class="first_gary">达人平台：</span><span class="first_3">' + item.starPlate + '</span>' +
                    '</div>' +
                    '<div style="float:right">' +
                    '<span class="first_gary">佣金比例：</span><span class="first_3">' + item.profitRatio + '%</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span id="rob_del" style="border-right: 1px solid #dedede" onclick="cunpass(\'' + id + '\',this)">通过</span>' +
                    '<span id="rob_del" onclick="cunnopass(\'' + id + '\',this)">拒绝</span>' +
                    ' </div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="sjmyModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span  aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">商品类型：' +
                    '<span class="dd_layui_span-span">' +
                    ' ' + item.productType + '' +
                    '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">发布时间：' +
                    '<span class="dd_layui_span-span">' + item.createDate + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">' +
                    '需求标签：' +
                    '<span class="layui_span">' + item.starTag + '</span>' +
                    // '<span class="layui_span">三农</span>' +
                    // '<span class="layui_span">美女</span>' +
                    ' </p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">粉丝要求：' +
                    '<span class="dd_layui_span-span">' + item.fansNums + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">达人平台：' +
                    '<span class="dd_layui_span-span">' + item.starPlate + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">店铺等级：' +
                    '<span class="dd_layui_span-span">' + item.shopLevel + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">佣金比例：' +//serverProfitRatio
                    '<span class="dd_layui_span-span">' + item.profitRatio + '%</span>' +
                    '<span class="dd_layui_span-span"> - </span>' +
                    '<span class="dd_layui_span-span">' + item.serverProfitRatio + '%</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">是否寄样：' +
                    '<span class="dd_layui_span-span">' + item.ifSend + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">产品以往销量：' +
                    '<span class="dd_layui_span-span">' + item.salesBefore + '</span>' +
                    '</p>' +
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
function cunpass(id, that) {
    $(that).attr('disabled', 1)//按钮只能点击一次
    $(that).css({ background: "#1890FF", color: "white" })
    var cun_pass = {
        'token': token,
        'id': id,
        'ifPass': 'pass'
    }
    $.ajax({
        url: globel + '/hone/backend/pureOffer/approveOperate',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(cun_pass),
        success: function (data) {
            console.log('待审核-通过', data);
            if (data.errorCode == 0) {
                alert("审核通过！")
            } else {
                alert("审核未通过！")
            }
            window.location.reload();
        },
        error: function (data) {
            if (data.errorCode == 1) {
                alert("审核异常！")
            }
        }
    })
}
// 待审核-拒绝
function cunnopass(id, that) {
    $(that).attr('disabled', 1)//按钮只能点击一次
    $(that).css({ background: "#1890FF", color: "white" })
    var cun_pass = {
        'token': token,
        'id': id,
        'ifPass': 'nopass'
    }
    $.ajax({
        url: globel + '/hone/backend/pureOffer/approveOperate',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(cun_pass),
        success: function (data) {
            console.log('待审核-拒绝', data);
            if (data.errorCode == 0) {
                alert("审核已拒绝！")
            } else {
                alert(data.msg);
            }
            // window.location.reload();
        }
    })
}

// 派单中
function single() {
    var data = {
        'token': token,
        'pageNumber': currPage2,
        'pageSize': pageSize,
        'status': 'AP ',
        'title': title
    }
    $.ajax({
        url: globel + '/hone/backend/pureOffer/list',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log('派单中', data);
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#profileData").html('');
            // 总页数
            allPage2 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage2 = Math.ceil(allPage2);
            $('#allPage2').text(allPage2);
            // 非空判断
            if (list.length == 0) {
                currPage2 = 0;
                $('#currPage2').text(currPage2);
                return false;
            }
            $.each(list, function (index, item) {
                var id = item.id;
                $("#profileData").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail" data-toggle="modal" data-target="#promyModal' + index + '">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + item.headPic + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.title + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span style="color: #ADADAD">发布时间</span>' +
                    '<span style="margin-left: 10px;">' + item.createDate + '</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<div class="dd_gn_first">' +
                    '<div>' +
                    '<span class="first_gary">商品类型：</span><span class="first_3">' + item.productType + '</span>' +
                    ' </div>' +
                    '<div style="float:right">' +
                    '<span class="first_gary">粉丝要求：</span><span class="first_3">' + item.fansNums + '</span>' +
                    '</div>' +
                    '<div>' +
                    '<span class="first_gary">达人平台：</span><span class="first_3">' + item.starPlate + '</span>' +
                    '</div>' +
                    '<div style="float:right">' +
                    '<span class="first_gary">佣金比例：</span><span class="first_3">' + item.profitRatio + '%</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span id="rob_del" style="border-right: 1px solid #dedede" onclick="propass(\'' + id + '\',this)">删除</span>' +
                    '<span id="rob_del" onclick="pronopass(\'' + id + '\',this)">结束</span>' +
                    ' </div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="promyModal' + index + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span  aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">商品类型：' +
                    '<span class="dd_layui_span-span">' +
                    ' ' + item.productType + '' +
                    '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">发布时间：' +
                    '<span class="dd_layui_span-span">' + item.createDate + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">' +
                    '需求标签：' +
                    '<span class="layui_span">' + item.starTag + '</span>' +
                    ' </p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">粉丝要求：' +
                    '<span class="dd_layui_span-span">' + item.fansNums + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">达人平台：' +
                    '<span class="dd_layui_span-span">' + item.starPlate + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">店铺等级：' +
                    '<span class="dd_layui_span-span">' + item.shopLevel + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">佣金比例：' +
                    '<span class="dd_layui_span-span">' + item.profitRatio + '%</span>' +
                    '<span class="dd_layui_span-span"> - </span>' +
                    '<span class="dd_layui_span-span">' + item.serverProfitRatio + '%</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">是否寄样：' +
                    '<span class="dd_layui_span-span">' + item.ifSend + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">产品以往销量：' +
                    '<span class="dd_layui_span-span">' + item.salesBefore + '</span>' +
                    '</p>' +
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
// 派单中-删除
function propass(id, that) {
    $(that).attr('disabled', 1)//按钮只能点击一次
    $(that).css({ background: "#1890FF", color: "white" })
    var pro_data = {
        'token': token,
        'id': id,
        'ifPass': 'pass'
    }
    $.ajax({
        url: globel + '/hone/backend/offer/del',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(pro_data),
        success: function (data) {
            console.log('派单中-删除', data)
            if (data.errorCode == 0) {
                alert("删除成功！")
            } else {
                alert("删除失败！")
            }
            window.location.reload();
        }
    })
}
// 派单中-结束
function pronopass(id, that) {
    $(that).attr('disabled', 1)//按钮只能点击一次
    $(that).css({ background: "#1890FF", color: "white" })
    var pro_data = {
        'token': token,
        'id': id,
        'ifPass': 'nopass'
    }
    $.ajax({
        url: globel + '/hone/backend/offer/del',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(pro_data),
        success: function (data) {
            console.log('派单中-结束', data)
            if (data.errorCode == 0) {
                alert("订单已结束！")
            } else {
                alert("订单结束失败！")
            }
            window.location.reload();
        }
    })
}

// 已完成
function fanish() {
    // 要传的参数
    var data = {
        'token': token,
        'pageNumber': currPage3,
        'pageSize': pageSize,
        'status': 'FN',
        'title': title
    }
    // 发送ajax请求
    $.ajax({
        url: globel + '/hone/backend/pureOffer/list',//请求路径
        dataType: 'json',//请求的格式
        type: "post",//请求方式，post请求
        contentType: "application/json",//一直带着，先别管
        data: JSON.stringify(data),//上面要传的参数放在这里
        success: function (data) {//成功回调函数
            console.log('已完成', data);//成功之后获取数据
            // 拿到数据进行页面渲染
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#settingsData").html('');
            // 总页数
            allPage3 = parseInt(data.data.pageData.totalCount) / pageSize;
            allPage3 = Math.ceil(allPage3);
            $('#allPage3').text(allPage3);
            // 非空判断
            if (list.length == 0) {
                currPage3 = 0;
                $('#currPage3').text(currPage3);
                return false;
            }
            $.each(list, function (index, item) {
                var id = item.id;
                $("#settingsData").append(
                    '<div class="col-md-4" id="tab-content">' +
                    '<div class="dd_tab_detail">' +
                    '<div class="dd_detail">' +
                    '<div class="dd_userImg">' +
                    '<img class="dd_img" src="' + (item.headPic ? item.headPic : "") + '" alt="">' +
                    '</div>' +
                    '<div class="dd_userText">' +
                    '<div class="dd_userName">' + item.title + '</div>' +
                    '<div class="dd_userDe">' +
                    '<span style="color: #ADADAD">发布时间</span>' +
                    '<span style="margin-left: 10px;">' + item.createDate + '</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_gn">' +
                    '<div class="dd_gn_first">' +
                    '<div>' +
                    '<span class="first_gary">商品类型：</span><span class="first_3">' + item.productType + '</span>' +
                    ' </div>' +
                    '<div style="float:right">' +
                    '<span class="first_gary">粉丝要求：</span><span class="first_3">' + item.fansNums + '</span>' +
                    '</div>' +
                    '<div>' +
                    '<span class="first_gary">达人平台：</span><span class="first_3">' + item.starPlate + '</span>' +
                    '</div>' +
                    '<div style="float:right">' +
                    '<span class="first_gary">佣金比例：</span><span class="first_3">' + item.profitRatio + '%</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="dd_foot">' +
                    '<span id="dd_foot_detail" data-toggle="modal" data-target="#finshed">订单详情</span>' +
                    ' </div>' +
                    '<!--订单更多资料-模态框-->' +
                    '<!-- 商家更多资料 -->' +
                    '<div class="modal fade" id="finshed" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                    '<div class="modal-dialog" role="document">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span  aria-hidden="true">&times;</span></button>' +
                    '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<div class="row">' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">商品类型：' +
                    '<span class="dd_layui_span-span">' +
                    ' ' + item.productType + '' +
                    '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">发布时间：' +
                    '<span class="dd_layui_span-span">' + item.createDate + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">' +
                    '需求标签：' +
                    '<span class="layui_span">' + item.starTag + '</span>' +
                    ' </p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">粉丝要求：' +
                    '<span class="dd_layui_span-span">' + item.fansNums + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">达人平台：' +
                    '<span class="dd_layui_span-span">' + item.starPlate + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">店铺等级：' +
                    '<span class="dd_layui_span-span">' + item.shopLevel + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">佣金比例：' +
                    '<span class="dd_layui_span-span">' + item.profitRatio + '%</span>' +
                    '<span class="dd_layui_span-span"> - </span>' +
                    '<span class="dd_layui_span-span">' + item.serverProfitRatio + '%</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">是否寄样：' +
                    '<span class="dd_layui_span-span">' + item.ifSend + '</span>' +
                    '</p>' +
                    '</div>' +
                    '<div class="layui-col-md12">' +
                    '<p class="layui-col-md12-p">产品以往销量：' +
                    '<span class="dd_layui_span-span">' + item.salesBefore + '</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    ' </div>'
                )
            })
        }
    })
}
