var globel = localStorage.getItem('globel')
var token = localStorage.getItem('token')

function zhi(){
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
            var list=data.data.pageData;
            $("#red_ti").html("");
            $.each(list,function(index,item){
                var id=item.id;
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
                            '<span style="border-right: 1px solid #dedede" onclick="red_pass(\''+id+'\')">通过</span>'+
                            '<span onclick="red_nopass(\''+id+'\')">拒绝</span>'+
                        '</div>'+
                   ' </div>'
                )
            })   
        }
    })  
}
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
        var list=data.data.pageData;
        $.each(list,function(index,item){
            var id=item.id;
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
                        '<span style="border-right: 1px solid #dedede" onclick="red_pass(\''+id+'\')">通过</span>'+
                        '<span onclick="red_nopass(\''+id+'\')">拒绝</span>'+
                    '</div>'+
               ' </div>'
            )
        })   
    }
})

// 通过
function red_pass(id){
    var passData={
        'token':token,
        'id':id,
        'ifPass':'pass'
    }
    $.ajax({
        url: globel + "/hone/backend/withDraw/operate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(passData),
        success: function (data) {
            if(data.errorCode=='0'){
                alert('提现成功!')
            }else{
                alert('提现失败!')
            }
            zhi()
        }
    })
}
// 拒绝
function red_nopass(id){
    var passData={
        'token':token,
        'id':id,
        'ifPass':'nopass'
    }
    $.ajax({
        url: globel + "/hone/backend/withDraw/operate",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(passData),
        success: function (data) {
            if(data.errorCode=='0'){
                alert('提现已拒绝!')
            }else{
                alert('提现拒绝失败!')
            }
            zhi()
        }
    })
}
