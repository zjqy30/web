var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')
var platName = '';
var wxName = '';
var sex = '';
var ipt = '';
// var wh_ipt;
// var sj_ipt;


platName = $("#ipt_platName").val();
wxName = $("#ipt_wxName").val();
sex = $("#ipt_sex").val();
ipt = $("#dd_ipt").val();
// wh_ipt=$("#sj_ipt").val();
// sj_ipt=$("#sj_ipt").val();
var currPage = parseInt($('#currPage').text()); // 初始页
var currPage1 = parseInt($('#currPage1').text()); // 初始页
var pageSize = 8;//页面数
var allPage = 0;//总页面
var allPage1 = 0;//总页面

wanghong();
dingdan(); 
listenerDom();
sj_next()
// 搜索
// $('#wh_seach').click(function () {
//     currPage = 1; // 初始页
//     $('#currPage').text(currPage); // 初始页
//     // sj_industry = $("#sj_platName").val();
//     // sj_sex = $("#sj_sex").val();
//     // sj_wxName = $("#sj_wxName").val();
//     wh_ipt=$("#sj_ipt").val();
//     console.log(wh_ipt)
//     wanghong();
// })
// 搜索
// $('#sj_seach').click(function () {
//     currPage1 = 1; // 初始页
//     $('#currPage1').text(currPage1); // 初始页
//     // ipt = $("#dd_ipt").val();
//     sj_ipt=$("#sj_ipt").val();
//     dingdan();
// })
function listenerDom() {
    // 上一页
    $('.last').click(function () {
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            wanghong();
        }
    })
    

    // 点击下一页
    $('.next').click(function () {
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            wanghong();
        }
    })
    

}
function sj_next(){
    $('.last1').click(function () {
        if (currPage1 == 1 || currPage1 == 0) {
            alert('这是第一页');
        } else {
            currPage1--;
            $('#currPage1').text(currPage1);
            dingdan(); 
        }
    })
    $('.next1').click(function () {
        if (currPage1 == allPage1) {
            alert('这是最后一页');
        } else {
            currPage1++;
            $('#currPage1').text(currPage1);
            dingdan(); 
        }
    })
}

// 获取网红人员列表
function wanghong(){
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
            var list = data.data.pageData.list;
            // 渲染前先清空
            $("#red_tbody").html('');
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
                var id = item.id;
                var name = item.wxName
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
                    '<button class="wh_table_btn" onclick="red_more(\'' + name + '\',this,\'' + id + '\')">就他了</button>' +
                    '</td>' +
                    '</tr> '
                )
            })
        }
    })
}

// 派单中需求列表
function dingdan() {
    var need_data = {
        'token': token,
        'pageNumber': currPage1,
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
            // 渲染前先清空
            $("#sjData").html('');
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
                var name = item.wxName
                $("#sjData").append(
                    '<tr>' +
                    '<td><img src="' + item.headPic + '" alt=""></td>' +
                    '<td class="tabel_name">' + item.wxName + '</td>' +
                    '<td>' + item.title + '</td>' +
                    '<td>' + item.infos + '</td>' +
                    '<td>' + item.orderNo + '</td>' +
                    '<td>' +
                    '<button class="wh_table_btn right" onclick="sj_more(\'' + name + '\',this,\'' + id + '\')">就他了</button>' +
                    '</td>' +
                    '</tr> '
                )
            })
        }
    })
}
// 选择网红
var wh;
function red_more(name, that, starid) {
    console.log(name)
    $(that).css({ color: '#333', background: '#dedede' })
    //    $(that).removeClass('ds_color');
    //    $(that).siblings().addClass('ds_color');
    $("#wh_id").val(name)
    wh = starid;
    return starid

}
// 选择商家订单
var sj;
function sj_more(name, that, offerid) {
    console.log(name)
    $(that).css({ color: '#333', background: '#dedede' })
    $("#sj_id").val(name)
    sj = offerid;
    return offerid
}

// 点击创建链接
$("#create").click(function () {
    create(sj, wh)
})

function create(sj, wh) {
    console.log(sj, wh)
    var data = {
        'token': token,
        'offerId': sj,
        'starId': wh
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