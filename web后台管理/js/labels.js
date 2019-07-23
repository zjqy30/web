
var globel = 'http://192.168.0.166:8080';
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

        }
        // 创建网红标签
        var labels_input = document.getElementById('inputEmail3');
        var labels_btn = document.getElementById('labels_btn');
        // 点击生成标签
        labels_btn.onclick = function () {
            // 获取输入框的值
            var iptValue = labels_input.value;
            if (iptValue == "" || iptValue == null) {
                alert('标签不能为空！')
            } else {
                // 要传的参数
                var creat = {
                    'token': token,
                    'dictType': 'label',
                    'dictValue': iptValue
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/create",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(creat),
                    success: function (data) {
                        if (data.errorCode == 0) {
                            alert("标签创建成功！")
                        } else {
                            alert("标签创建失败！")
                        }
                        window.location.reload()//实时刷新
                    },
                    err: function () {
                        console.log('网络错误！')
                    }
                });
            }
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
            var id=item.id
            $("#labels_red").append(
                '<div class="col-md-2" id="labels_content2">' +
                '<div class="form-group">' +
                '<div class="labes_div_img">' +
                '<span class="labes_span_img"><img src=' + item.dictPic + ' alt=""></span>' + 
                '<input type="file" class="labels_input" onchange=ipt(\''+id+'\',this) >' +
                '<img class="labes_img" src="" alt="" id="labes_img">' +
                '</div>' +
                '<p class="help-block">' + item.dictValue + '</p>' +
                '</div>' +
                '</div>'
            )
        })
        // 创建网红平台
        labels_btn.onclick = function () {
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
                    console.log('网红平台',data)
                    if (data.errorCode == 0) {
                        alert("标签创建成功！")
                    } else {
                        alert("标签创建失败！")
                    }
                    window.location.reload()//实时刷新
                },
                err: function () {
                    console.log('网络错误！')
                }
            });
        }
    }
})
// 更换照片
//  onclick=chan(\''+id+'\')
// function chan(id){
//     var huan={
//         'token':token,
//         'id':id,
//         'pic':'../images/hehua.jpg'
//     }
//     $.ajax({
//         url: globel + "/hone/backend/dict/updatePic",
//         dataType: 'json',
//         type: "post",
//         contentType: "application/json",
//         data: JSON.stringify(huan),
//         success: function (data) {
//             console.log('更换照片', data)
        
//         }
//     })
// }
// 标签上传图片
    // $("#ipt").onchange = function () {
    //     // console.log(this.files[0])
    //     var F = new FileReader();
    //     F.readAsDataURL(this.files[0]);
    //     F.onload = function () {
    //         labes_img.src = F.result;
    //         labes_img.style.display = "block";
    //     }
    // }
    function ipt(id,event){
        var id=id;
        var file=event.target.file[0]
        console.log(file)
        if (window.FileReader) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            //监听文件读取结束后事件
            reader.onloadend = function (e) {
                labes_img.style.display = "block";
                // $("#"+num).css("display","block");
                $("#"+num).attr("src",e.target.result);    //e.target.result就是最后的路径地址
            }
        }
    }
    // function l(evn){
    //     var id = $(evn).attr('id');//获取id
    //     var num = id+"_1";
    //     var file = event.target.files[0];
    //     if (window.FileReader) {
    //         var reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         //监听文件读取结束后事件
    //         reader.onloadend = function (e) {
           
    //             $("#"+num).css("display","block");
    //             $("#"+num).attr("src",e.target.result);    //e.target.result就是最后的路径地址
    //         };
    //     }
    // }


