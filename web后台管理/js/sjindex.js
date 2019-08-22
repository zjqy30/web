var globel = localStorage.getItem('globel')
var token = localStorage.getItem('token')
var selectedId1 = ''; // 已选定的第一级
var selectedId2 = ''; // 已选定的第二级

sjindex1();
sjindex2();
sjindex3();
// 局部刷新-倒像是查询
function zhi(){
    
    // 一级标签
    var sj_data = {
        'token': token,
        'type': '1',
        'pid': ''
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('一级层级', data)
            var oneList = data.data.dictList;
            $("#one_list").html("")
            $.each(oneList, function (index, item) {
                var oneId = item.id;
                $("#one_list").append(
                    '<div class="col-md-2" id="labels_content">' +
                    '<div class="labels_col_text">' + item.dictValue + '</div>' +
                    '<button class="labels_col_del" onclick="label_oneid(\'' + oneId + '\')">删除标签</button>' +
                    '</div>'
                )
            })
        }
    })
    // 二级标签
    var sj_data = {
        'token': token,
        'type': '2',
        'pid': selectedId1
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('二级层级', data)
            var oneList = data.data.dictList;
            $("#two_list").html("")
            $.each(oneList, function (index, item) {
                var id = item.id;
                $("#two_list").append(
                    '<div class="col-md-2" id="labels_content">' +
                    '<div class="labels_col_text">' + item.dictValue + '</div>' +
                    '<button class="labels_col_del" onclick="label_oneid2(\'' + id + '\')">删除标签</button>' +
                    '</div>'
                )
            })
        }
    })
    // 三级标签
    var sj_data = {
        'token': token,
        'type': '3',
        'pid': selectedId2
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('三级层级', data)
            var oneList = data.data.dictList;
            $("#three_list").html("")
            $.each(oneList, function (index, item) {
                var id = item.id;
                $("#three_list").append(
                    '<div class="col-md-2" id="labels_content">' +
                    '<div class="labels_col_text">' + item.dictValue + '</div>' +
                    '<button class="labels_col_del" onclick="label_oneid3(\'' + id + '\')">删除标签</button>' +
                    '</div>'
                )
            })
        }
    })
}
// 获取第一层级标签列表
function sjindex1() {
    var sj_data = {
        'token': token,
        'type': '1',
        'pid': ''
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('一级层级', data)
            var oneList = data.data.dictList;
            $("#one_list").html("")
            $.each(oneList, function (index, item) {
                var oneId = item.id;
                $("#one_list").append(
                    '<div class="col-md-2" id="labels_content">' +
                    '<div class="labels_col_text">' + item.dictValue + '</div>' +
                    '<button class="labels_col_del" onclick="label_oneid(\'' + oneId + '\')">删除标签</button>' +
                    '</div>'
                )

            })
        }
    })
}
//一级层级删除
function label_oneid(oneId) {
    var o_data = {
        'token': token,
        'id': oneId
    }
    $.ajax({
        url: globel + "/hone/backend/dict/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(o_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("一级标签删除成功!")
            } else {
                alert("一级标签删除失败!")
            }
            zhi()
        }
    })
}

// 获取第二层级标签列表
function sjindex2() {
    var sj_data = {
        'token': token,
        'type': '2',
        'pid': selectedId1
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('二级层级', data)
            var oneList = data.data.dictList;
            $.each(oneList, function (index, item) {
                var id = item.id;
                $("#two_list").append(
                    '<div class="col-md-2" id="labels_content">' +
                    '<div class="labels_col_text">' + item.dictValue + '</div>' +
                    '<button class="labels_col_del" onclick="label_oneid2(\'' + id + '\')">删除标签</button>' +
                    '</div>'
                )
            })
        }
    })
}
// //二级层级删除
function label_oneid2(oneId) {
    var o_data = {
        'token': token,
        'id': oneId
    }
    $.ajax({
        url: globel + "/hone/backend/dict/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(o_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("二级标签删除成功!")
            } else {
                alert("二级标签删除失败!")
            }
            zhi()
            // window.location.reload();
        }
    })
}

