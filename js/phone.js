window.onload=function(){
    var ww =document.documentElement.clientWidth;
    var scale = ww/640;
    document.body.style.zoom = scale;

    window.onresize = function(){
        var ww =document.documentElement.clientWidth;
        var scale = ww/640;
        document.body.style.zoom = scale;
    }
    $("#footer .f_fir_dl").on("click",function(){
        window.location.href="index.html";
    })
    $("#footer .f_sec_dl").click(function(){
        window.location.href="classify.html";
        console.log($(this))
    })
    $("#nav p:last").on("click",function(){
        window.location.href="phone.html"
    })
    $("#nav p:first").on("click",function(){
        window.location.href="classify.html"
    })
    $("#footer .f_tir_dl").click(function(){
        window.location.href="prompt.html";
        console.log($(this))
    })
    $("#footer .f_tir_dl").click(function(){
        window.location.href="prompt.html";
        console.log($(this))
    })
}