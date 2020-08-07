// 外部js文件
$(function ()
{
    // //测试外部文件是否能够加载
    // alert('外部数据加载完成');
    // console.log(blogData)
    // console.log(faderData)

    var DATA_URL = '../project/images/';
    var html = '';
    //遍历faderdate数据 生成3个li
    $.each(faderData, function (i, o)
    {
        html += '<li class="slide">'
        html += '<a href="#">'
        html += `<img  class ="items"  src="${ DATA_URL + o.img_url }" alt="banner1">`
        html += '<span class="imginfo">'
        html += `${ o.img_info }`
        html += ' </span>'
        html += ' </a>'
        html += ' </li>'
    })
    console.log(html)
    $('.fader_controls').before(html)
    //调用juqery
    $('.fader').easyFader()

})



