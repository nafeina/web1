window.onload=function(){
    var ww =document.documentElement.clientWidth;
    var scale = ww/640;
    document.body.style.zoom = scale;

    window.onresize = function(){
        var ww =document.documentElement.clientWidth;
        var scale = ww/640;
        document.body.style.zoom = scale;
    }
}