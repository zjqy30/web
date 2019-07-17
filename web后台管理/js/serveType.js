
var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 获取服务类型展示列表
var type_data = {
    'token': token
}
$.ajax({
    url: globel + "/hone/backend/serviceTemplate/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(type_data),
    success: function (data) {
        console.log(data)
        var list=data.data.templateList
        // 循环获取数据
        $.each(list,function(code,item){
            var id=list[code].id
            // var sort=list[code].sort;//排序
            // console.log(sort)
            $("#serve_big").append(
                '<div class="col-md-4" id="serve_content">'+
                '<div class="serve_block_detail">'+
                '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：<span>'+item.title+'</span> </p>'+
                '<p class="serve_block_p">详情描述：<spanclass="serve_block_span">'+item.infos+'</span> </p>'+
                '</div>'+
                '<div class="serve_block_foot">'+
                '<span id="serve_del" class="del">删除模板</span>'+
                '</div>'+
                '</div>'
            )
            
            // 点击删除模板
            $(".del").click(function(){
                var dell={
                    'token':token,
                    'id':id
                }
                $.ajax({
                    url: globel + "/hone/backend/serviceTemplate/del",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(dell),
                    success: function (data) {
                        // console.log('del'+data.data)//是空的
                        $("#serve_big")[id].remove()
                    }
                })
            })
        })
    }
})


// 创建模板内容
function type_btn() {
    var type_title = $("#type_title").val()
    var type_infos = $("#type_infos").val()

    var datas = {
        'token': token,
        'title': type_title,
        'infos': type_infos,
        'sort':1
    }

    $.ajax({
        url: globel + "/hone/backend/serviceTemplate/create",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(datas),
        success: function (data) {
            console.log('123',data)
            var list=data.data.templateList
            // 循环获取数据
            $.each(list,function(code,item){
                $("#serve_big").append(
                    '<div class="col-md-4" id="serve_content">'+
                    '<div class="serve_block_detail">'+
                    '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标题：<span>'+item.title+'</span> </p>'+
                    '<p class="serve_block_p">详情描述：<spanclass="serve_block_span">'+item.infos+'</span> </p>'+
                    '</div>'+
                    '<div class="serve_block_foot">'+
                    '<span id="serve_del" class="del">删除模板</span>'+
                    '</div>'+
                    '</div>'
                )
                
            })
            // window.location.reload()//实时刷新
            type_title="";
            type_infos="";
        }
    })
}


