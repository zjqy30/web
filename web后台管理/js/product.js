var token = localStorage.getItem('token')
var globel = localStorage.getItem('globel')

// 局部刷新
function zhi(){
    $("#pro_Value").val('')
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
            var list = data.data.dictList;
            $("#pro_content").html("");
            // 如果网红列表有数据
            if (list) {
                $.each(list, function (index, item) {
                    var id = item.id;
                    $("#pro_content").append(
                        '<div class="col-md-2" id="labels_content">' +
                        '<div class="labels_col_text">' +
                        '' + item.dictValue + '' +
                        '</div>' +
                        '<button class="labels_col_del" onclick="pro_del(\'' + id + '\')">删除标签</button>' +
                        '</div>'
                    )
                })
            }
        }
    })
}
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
            var list = data.data.dictList;
            $("#pro_content").html("")
            // 如果网红列表有数据
            if (list) {
                $.each(list, function (index, item) {
                    var id = item.id;
                    $("#pro_content").append(
                        '<div class="col-md-2" id="labels_content">' +
                        '<div class="labels_col_text">' +
                        '' + item.dictValue + '' +
                        '</div>' +
                        '<button class="labels_col_del" onclick="pro_del(\'' + id + '\')">删除标签</button>' +
                        '</div>'
                    )
                })
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
// 删除标签
function pro_del(id) {
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
            if(data.errorCode==0){
                alert('删除成功！')
            }else{
                alert('删除失败！')
            }
            // window.location.reload()//实时刷新
            zhi()
        }
    })
}