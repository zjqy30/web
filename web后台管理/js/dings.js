var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')


// 获取网红人员列表
var platName = $("#ipt_platName").val();
var wxName = $("#ipt_wxName").val();
var sex = $("#ipt_sex").val();
var page = page ? page : 1;//第几页
var pageSize = 1000000//每页默认几条

var red_data = {
    'token': token,
    'pageNumber': page,//页数
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
        var list = data.data.pageData.list;
        $.each(list, function (index, item) {
            var id = item.id;
            var name=item.wxName
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
                '<button class="wh_table_btn" onclick="red_more(\'' + name + '\',this,\'' + id+ '\')">就他了</button>' +
                '</td>' +
                '</tr> '
            )
            
        })
         
    }
})

// 派单中需求列表(标签，商品图片都是多个，重新写)
var ipt = $("#dd_ipt").val();
var need_data = {
    'token': token,
    'pageNumber':page,
    'pageSize': pageSize,
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
            var id = item.id;
            var name=item.wxName
            $("#sjData").append(
                '<tr>' +
                '<td><img src="' + item.headPic + '" alt=""></td>' +
                '<td class="tabel_name">' + item.wxName + '</td>' +
                '<td>' + item.title + '</td>' +
                '<td>' + item.infos + '</td>' +
                '<td>' + item.orderNo + '</td>' +
                '<td>' +
                '<button class="wh_table_btn right" onclick="sj_more(\'' + name+ '\',this,\'' + id+ '\')">就他了</button>' +
                '</td>' +
                '</tr> '
                
            )
        })
    }
})
// 选择网红
var wh;
function red_more(name,that,starid){
    console.log(name)
   $(that).css({color:'#333',background:'#dedede'})
//    $(that).removeClass('ds_color');
//    $(that).siblings().addClass('ds_color');
    $("#wh_id").val(name)
    wh=starid;
    return starid
    
}
// 选择商家订单
var sj;
function sj_more(name,that,offerid){
    console.log(name)
   $(that).css({color:'#333',background:'#dedede'})
    $("#sj_id").val(name)
    sj=offerid;
    return offerid
}

// 点击创建链接
$("#create").click(function(){
    create(sj,wh)
})

function create(sj,wh){
    console.log(sj,wh)
    var data={
        'token':token,
        'offerId':sj,
        'starId':wh
    }
    $.ajax({
        url: globel + "/hone/backend/offer/autoCreate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            console.log('列表', data)
        }
    })
}