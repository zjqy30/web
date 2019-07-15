
var globel = 'http://192.168.0.167:8080';
var token = localStorage.getItem('token')

// 获取商品类型列表
var creat = {
    'token': token,
    'dictType': 'productType'
}
$.ajax({
    url: globel + "/hone/backend/dict/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(creat),
    success: function (data) {
        // console.log('productType',data)
        console.log(data.data.dictList)
        var list = data.data.dictList;
        // 如果网红列表有数据
        if (list) {
            for (var i = 0; i < list.length; i++) {
                var pro_Value = list[i].dictValue;
                var id=list[i].id;
                console.log(pro_Value)

                var pro_content = document.createElement('div');
                pro_content.id = "pro_content"
                // 创建大标签
                var labels_div = document.createElement('div');
                labels_div.className = "col-md-2"
                labels_div.id = "labels_content"
                // top
                var labels_top = document.createElement('div');
                labels_top.className = "labels_col_text"
                // 内容是输入框的值；
                var text = document.createTextNode(pro_Value);
                labels_top.appendChild(text)
                // foot
                var labels_del = document.createElement('div');
                labels_del.className = "labels_col_del"
                labels_del.innerHTML = "删除标签"

                // 添加至大标签里
                labels_div.appendChild(labels_top)
                labels_div.appendChild(labels_del)
                // pro_content.appendChild(labels_div);
                document.getElementById('pro_content').appendChild(labels_div);

                //点击删除标签
                labels_del.onclick = function () {
                    var del_data = {
                        'token': token,
                        'id': id,
                    }
                    $.ajax({
                        url: globel + "/hone/backend/dict/del",
                        dataType: 'json',
                        type: "post",
                        contentType: "application/json",
                        data: JSON.stringify(del_data),
                        success: function (data) {
                            console.log('del', data)
                            // 删除标签
                            console.log(456)
                            document.getElementById('pro_content').removeChild(labels_div);
                            // pro_content.removeChild(labels_div);
                            window.location.reload()//实时刷新
                        }
                    })

                }

            }

        }

        // 创建商品标签
        var pro_btn = document.getElementById('pro_btn');
        // 点击生成标签
        pro_btn.onclick = function () {
            var pro_Value = document.getElementById('pro_Value');
            // 获取输入框的值
            var pro_Value = pro_Value.value;
            console.log(pro_Value)
            if (pro_Value == "" || pro_Value == null) {
                alert('标签不能为空！')
            } else {
                // 要传的参数
                var creat = {
                    'token': token,
                    'dictType': 'productType',
                    'dictValue': pro_Value
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/create",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(creat),
                    success: function (data) {
                        console.log(data);
                        var pro_content = document.createElement('div');
                        pro_content.id = "pro_content"
                        // 创建大标签
                        var labels_div = document.createElement('div');
                        labels_div.className = "col-md-2"
                        labels_div.id = "labels_content"
                        // top
                        var labels_top = document.createElement('div');
                        labels_top.className = "labels_col_text"
                        // 内容是输入框的值；
                        var text = document.createTextNode(pro_Value);
                        labels_top.appendChild(text)
                        // foot
                        var labels_del = document.createElement('div');
                        labels_del.className = "labels_col_del"
                        labels_del.innerHTML = "删除标签"
        
                        // 添加至大标签里
                        labels_div.appendChild(labels_top)
                        labels_div.appendChild(labels_del)
                        document.getElementById('pro_content').appendChild(labels_div)
                        
                        pro_Value.value = ""
                        
                    },
                    err: function () {
                        console.log('网络错误！')
                    }
                });
            }
        }


    }
})