
var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 获取第一层级标签列表
var first;
var sj_data = {
    'token': token,
    'type': '1'
}

$.ajax({
    url: globel + "/hone/backend/dict/sellerTagList",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(sj_data),
    success: function (data) {
        console.log('一级层级', data)
        var oneList = data.data.dictList;
        $.each(oneList, function (index, item) {
            var oneId = item.id;
            $("#one_list").append(
                '<div class="col-md-2" id="labels_content">' +
                '<div class="labels_col_text">' + item.dictValue + '</div>' +
                '<button class="labels_col_del">删除标签</button>' +
                '</div>'
            )
            first = oneId;
            return oneId;

        })
        console.log($("#one_list").html())
    }
})

// 获取第二层级标签列表
var two;
var sj_data = {
    'token': token,
    'type': '2'
}
$.ajax({
    url: globel + "/hone/backend/dict/sellerTagList",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(sj_data),
    success: function (data) {
        console.log('二级层级', data)
        var oneList = data.data.dictList;
        $.each(oneList, function (index, item) {
            var id = item.id;
            $("#two_list").append(
                '<div class="col-md-2" id="labels_content">' +
                '<div class="labels_col_text">' + item.dictValue + '</div>' +
                '<button class="labels_col_del">删除标签</button>' +
                '</div>'
            )
            two = id;
            return id
        })
    }
})
// 获取第三层级标签列表
var three;
var sj_data = {
    'token': token,
    'type': '3'
}
$.ajax({
    url: globel + "/hone/backend/dict/sellerTagList",
    dataType: 'json',
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(sj_data),
    success: function (data) {
        console.log('三级层级', data)
        var oneList = data.data.dictList;
        $.each(oneList, function (index, item) {
            var id = item.id;
            $("#three_list").append(
                '<div class="col-md-2" id="labels_content">' +
                '<div class="labels_col_text">' + item.dictValue + '</div>' +
                '<button class="labels_col_del">删除标签</button>' +
                '</div>'
            )
            three = id
            return id
        })
    }
})


// 获取第一层级标签列表
$("#one_li").click(function () {
    console.log('点击')
    var sj_data = {
        'token': token,
        'type': '1'
    }

    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            console.log('一级层级', data)
            var oneList = data.data.dictList;
            $.each(oneList, function (index, item) {
                var oneId = item.id;
                $("#one_li").append(
                    '<option>' + item.dictValue + '</option>'
                )
            })
        }
    })
})
// 获取第二层级标签列表
$("#two_li").click(function () {
    var sj_data = {
        'token': token,
        'type': '2'
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            console.log('一级层级', data)
            var oneList = data.data.dictList;
            $.each(oneList, function (index, item) {
                var oneId = item.id;
                $("#two_li").append(
                    '<option>' + item.dictValue + '</option>'
                )

            })
        }
    })
})
// 创建层级标签
$("#all_click").click(function () {
    var tab = $(".tab-pane").hasClass('active');
    $(".tab-pane").each(function (e, ele) {
        console.log(e);
        if ($(this).hasClass('active')) {
            var type = $(this).attr('type');
            if (type == '1') {
                var all_value = $("#all_value").val()
                var all_data = {
                    'token': token,
                    'pid_1': '',//一级标签ID
                    'pid_2': '',//二级标签ID
                    'value': all_value //标签值
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/createSellerTag",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(all_data),
                    success: function (data) {
                        console.log('创建一级层级标签', data)
                        if (data.errorCode == 0) {
                            alert("一级标签创建成功！")
                        } else {
                            alert("一级标签创建失败！")
                        }
                    }
                })
            } else if (type == '2') {
                var all_value = $("#all_value").val()
                var all_data = {
                    'token': token,
                    'pid_1': first,//一级标签ID
                    'pid_2': '',//二级标签ID
                    'value': all_value //标签值
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/createSellerTag",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(all_data),
                    success: function (data) {
                        console.log('创建二级层级标签', data)
                        if (data.errorCode == 0) {
                            alert("二级标签创建成功！")
                        } else {
                            alert("二级标签创建失败！")
                        }
                    }
                })
            } else {
                var all_value = $("#all_value").val()

                // 要传的参数（怎么才能获取到pid_1，pid_2，value的值:设置全局变量，return出来，在需要的时候使用）
                var all_data = {
                    'token': token,
                    'pid_1': first,//一级标签ID
                    'pid_2': two,//二级标签ID
                    'value': all_value //标签值
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/createSellerTag",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(all_data),
                    success: function (data) {
                        console.log('创建三级层级标签', data)
                        if (data.errorCode == 0) {
                            alert("三级标签创建成功！")
                        } else {
                            alert("三级标签创建失败！")
                        }
                    }
                })
            }

        }

    });
})

