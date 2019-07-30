var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')


var currPage = parseInt($('#currPage').text()); // 初始页
var pageSize = 9;//页面数
var allPage = 0;//总页面

rob();
listenerDom();
function listenerDom() {
    // 上一页
    $('.last').click(function () {
        if (currPage == 1 || currPage == 0) {
            alert('这是第一页');
        } else {
            currPage--;
            $('#currPage').text(currPage);
            rob();
        }
    })
    // 点击下一页
    $('.next').click(function () {
        if (currPage == allPage) {
            alert('这是最后一页');
        } else {
            currPage++;
            $('#currPage').text(currPage);
            rob();
        }
    })

}
// var page=page?page:1;
// var pageSize=100;
// 获取纯佣-抢单管理列表
function rob(){
    var type_data = {
        'token': token,
        'pageNumber':currPage,
        'pageSize':pageSize
    }
    $.ajax({
        url: globel + "/hone/backend/pureOffer/snatchList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(type_data),
        success: function (data) {
            console.log('1111111',data)
            var list=data.data.pageData.list;
            // 渲染前先清空
            $("#rob_ti").html('');
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
            $.each(list,function(index,item){
                $("#rob_ti").append(
                    '<div class="col-md-4" id="serve_content" style="height:210px">'+
                       ' <div class="serve_block_detail">'+
                            '<p class="serve_block_ps">抢单人员：<span>'+item.wxName+'</span> </p>'+
                            '<p class="serve_block_ps">手机号码：<span>'+item.phoneNo+'</span> </p>'+
                            '<p class="serve_block_ps">订单标题：<span>'+item.title+'</span> </p>'+
                            '<p class="serve_block_ps">抢单时间：<span>'+item.createDate+'</span> </p>'+
                            
                        '</div>'+
                        '<div class="dd_foot">'+
                            '<span style="width:100%">删除</span>'+
                            // '<span>拒绝</span>'+
                        '</div>'+
                   ' </div>'
                )
            })   
        }
    })
}
