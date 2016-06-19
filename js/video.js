//->控制视频的自动播放
$(function () {
    window.setTimeout(function () {
        var myVideo = videojs("myVideo");
        myVideo.ready(function () {
            $("#myVideo").css({
                width: document.documentElement.clientWidth,
                height: parseFloat($(".videoBox").css("height"))
            });
            //this.play();
        });
    }, 1000);
});
