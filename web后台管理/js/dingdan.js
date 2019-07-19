// 订单管理（需求管理）
var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')


// 待审核需求列表(标签，商品图片都是多个，重新写)
var ipt = $("#dd_ipt").val();
var need_data = {
    'token': token,
    'pageNumber': 1,
    'pageSize': 5,
    'type': 'PY',//类型
    'wxName': ipt //商家微信名
}
$.ajax({
    url: globel + "/hone/backend/offer/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(need_data),
    success: function (data) {
        console.log('待审核需求列表', data)
        var needList = data.data.pageData.list;
        $.each(needList, function (index, item) {
            var tags = item.tags;
            var id = item.id;
            $("#needData").append(
                '<div class="col-md-4" id="tab-content">' +
                '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjmyModal">' +
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
                '<span style="border-right: 1px solid #dedede" onclick="pass(\'' + id + '\')">通过</span>' +
                '<span onclick="nopass(\'' + id + '\')">拒绝</span>' +
                '</div>' +
                '<!--订单更多资料-模态框-->' +
                '<!-- 商家更多资料 -->' +
                '<div class="modal fade" id="sjmyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<div class="row">' +
                '<div class="layui-col-md12">' +
                '<p>订单编号：<span class="dd_layui_span">' + item.orderNo + '</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>商家平台：<span class="dd_layui_span">' + item.platName + '</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>' +
                '需求标签：' +
                '<span class="layui_span">' + item.tags + '</span>' +
                // '<span class="layui_span">三农</span>' +
                // '<span class="layui_span">美女</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>粉丝要求：<span class="dd_layui_span">' + item.fansNums + '</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>商品图片：</p>' +
                '<img style="width:98%" src="' + item.pics[0] + '" alt="">' +
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
            console.log('通过', data)
            if (data.errorCode == 0) {
                alert('审核通过！')
                window.location.reload()//实时刷新
            } else {
                alert('审核未通过！')
            }
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
            console.log('通过', data)
            if (data.errorCode == 0) {
                alert('审核已拒绝！')
            } else {
                alert('网络错误！')
            }
        }
    })
}

// 派单中需求列表(标签，商品图片都是多个，重新写)
var ipt = $("#dd_ipt").val();
var need_data = {
    'token': token,
    'pageNumber': 1,
    'pageSize': 5,
    'type': 'AP',//类型
    'wxName': ipt //商家微信名
}
$.ajax({
    url: globel + "/hone/backend/offer/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(need_data),
    success: function (data) {
        console.log('派单中需求列表', data)
        var needList = data.data.pageData.list;
        $.each(needList, function (index, item) {
            var tags = item.tags;
            var id = item.id;
            $("#paiData").append(
                '<div class="col-md-4" id="tab-content">' +
                '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjModal">' +
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
                '<span style="border-right: 1px solid #dedede" onclick="rob(\'' + id + '\')" data-toggle="modal" data-target=".bs-example-modal-lg">抢单人员</span>' +
                '<span onclick="rob_del(\'' + id + '\')">删除订单</span>' +
                '</div>' +
                '<!--订单更多资料-模态框-->' +
                ' <!-- 商家更多资料 -->' +
                '<div class="modal fade" id="sjModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span  aria-hidden="true">&times;</span></button>' +
                '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<div class="row">' +
                '<div class="layui-col-md12">' +
                '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>' +
                '需求标签：' +
                '<span class="layui_span">' + item.tags + '</span>' +
                // '<span class="layui_span">三农</span>' +
                // '<span class="layui_span">美女</span>' +
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
                '<img style="width:98%" src="' + item.pics[0] + '" alt="">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!-- 完 -->' +
                ' </div>'
            )
        })
    }
})

// 抢单人员
function rob(id) {
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
            console.log('抢单人员', data)
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
        }
    })
}
// 删除订单
function rob_del(id) {
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
            console.log('删除订单', data);
            if(data.errorCode==0){
                alert("删除成功")
            }else{
                alert("删除失败")
            }
        }
    })
}

