var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')
var imgs="";

banners();
// 轮播图列表
function banners(){
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
            $.each(list, function (index, item){
                var id=item.id;
                $("#banner_list").append(
                    '<div class="col-md-4" id="banner_content">' +
                    '<div class="banner_number">'+(index+1)+'</div>'+
                    '<div class="banner_block_detail">' +
                    '<img src="'+item.imgs+'" alt="">' +
                    '</div>' +
                    '<div class="banner_block_foot">' +
                    '<span id="banner_del" class="banner_del" onclick="ban_del(\''+id+'\')">删除</span>' +
                    '</div>' +
                    '</div>'
                )
            })
        }
    })
}
// 删除轮播图
function ban_del(id){
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
            if(data.errorCode==0){
                alert("删除成功！")
            }else{
                alert("删除失败！")
            }
         window.location.reload();
        }
    })
}

addimg_input.onchange = function () {
    var F = new FileReader();
    F.readAsDataURL(this.files[0]);
    F.onload = function () {
        banner_imgs.src = F.result;
        banner_imgs.style.display = "block"
    }
    // getImgUrl(url);
}
$('#addimg_input').change(function(){
    var url = $('#addimg_input')[0].files[0];
    getImgUrl(url);
})
//点击上传图片：步骤1.上传图片
function getImgUrl(url,thisDom){
    var formData = new FormData();
     formData.append("file",url);
     $.ajax({
         url:globel+'/hone/applet/cos/uploadFile', /*接口域名地址*/
         type:'post',
         data: formData,
         contentType: false,
         processData: false,
         success:function(res){
             console.log('1.',res)
             if(res.errorCode == '0'){
                 imgs=res.data.fileName
                 $(thisDom).siblings('img').prop('src',res.data.fileName)
                 console.log('456',imgs)
             }
         }
     })
 }

// 点击创建轮播图
function banner_success(){
    console.log('123',imgs)
    var title=$("#lb").val()
    var banner_data={
        'token':token,
        'imgs':imgs,//图片地址
        'pages':1, //所属页面 1 首页
        'title':title,//标题
        'type':1, //类型 1.仅图片 2.H5链接 3.富文本
        'content':'',//富文本内容
        // 'h5_url':inputh5
        'h5_url':''
    }
    $.ajax({
        url:globel+"/hone/backend/banner/create",
        dataType:"json",
        type:"post",
        contentType:"application/json",
        data:JSON.stringify(banner_data),
        success:function(data){
            console.log('创建轮播图',data);
            if(data.errorCode==0){
                alert("创建轮播图成功!")
            }else{
                alert("创建轮播图失败!")
            }
            window.location.onload()
        }
    })
}


