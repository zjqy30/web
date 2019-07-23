var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 获取网红提现列表
var type_data = {
    'token': token
}
$.ajax({
    url: globel + "/hone/backend/withDraw/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(type_data),
    success: function (data) {
        console.log(data)
        var list=data.data.pageData;
        $.each(list,function(index,item){
            $("#red_ti").append(
                '<div class="col-md-4" id="serve_content">'+
                   ' <div class="serve_block_detail">'+
                        '<p class="serve_block_ps">用户名：<span>'+item.userName+'</span> </p>'+
                        '<p class="serve_block_ps">微信名：<span>'+item.wxName+'</span> </p>'+
                        '<p class="serve_block_ps">手续费：<span>'+item.drawFee+'</span> </p>'+
                        '<p>提现金额：<span>'+item.drawAmount+'</span> </p>'+
                        '<p>银行名称：<span>'+item.cradBank+'</span> </p>'+
                        '<p>银行卡号：<span>'+item.cradNumber+'</span> </p>'+
                    '</div>'+
                    '<div class="dd_foot">'+
                        // '<span style="border-right: 1px solid #dedede">通过</span>'+
                        // '<span>拒绝</span>'+
                    '</div>'+
               ' </div>'
            )
        })   
    }
})

