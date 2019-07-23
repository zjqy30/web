var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 获取公告列表
var creat = {
    'token': token
}
$.ajax({
    url: globel + "/hone/backend/sysNotice/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(creat),
    success: function (data) {
        console.log('公告', data)
        console.log(data.data.systemNoticeList)
        var list = data.data.systemNoticeList;
        // 如果网红列表有数据
        if (list) {
            // var list=data.data.systemNoticeList
            $.each(list, function (index, item) {
                var id = item.id;
                $("#ann_content").append(
                    '<div class="col-md-4" id="labels_contents">' +
                    '<p class="col_md_4">公告' + (index + 1) + '</p>' +
                    '<div class="col_md_4_text">' +
                    '' + item.message + '' +
                    ' </div>' +
                    '<button class="labels_col_del" onclick=ann_del(\'' + id + '\')>删除公告</button>' +
                    '</div>'
                )
            })
        }

        // 创建公告标签
        var ann_btn = document.getElementById('ann_btn');
        // 点击生成标签
        ann_btn.onclick = function () {
            // 获取输入框的值
            var ann_value = $("#ann_value").val();
            if (ann_value == "" || ann_value == null) {
                alert('标签不能为空！')
                return
            } else {
                // 要传的参数
                var creat = {
                    'token': token,
                    'message': ann_value
                }
                $.ajax({
                    url: globel + "/hone/backend/sysNotice/create",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(creat),
                    success: function (data) {
                        console.log("创建公告", data);
                        var list = data.data.systemNoticeList
                        $.each(list, function (index, item) {
                            var id = item.id;
                            $("#ann_content").append(
                                '<div class="col-md-4" id="labels_contents">' +
                                '<p class="col_md_4">公告' + item[index + 1] + '</p>' +
                                '<div class="col_md_4_text">' +
                                '' + item.message + '' +
                                ' </div>' +
                                '<button class="labels_col_del">删除公告</button>' +
                                '</div>'
                            )
                        })
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
// 删除公告
function ann_del(id) {
    var del_data = {
        'token': token,
        'id': id,
    }
    $.ajax({
        url: globel + "/hone/backend/sysNotice/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(del_data),
        success: function (data) {
            if(data.errorCode==0){
                alert("删除成功！")
            }else{
                alert("删除失败！")
            }
            window.location.reload()//实时刷新
        }
    })
}