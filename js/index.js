/**
 * Created by admin on 2016/8/31.
 */
window.onload=function(){
    var ww =document.documentElement.clientWidth;
    var scale = ww/640;
    document.body.style.zoom = scale;

    window.onresize = function(){
        var ww =document.documentElement.clientWidth;
        var scale = ww/640;
        document.body.style.zoom = scale;
    }
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay : 2000,

        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
        paginationElement : 'li'


    })
    $("#footer .f_fir_dl").on("click",function(){
        window.location.href="index.html";
    })
    $("#footer .f_sec_dl").click(function(){
        window.location.href="classify.html";
        console.log($(this))
    })
    $("#footer .f_tir_dl").click(function(){
        window.location.href="prompt.html";
        console.log($(this))
    })
    console.log($("#footer .f_sec_dl"))
}

