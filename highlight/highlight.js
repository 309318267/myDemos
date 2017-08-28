/**
 * Created by Administrator on 2017/8/24.
 */
$(function () {
    $("img").mouseover(function () {
        $(this).addClass("highLight");
    })
    $("img").mouseout(function () {
        $(this).removeClass("highLight");
    })
})