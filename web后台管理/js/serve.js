var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')


var seve_data = {
    'token': token
}
$.ajax({
    url: globel + "/hone/backend/offerTemplate/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(seve_data),
    success: function (data) {
        // console.log(data)
        console.log(data.data.templateList);
        var list=data.data.templateList
        // 循环获取数据
        $.each(list,function(index,item){
            var id=list[index].id
            console.log(id)
            $("#serve_big").append(
                '<div class="col-md-4" id="serve_content">'+
                '<div class="serve_block_detail">'+
                '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：<span>'+item.title+'</span> </p>'+
                '<p class="serve_block_p">详情描述：<spanclass="serve_block_span">'+item.infos+'</span> </p>'+
                '<p>最低单价：<span>'+item.minPrice+'</span> </p>'+
                '<p>最高单价：<span>'+item.maxPrice+'</span> </p>'+
                '</div>'+
                '<div class="serve_block_foot">'+
                '<span id="serve_del" onclick="del(\''+id+'\')">删除模板</span>'+
                '</div>'+
                '</div>'
            ) 
        })
    }
})
// 点击删除模板
function del(id){
    var del={
        'token':token,
        'id':id
    }
    $.ajax({
        url: globel + "/hone/backend/offerTemplate/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(del),
        success: function (data) {
            console.log('del',data)
            if(data.errorCode==0){
                alert('删除成功！')
            }else{
                alert('删除失败！')
            }
            window.location.reload()//实时刷新
        }
    })
}

// 创建模板内容
function must() {
    var title = $("#title").val()
    var infos = $("#infos").val()
    var heightPrice = $("#heightPrice").val()
    var footPrice = $("#footPrice").val()

    var datas = {
        'token': token,
        'title': title,
        'infos': infos,
        'maxPrice': heightPrice,
        'minPrice': footPrice
    }

    $.ajax({
        url: globel + "/hone/backend/offerTemplate/create",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(datas),
        success: function (data) {
            console.log(data)
            // console.log(data.data.templateList);
            var list=data.data.templateList
            // 循环获取数据
            $.each(list,function(code,item){
                console.log('code'+code)
                $("#serve_big").append(
                    '<div class="col-md-4" id="serve_content">'+
                    '<div class="serve_block_detail">'+
                    '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：<span>'+item.title+'</span> </p>'+
                    '<p class="serve_block_p">详情描述：<spanclass="serve_block_span">'+item.infos+'</span> </p>'+
                    '<p>最低单价：<span>'+item.minPrice+'</span> </p>'+
                    '<p>最高单价：<span>'+item.maxPrice+'</span> </p>'+
                    '</div>'+
                    '<div class="serve_block_foot">'+
                    '<span id="serve_del" class="del">删除模板</span>'+
                    '</div>'+
                    '</div>'
                )
                
            })
            window.location.reload()//实时刷新
            title="";
            infos="";
            maxPrice="";
            minPrice="";
        }
    })
}