// 进行中列表展示
var ipt = $("#dd_ipt").val();
var need_data = {
    'token': token,
    'pageNumber': 1,
    'pageSize': 5,
    'type': 'LK',//类型
    'wxName': ipt //商家微信名
}
$.ajax({
    url: globel + "/hone/backend/offer/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(need_data),
    success: function (data) {
        console.log('进行中列表', data)
        var needList = data.data.pageData.list;
        $.each(needList, function (index, item) {
            var tags = item.tags;
            var id = item.id;
            $("#unway").append(
                '<div class="col-md-4" id="tab-content">' +
                '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjing">' +
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
                '<span style="border-right: 1px solid #dedede" onclick="ipass(\'' + id + '\')">恢复订单</span>' +
                '<span onclick="noipass(\'' + id + '\')">结束订单</span>' +
                '</div>' +
                '<!--订单更多资料-模态框-->' +
                '<!-- 商家更多资料 -->' +
                '<div class="modal fade" id="sjing" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<div class="row">' +
                '<div class="layui-col-md12">' +
                '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>抢单人员：<span>'+item.starName+'</span><span style="color:#1890FF ">'+item.starPhone+'</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>' +
                '需求标签：' +
                '<span class="layui_span">' + item.tags + '</span>' +
                // '<span class="layui_span">三农</span>' +
                // '<span class="layui_span">美女</span>' +
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
                '<img style="width:98%" src="' + item.pics[0] + '" alt="">' +
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
// 进行中恢复订单
function ipass(id){
    var ing_data={
        'token':token,
        'id':id
    }
    $.ajax({
        url: globel + "/hone/backend/offer/recover",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(ing_data),
        success: function (data) {
            console.log('恢复订单', data);
            if(data.errorCode==0){
                alert("恢复订单成功")
            }else{
                alert("恢复订单失败")
            }
        }
    })
}
// 进行中结束订单
function noipass(id){
    var ing_data={
        'token':token,
        'id':id
    }
    $.ajax({
        url: globel + "/hone/backend/offer/finsh",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(ing_data),
        success: function (data) {
            console.log('结束订单', data);
            if(data.errorCode==0){
                alert("订单已结束！")
            }else{
                alert("结束订单失败")
            }
        }
    })
}

// 已完成列表展示
var ipt = $("#dd_ipt").val();
var need_data = {
    'token': token,
    'pageNumber': 1,
    'pageSize': 5,
    'type': 'FN',//类型
    'wxName': ipt //商家微信名
}
$.ajax({
    url: globel + "/hone/backend/offer/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(need_data),
    success: function (data) {
        console.log('已完成列表', data)
        var needList = data.data.pageData.list;
        $.each(needList, function (index, item) {
            var tags = item.tags;
            var id = item.id;
            $("#finish").append(
                '<div class="col-md-4" id="tab-content">' +
                '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjing">' +
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
                '<span id="dd_foot_detail"data-toggle="modal" data-target="#sjachieve">订单详情</span>'+
                '</div>' +
                '<!--订单更多资料-模态框-->' +
                '<!-- 商家更多资料 -->' +
                '<div class="modal fade" id="sjing" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<h4 class="modal-title" id="myModalLabel">更多资料</h4>' +
                '</div>' +
                '<div class="modal-body">' +
                '<div class="row">' +
                '<div class="layui-col-md12">' +
                '<p>商家电话：<span style="color:#1890FF ">' + item.sellerPhone + '</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>抢单人员：<span>'+item.starName+'</span><span style="color:#1890FF ">'+item.starPhone+'</span></p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p>' +
                '需求标签：' +
                '<span class="layui_span">' + item.tags + '</span>' +
                // '<span class="layui_span">三农</span>' +
                // '<span class="layui_span">美女</span>' +
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
                '<img style="width:98%" src="' + item.pics[0] + '" alt="">' +
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
