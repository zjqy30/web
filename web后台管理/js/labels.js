
var globel = 'https://hongonew.com';
var token = localStorage.getItem('token')
// window.location.reload()//实时刷新

// 获取网红标签列表
var creat = {
    'token': token,
    'dictType': 'label'
}

$.ajax({
    url: globel + "/hone/backend/dict/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(creat),
    success: function (data) {
        var list = data.data.dictList;
        console.log(list)
        // 如果网红列表有数据
        if (list) {
            $.each(list, function (index, item) {
                var id = item.id;
                $("#labels_row").append(
                    '<div class="col-md-2" id="labels_content">' +
                    '<div class="labels_col_text" id="labels_text">' +
                    '' + item.dictValue + '' +
                    '</div>' +
                    '<button class="labels_col_del" onclick="del(\'' + id + '\')">删除标签</button>' +
                    '</div>'
                )
            })
        } else {
            $("#labels_row").append(
                '<div class="col-md-2" id="labels_content">还没有数据呢</div>'
            )
        }
    }
})
// 点击删除标签
function del(id) {
    var del_data = {
        'token': token,
        'id': id,
    }
    // 删除网红标签
    $.ajax({
        url: globel + "/hone/backend/dict/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(del_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("删除成功！")
            } else {
                alert("删除失败！")
            }
            window.location.reload()//实时刷新
        }
    })

}


// 获取网红平台列表
var creat = {
    'token': token,
    'dictType': 'platType'
}
$.ajax({
    url: globel + "/hone/backend/dict/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(creat),
    success: function (data) {
        console.log('网红平台列表', data)
        var list = data.data.dictList;
        $.each(list, function (index, item) {
            var id = item.id
            $("#labels_red").append(
                '<div class="col-md-2" id="labels_content2">' +
                '<div class="form-group">' +
                '<div class="labes_div_img">' +
                '<input type="file" class="labels_input" id="picture" name="'+id+'">' + //onclick="picture(\'' + id + '\')" 
                '<img class="labes_img" src="' + item.dictPic + '" id="labes_img">' +
                '</div>' +
                '<p class="help-block">' + item.dictValue + '</p>' +
                '</div>' +
                '</div>'
            )
        })
        // 循环标签找到文件流
        $('.labels_input').each(function(e){
            console.log(1234)
            $(this).change(function(){
            var url = $(this)[0].files[0];
            getImgUrl(url,this);
        })
        })

    }
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
             console.log(res.data);
             if(res.errorCode == '0'){
                 console.log(res.data.fileName);
                 var imgpic=res.data.fileName
                 $(thisDom).siblings('img').prop('src',res.data.fileName)
                var id=$(thisDom).attr("name")
                 picture(id,imgpic)
             }
 
         }
     })
 }
//步骤2.自动更换图片 
function picture(id,imgpic) {
    console.log(12)
    var huan = {
        'token': token,
        'id': id,
        'pic': imgpic
    }
    console.log(111)
    $.ajax({
        url: globel + "/hone/backend/dict/updatePic",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(huan),
        success: function (data) {
            console.log('更换照片', data)

        }
    })
}

// 创建标签
$("#labels_btn").click(function () {
    $(".tab-pane").each(function (e, ele) {
        console.log(e);
        if ($(this).hasClass('active')) {
            var type = $(this).attr('type');
            if (type == '1') {
                var whplat = $("#inputEmail3").val();
                var plat = {
                    'token': token,
                    'dictType': 'label',
                    'dictValue': whplat
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/create",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(plat),
                    success: function (data) {
                        console.log('网红标签', data)
                        if (data.errorCode == 0) {
                            alert("网红标签创建成功！")
                        } else {
                            alert("网红标签创建失败！")
                        }
                        window.location.reload()//实时刷新
                    },
                    err: function (data) {
                        console.log(data)
                    }
                });
            } else {
                var whplat = $("#inputEmail3").val();
                var plat = {
                    'token': token,
                    'dictType': 'platType',
                    'dictValue': whplat
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/create",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(plat),
                    success: function (data) {
                        console.log('网红平台', data)
                        if (data.errorCode == 0) {
                            alert("网红平台创建成功！")
                        } else {
                            alert("网红平台创建失败！")
                        }
                        window.location.reload()//实时刷新
                    },
                    err: function (data) {
                        console.log(data)
                    }
                });
            }
        }
    })

});


