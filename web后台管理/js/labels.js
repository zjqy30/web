
var globel = 'http://192.168.0.167:8080';
var token = localStorage.getItem('token')
// window.location.reload()//实时刷新

// 获取网红标签列表
var creat = {
    'token': token,
    'dictType': 'label'
}
// // 获取平台标签列表
// var creat2 = {
//     'token': token,
//     'dictType': 'platType'
// }
// // 获取商品类型列表
// var creat3 = {
//     'token': token,
//     'dictType': 'productType '
// }

$.ajax({
    url: globel + "/hone/backend/dict/list",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(creat),
    success: function (data) {
        // console.log(data)
        // console.log(data.data.dictList)
        var list = data.data.dictList;
        var labels_row = document.getElementById('labels_row');
        // 如果网红列表有数据
        if (list) {
            for (var i = 0; i < list.length; i++) {
                var ipt_Value = list[i].dictValue;
                var id = list[i].id;
                
                // 创建大标签
                var labels_div = document.createElement('div');
                labels_div.className = "col-md-2"
                // top
                var labels_top = document.createElement('div');
                labels_top.className = "labels_col_text"
                // 内容是输入框的值；
                var text = document.createTextNode(ipt_Value);
                labels_top.appendChild(text)
                // foot
                var labels_del = document.createElement('div');
                labels_del.className = "labels_col_del"
                labels_del.innerHTML = "删除标签"

                // 添加至大标签里
                labels_div.appendChild(labels_top)
                labels_div.appendChild(labels_del)
                labels_row.appendChild(labels_div)

                // 点击删除标签
                labels_del.onclick = function () {
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
                            console.log('del', data)
                            // 删除标签
                            console.log(456)
                            labels_row.removeChild(labels_div);
                            window.location.reload()//实时刷新
                        }
                    })

                }
            }

        }
        // 创建网红标签
        var labels_input = document.getElementById('inputEmail3');
        var labels_btn = document.getElementById('labels_btn');
        // 点击生成标签
        labels_btn.onclick = function () {
            // 获取输入框的值
            var iptValue = labels_input.value;
            console.log(iptValue)
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
                        console.log(data);
                        // 创建大标签
                        var labels_div = document.createElement('div');
                        labels_div.className = "col-md-2"
                        // top
                        var labels_top = document.createElement('div');
                        labels_top.className = "labels_col_text"
                        // 内容是输入框的值；
                        var text = document.createTextNode(iptValue);
                        labels_top.appendChild(text)
                        // foot
                        var labels_del = document.createElement('div');
                        labels_del.className = "labels_col_del"
                        labels_del.innerHTML = "删除标签"

                        // 添加至大标签里
                        labels_div.appendChild(labels_top)
                        labels_div.appendChild(labels_del)

                        document.getElementById('labels_row').appendChild(labels_div)
                        labels_input.value = ""

                    },
                    err: function () {
                        console.log('网络错误！')
                    }
                });
            }

        }


    }
})







// 获取网红平台列表
// var labels_input = document.getElementsByClassName("labels_input")
// var labels_content2=document.getElementById("labels_content2");
// for(var j=0;j<labels_content2.length;j++){
//     // 标签上传图片
// labels_input[j].onchange = function () {
//     // console.log(this.files[0])
//     var F = new FileReader();
//     F.readAsDataURL(this.files[0]);
//     F.onload = function () {
//         labes_img.src = F.result;
//         labes_img.style.display = "block";
//     }
// }
// }



