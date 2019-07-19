var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 轮播图列表
var banner_data = {
    'token': token
}
$.ajax({
    url: globel + "/hone/backend/banner/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(banner_data),
    success: function (data) {
        console.log(data)
        var list = data.data.bannersList;
        $.each(list, function (index, item) {
            var id=item.id;
            // console.log(id)
            $("#banner_list").append(
                '<div class="col-md-4" id="banner_content">' +
                '<div class="banner_number">'+(index+1)+'</div>'+
                '<div class="banner_block_detail">' +
                '<img src="'+item.imgs+'" alt="">' +
                '</div>' +
                '<div class="banner_block_foot">' +
                '<span id="banner_del" class="banner_del">删除</span>' +
                '</div>' +
                '</div>'
            )
            // 删除轮播图
            $(".banner_del").click(function(){
                var del={
                    'token':token,
                    'id':id
                }
                $.ajax({
                    url:globel+"/hone/backend/banner/del",
                    dataType:"json",
                    type:"POST",
                    contentType:"application/json",
                    data:JSON.stringify(del),
                    success:function(data){
                        console.log(data)
                        // $("#banner_list")[index].remove()
                    }
                })
                
            })
        })
        
    }
})
// 轮播图上传图片
addimg_input.onchange = function () {
    // console.log(this.files[0])
    var F = new FileReader();
    F.readAsDataURL(this.files[0]);
    F.onload = function () {
        banner_imgs.src = F.result;
        banner_imgs.style.display = "block"
    }
}
// 点击创建轮播图
function banner_success(){
    console.log(123)
    var banner_select=$("#banner_select").children()
    var inputh5=$("#inputh5").val()
    var addimg_input=$("#addimg_input")

    var banner_data={
        'token':token,
        'imgs':addimg_input,//图片地址
        'pages':1, //所属页面 1 首页
        'title':banner_select,//标题
        'type':1, //类型 1.仅图片 2.H5链接 3.富文本
        'content':'',//富文本内容
        'h5_url':inputh5
    }
    $.ajax({
        url:globel+"/hone/backend/banner/del",
        dataType:"json",
        type:"post",
        contentType:"application/json",
        data:JSON.stringify(banner_data),
        success:function(data){
            console.log('创建轮播图',data)
        }
    })
}