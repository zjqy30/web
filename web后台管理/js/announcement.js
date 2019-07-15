
var globel = 'http://192.168.0.167:8080';
var token = localStorage.getItem('token')

// 获取公告列表
var creat = {
    'token': token,
}
$.ajax({
    url: globel + "/hone/backend/sysNotice/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(creat),
    success: function (data) {
        console.log('公告',data)
        console.log(data.data.systemNoticeList)
        var list = data.data.systemNoticeList;
        // 如果网红列表有数据
        if (list) {
            for (var i = 0; i < list.length; i++) {
                var message = list[i].message;
                var id=list[i].id;
                console.log(message)

                var ann_content = document.createElement('div');
                ann_content.id = "ann_content"
                // 创建大标签
                var labels_div = document.createElement('div');
                labels_div.className = "col-md-4"
                labels_div.id = "labels_contents"
                // 公告
                var ann_one=document.createElement('div');
                ann_one.className="col_md_4"
                ann_one.innerHTML="公告1"
                // 公告内容
                var ann_message = document.createElement('div');
                ann_message.className = "col_md_4_text"
                // 内容是输入框的值；
                var text = document.createTextNode(message);
                ann_message.appendChild(text)
                // foot
                var labels_del = document.createElement('button');
                labels_del.className = "labels_col_del"
                labels_del.innerHTML = "删除公告"

                // 添加至大标签里
                labels_div.appendChild(ann_one)
                labels_div.appendChild(ann_message)
                labels_div.appendChild(labels_del)
                // pro_content.appendChild(labels_div);
                document.getElementById('ann_content').appendChild(labels_div);

                //点击删除标签
                labels_del.onclick = function () {
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
                            console.log('del', data)
                            // 删除标签
                            console.log(456)
                            document.getElementById('ann_content').removeChild(labels_div);
                            // pro_content.removeChild(labels_div);
                            window.location.reload()//实时刷新
                        }
                    })

                }

            }

        }

        // 创建公告标签
        var ann_btn = document.getElementById('ann_btn');
        // 点击生成标签
        ann_btn.onclick = function () {
            var ann_value = document.getElementById('ann_value');
            // 获取输入框的值
            var ann_value = ann_value.value;
            console.log(ann_value)
            if (ann_value == "" || ann_value == null) {
                alert('标签不能为空！')
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
                        console.log("创建公告",data);
                        var ann_content = document.createElement('div');
                        ann_content.id = "ann_content"
                        // 创建大标签
                        var labels_div = document.createElement('div');
                        labels_div.className = "col-md-4"
                        labels_div.id = "labels_contents"
                        // 公告
                        var ann_one=document.createElement('div');
                        ann_one.className="col_md_4"
                        ann_one.innerHTML="公告1"
                        // 公告内容
                        var ann_message = document.createElement('div');
                        ann_message.className = "col_md_4_text"
                        // 内容是输入框的值；
                        var text = document.createTextNode(message);
                        ann_message.appendChild(text)
                        // foot
                        var labels_del = document.createElement('button');
                        labels_del.className = "labels_col_del"
                        labels_del.innerHTML = "删除公告"
        
                        // 添加至大标签里
                        labels_div.appendChild(ann_one)
                        labels_div.appendChild(ann_message)
                        labels_div.appendChild(labels_del)
                        document.getElementById('ann_content').appendChild(labels_div);
                        
                        ann_value.value = ""
                        
                    },
                    err: function () {
                        console.log('网络错误！')
                    }
                });
            }
        }


    }
})