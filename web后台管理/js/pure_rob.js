var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

var page=page?page:1;
var pageSize='9';
// 获取纯佣-抢单管理列表
var type_data = {
    'token': token,
    'pageNumber':page,
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
