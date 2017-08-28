/**
 * Created by Administrator on 2017/8/24.
 */
$(function () {
    var colorL=localStorage.getItem("oldskin");
    $("body").css("background-color",colorL);
    $("li").click(function () {
        colorL=$(this).attr("id");
        $("body").css("background-color",colorL);
        localStorage.setItem("oldskin",colorL)
    })
})