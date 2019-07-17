
var globel = 'http://192.168.0.166:8080';
var token = localStorage.getItem('token')

// 获取第一层级标签列表
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
            // var oneId=oneList[index].id;
            $("#one_list").append(
                '<div class="col-md-2" id="labels_content">' +
                '<div class="labels_col_text">'+item.dictValue +'</div>' +
                '<button class="labels_col_del">删除标签</button>' +
                '</div>'
            )
        })
    }
})
// 获取第二层级标签列表
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
            // var id=oneList[index].id;
            $("#two_list").append(
                '<div class="col-md-2" id="labels_content">' +
                '<div class="labels_col_text">'+item.dictValue +'</div>' +
                '<button class="labels_col_del">删除标签</button>' +
                '</div>'
            )
        })
    }
})
// 获取第三层级标签列表
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
            // var id=oneList[index].id;
            $("#three_list").append(
                '<div class="col-md-2" id="labels_content">' +
                '<div class="labels_col_text">'+item.dictValue +'</div>' +
                '<button class="labels_col_del">删除标签</button>' +
                '</div>'
            )
        })
    }
})

// 创建层级标签
$("#all_click").click(function(){
    // var one_val=$("#one_val").val();
    // var two_val=$("#two_val").val();
    // var three_val=$("#three_val").val();

    var all_val=one_val+two_val+three_val;
    // var all="one_val+'-'+two_val+'-'+three_val"
    // all_val=all
    console.log(all_val)

    var all_data={
        'token':token,
        'pid_1':1,//一级标签ID
        'pid_2':1,//二级标签ID
        'value':1 //标签值
    }
    $.ajax({
        url: globel + "/hone/backend/dict/sellerTagList",
        dataType: 'json',
        type: "post",
        contentType: "application/json",
        data: JSON.stringify(all_data),
        success: function (data) {
            console.log('创建一级层级标签', data)
            // var oneList = data.data.dictList;
            // $.each(oneList, function (index, item) {
            //     // var id=oneList[index].id;
            //     $("#three_list").append(
            //         '<div class="col-md-2" id="labels_content">' +
            //         '<div class="labels_col_text">'+item.dictValue +'</div>' +
            //         '<button class="labels_col_del">删除标签</button>' +
            //         '</div>'
            //     )
            // })
        }
    })
})