// 获取第三层级标签列表
function sjindex3() {
    var sj_data = {
        'token': token,
        'type': '3',
        'pid': selectedId2
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('三级层级', data)
            var oneList = data.data.dictList;
            $.each(oneList, function (index, item) {
                var id = item.id;
                $("#three_list").append(
                    '<div class="col-md-2" id="labels_content">' +
                    '<div class="labels_col_text">' + item.dictValue + '</div>' +
                    '<button class="labels_col_del" onclick="label_oneid3(\'' + id + '\')">删除标签</button>' +
                    '</div>'
                )
            })
        }
    })
}
// //三级层级删除
function label_oneid3(oneId) {
    var o_data = {
        'token': token,
        'id': oneId
    }
    $.ajax({
        url: globel + "/hone/backend/dict/del",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(o_data),
        success: function (data) {
            if (data.errorCode == 0) {
                alert("三级标签删除成功!")
            } else {
                alert("三级标签删除失败!")
            }
            zhi()
            // window.location.reload();
        }
    })
}

// 下拉框获取第一层级标签列表
one_li();
function one_li() {
    var sj_data = {
        'token': token,
        'type': '1',
        'pid':''
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('一级', data)
            var oneList = data.data.dictList;
            $("#one_li").html('<option>请选择</option>');
            $.each(oneList, function (index, item) {
                var oneId = item.id;
                $("#one_li").append(
                    '<option  value="' + oneId + '">' + item.dictValue + '</option>'
                )
            })
        }
    })
}
// 第一级下拉监听
$('#one_li').change(function () {
    selectedId1 = $('#one_li option:selected').val();
})
// 下拉框获取第二层级标签列表
$("#two_li").click(function () {
    $(".p").css({display:"block"})
    two_li()
})
// two_li()
function two_li(){
    var sj_data = {
        'token': token,
        'type': '2',
        'pid': selectedId1
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(sj_data),
        success: function (data) {
            // console.log('二级', data)
            var oneList = data.data.dictList;
            $(".p").empty();
            $.each(oneList, function (index, item) {
                var oneId = item.id;
                // var pid=item.pid;
                var vall=item.dictValue;
                $(".p").append(
                    '<p class="sel_p" onclick="options(\''+oneId+'\',\''+vall+'\')">' + item.dictValue + '</p>'
                )
            })
        }
    })
}
// 点击p赋值
function options(oneId,vall){
    // console.log(oneId,vall)
    $("#two_li").val(vall);
    $(".p").css({display:"none"})
    selectedId2=oneId;
}


// 创建层级标签
$("#all_click").click(function () {
    // var tab = $(".tab-pane").hasClass('active');
    $(".tab-pane").each(function (e, ele) {
        // console.log(e);
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
                        // console.log('创建一级层级标签', data)
                        if (data.errorCode == 0) {
                            alert("一级标签创建成功！")
                        } else {
                            alert("一级标签创建失败！")
                        }
                        all_value = '';
                        zhi()
                        // window.location.reload()
                    }
                })
            } else if (type == '2') {
                var all_value = $("#all_value").val()
                var all_data = {
                    'token': token,
                    'pid_1': selectedId1,//一级标签ID
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
                        // console.log('创建二级层级标签', data)
                        if (data.errorCode == 0) {
                            alert("二级标签创建成功！")
                        } else {
                            alert("二级标签创建失败！")
                        }
                        all_value = ''
                        zhi()
                        // window.location.reload()
                    }
                })
            } else {
                var all_value = $("#all_value").val()
                // 要传的参数（怎么才能获取到pid_1，pid_2，value的值:设置全局变量，return出来，在需要的时候使用）
                var all_data = {
                    'token': token,
                    'pid_1': selectedId1,//一级标签ID
                    'pid_2': selectedId2,//二级标签ID
                    'value': all_value //标签值
                }
                $.ajax({
                    url: globel + "/hone/backend/dict/createSellerTag",
                    dataType: 'json',
                    type: "post",
                    contentType: "application/json",
                    data: JSON.stringify(all_data),
                    success: function (data) {
                        // console.log('创建三级层级标签', data)
                        if (data.errorCode == 0) {
                            alert("三级标签创建成功！")
                        } else {
                            alert("三级标签创建失败！")
                        }
                        all_value = ''
                        zhi()
                        // window.location.reload()
                    }
                })
            }
        }
    });
})


