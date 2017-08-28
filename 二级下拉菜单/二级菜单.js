$(function () {
    $(".one").mouseover(function () {
        $(this).children("ul").show();
    })
    $(".one").mouseout(function () {
        $(this).children("ul").hide();
    })
})