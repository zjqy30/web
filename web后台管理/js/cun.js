var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 纯佣订单

// 搜索功能
window.onload=function(){
    var cun_ipt = $("#cun_ipt").val();
    var seach=$("#basic-addon2");
    
    $(seach).click(function(){
        console.log(123)
        // if(cun_ipt==""||cun_ipt==null){
        //     alert("搜索内容不能为空")
        //     return
        // }else if(!cun_ipt){
        //     alert("搜索内容不存在")
        //     return
        // }else{
        //     console.loga('搜到了')
        // }
    })
}








// 待审核
var data = {
    'token': token,
    'pageNumber': 1,
    'pageSize': 6,
    'status': 'PY'
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
        $.each(list, function (index, item) {
            var id=item.id;
            $("#homeData").append(
                '<div class="col-md-4" id="tab-content">' +
                '<div class="dd_tab_detail" data-toggle="modal" data-target="#sjmyModal">' +
                '<div class="dd_detail">' +
                '<div class="dd_userImg">' +
                '<img class="dd_img" src="'+item.headPic+'" alt="">' +
                '</div>' +
                '<div class="dd_userText">' +
                '<div class="dd_userName">'+item.title+'</div>' +
                '<div class="dd_userDe">' +
                '<span style="color: #ADADAD">发布时间</span>' +
                '<span style="margin-left: 10px;">'+item.createDate+'</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="dd_gn">' +
                '<div class="dd_gn_first">' +
                '<div>' +
                '<span class="first_gary">商品类型：</span><span class="first_3">'+item.productType+'</span>' +
                ' </div>' +
                '<div style="float:right">' +
                '<span class="first_gary">粉丝要求：</span><span class="first_3">'+item.fansNums+'</span>' +
                '</div>' +
                '<div>' +
                '<span class="first_gary">达人平台：</span><span class="first_3">'+item.starPlate+'</span>' +
                '</div>' +
                '<div style="float:right">' +
                '<span class="first_gary">佣金比例：</span><span class="first_3">'+item.profitRatio+'%</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="dd_foot">' +
                '<span id="rob_del" style="border-right: 1px solid #dedede" onclick="cunpass(\''+id+'\',this)">通过</span>' +
                '<span id="rob_del" onclick="cunnopass(\''+id+'\',this)">拒绝</span>' +
                ' </div>' +
                '<!--订单更多资料-模态框-->' +
                '<!-- 商家更多资料 -->' +
                '<div class="modal fade" id="sjmyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
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
                ' '+item.productType+'' +
                '</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">发布时间：' +
                '<span class="dd_layui_span-span">'+item.createDate+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">' +
                '需求标签：' +
                '<span class="layui_span">'+item.starTag+'</span>' +
                // '<span class="layui_span">三农</span>' +
                // '<span class="layui_span">美女</span>' +
                ' </p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">粉丝要求：' +
                '<span class="dd_layui_span-span">'+item.fansNums+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">达人平台：' +
                '<span class="dd_layui_span-span">'+item.starPlate+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">店铺等级：' +
                '<span class="dd_layui_span-span">'+item.shopLevel+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">佣金比例：' +
                '<span class="dd_layui_span-span">'+item.profitRatio+'%</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">是否寄样：' +
                '<span class="dd_layui_span-span">'+item.ifSend+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">产品以往销量：' +
                '<span class="dd_layui_span-span">'+item.salesBefore+'</span>' +
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
// 待审核-通过
function cunpass(id,that){
    $(that).attr('disabled',1)//按钮只能点击一次
    $(that).css({background:"#1890FF",color:"white"})
    var cun_pass={
        'token':token,
        'id':id,
        'ifPass':'pass'
    }
    $.ajax({
        url: globel + '/hone/backend/offer/approveOperate',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(cun_pass),
        success: function (data) {
            console.log('待审核-通过', data);
            if(data.errorCode==0){
                alert("审核通过！")
            }else{
                alert("审核未通过！")
            }
            window.location.reload();
        }
    })
}
// 待审核-拒绝
function cunnopass(id,that){
    $(that).attr('disabled',1)//按钮只能点击一次
    $(that).css({background:"#1890FF",color:"white"})
    var cun_pass={
        'token':token,
        'id':id,
        'ifPass':'nopass'
    }
    $.ajax({
        url: globel + '/hone/backend/offer/approveOperate',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(cun_pass),
        success: function (data) {
            console.log('待审核-拒绝', data);
            if(data.errorCode==0){
                alert("审核已拒绝！")
            }else{
                alert(data.msg);
            }
            window.location.reload();
        }
    })
}

// 派单中
var data = {
    'token': token,
    'pageNumber': 1,
    'pageSize': 6,
    'status': 'AP '
}
$.ajax({
    url: globel + '/hone/backend/pureOffer/list',
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
        console.log('派单中',data);
        var list = data.data.pageData.list;
        $.each(list, function (index, item) {
            var id=item.id;
            $("#profileData").append(
                '<div class="col-md-4" id="tab-content">' +
                '<div class="dd_tab_detail" data-toggle="modal" data-target="#promyModal">' +
                '<div class="dd_detail">' +
                '<div class="dd_userImg">' +
                '<img class="dd_img" src="'+item.headPic+'" alt="">' +
                '</div>' +
                '<div class="dd_userText">' +
                '<div class="dd_userName">'+item.title+'</div>' +
                '<div class="dd_userDe">' +
                '<span style="color: #ADADAD">发布时间</span>' +
                '<span style="margin-left: 10px;">'+item.createDate+'</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="dd_gn">' +
                '<div class="dd_gn_first">' +
                '<div>' +
                '<span class="first_gary">商品类型：</span><span class="first_3">'+item.productType+'</span>' +
                ' </div>' +
                '<div style="float:right">' +
                '<span class="first_gary">粉丝要求：</span><span class="first_3">'+item.fansNums+'</span>' +
                '</div>' +
                '<div>' +
                '<span class="first_gary">达人平台：</span><span class="first_3">'+item.starPlate+'</span>' +
                '</div>' +
                '<div style="float:right">' +
                '<span class="first_gary">佣金比例：</span><span class="first_3">'+item.profitRatio+'%</span>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="dd_foot">' +
                '<span id="rob_del" style="border-right: 1px solid #dedede" onclick="propass(\''+id+'\',this)">删除</span>' +
                '<span id="rob_del" onclick="pronopass(\''+id+'\',this)">结束</span>' +
                ' </div>' +
                '<!--订单更多资料-模态框-->' +
                '<!-- 商家更多资料 -->' +
                '<div class="modal fade" id="promyModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
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
                ' '+item.productType+'' +
                '</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">发布时间：' +
                '<span class="dd_layui_span-span">'+item.createDate+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">' +
                '需求标签：' +
                '<span class="layui_span">'+item.starTag+'</span>' +
                // '<span class="layui_span">三农</span>' +
                // '<span class="layui_span">美女</span>' +
                ' </p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">粉丝要求：' +
                '<span class="dd_layui_span-span">'+item.fansNums+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">达人平台：' +
                '<span class="dd_layui_span-span">'+item.starPlate+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">店铺等级：' +
                '<span class="dd_layui_span-span">'+item.shopLevel+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">佣金比例：' +
                '<span class="dd_layui_span-span">'+item.profitRatio+'%</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">是否寄样：' +
                '<span class="dd_layui_span-span">'+item.ifSend+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">产品以往销量：' +
                '<span class="dd_layui_span-span">'+item.salesBefore+'</span>' +
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
// 派单中-删除
function propass(id,that){
    $(that).attr('disabled',1)//按钮只能点击一次
    $(that).css({background:"#1890FF",color:"white"})
    var pro_data={
        'token':token,
        'id':id,
        'ifPass':'pass'
    }
    $.ajax({
        url: globel + '/hone/backend/offer/del',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(pro_data),
        success: function (data) {
            console.log('派单中-删除',data)
            if(data.errorCode==0){
                alert("删除成功！")
            }else{
                alert("删除失败！")
            }
            window.location.reload();
        }
    })
}
// 派单中-结束
function pronopass(id,that){
    $(that).attr('disabled',1)//按钮只能点击一次
    $(that).css({background:"#1890FF",color:"white"})
    var pro_data={
        'token':token,
        'id':id,
        'ifPass':'nopass'
    }
    $.ajax({
        url: globel + '/hone/backend/offer/del',
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(pro_data),
        success: function (data) {
            console.log('派单中-结束',data)
            if(data.errorCode==0){
                alert("订单已结束！")
            }else{
                alert("订单结束失败！")
            }
            window.location.reload();
        }
    })
}

// 已完成
// 要传的参数
var data = {
    'token': token,
    'pageNumber': 1,
    'pageSize': 6,
    'status': 'FN'
}
// 发送ajax请求
$.ajax({
    url: globel + '/hone/backend/pureOffer/list',//请求路径
    dataType: 'json',//请求的格式
    type: "post",//请求方式，post请求
    contentType: "application/json",//一直带着，先别管
    data: JSON.stringify(data),//上面要传的参数放在这里
    success: function (data) {//成功回调函数
        console.log('已完成',data);//成功之后获取数据
        // 拿到数据进行页面渲染
        var list = data.data.pageData.list;
        $.each(list, function (index, item) {
            var id=item.id;
           $("#settingsData").append(
            '<div class="col-md-4" id="tab-content">' +
            '<div class="dd_tab_detail">' +
            '<div class="dd_detail">' +
            '<div class="dd_userImg">' +
            '<img class="dd_img" src="'+(item.headPic?item.headPic:"")+'" alt="">' +
            '</div>' +
            '<div class="dd_userText">' +
            '<div class="dd_userName">'+item.title+'</div>' +
            '<div class="dd_userDe">' +
            '<span style="color: #ADADAD">发布时间</span>' +
            '<span style="margin-left: 10px;">'+item.createDate+'</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="dd_gn">' +
            '<div class="dd_gn_first">' +
            '<div>' +
            '<span class="first_gary">商品类型：</span><span class="first_3">'+item.productType+'</span>' +
            ' </div>' +
            '<div style="float:right">' +
            '<span class="first_gary">粉丝要求：</span><span class="first_3">'+item.fansNums+'</span>' +
            '</div>' +
            '<div>' +
            '<span class="first_gary">达人平台：</span><span class="first_3">'+item.starPlate+'</span>' +
            '</div>' +
            '<div style="float:right">' +
            '<span class="first_gary">佣金比例：</span><span class="first_3">'+item.profitRatio+'%</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="dd_foot">' +
            '<span id="dd_foot_detail" data-toggle="modal" data-target="#finshed">订单详情</span>'+
            ' </div>'+
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
                ' '+item.productType+'' +
                '</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">发布时间：' +
                '<span class="dd_layui_span-span">'+item.createDate+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">' +
                '需求标签：' +
                '<span class="layui_span">'+item.starTag+'</span>' +
                // '<span class="layui_span">三农</span>' +
                // '<span class="layui_span">美女</span>' +
                ' </p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">粉丝要求：' +
                '<span class="dd_layui_span-span">'+item.fansNums+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">达人平台：' +
                '<span class="dd_layui_span-span">'+item.starPlate+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">店铺等级：' +
                '<span class="dd_layui_span-span">'+item.shopLevel+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">佣金比例：' +
                '<span class="dd_layui_span-span">'+item.profitRatio+'%</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">是否寄样：' +
                '<span class="dd_layui_span-span">'+item.ifSend+'</span>' +
                '</p>' +
                '</div>' +
                '<div class="layui-col-md12">' +
                '<p class="layui-col-md12-p">产品以往销量：' +
                '<span class="dd_layui_span-span">'+item.salesBefore+'</span>' +
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
