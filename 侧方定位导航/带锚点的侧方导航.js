$(function () {
    $(window).scrollTop(0);//刷新页面回到顶部
    $(window).scroll(function () {
        var top = $(document).scrollTop();//获取滚动条滚动位移
        var nav = $("#nav");/*获取整个导航*/
        var floors = $("#main").find(".floor");/*获取所有楼层模块*/
        var currentId = "";
        // 滚动条移动的时候，获取滚动条到浏览器顶的高度
        floors.each(function () {
            var m = $(this);
            var floorTop = m.offset().top;
            if(top>floorTop-400){
                currentId = "#"+m.attr("id");
            }else {
                return false;
            }
        });
        // 判断当前位置并更改当前盒子的class，从而使导航条跟随页面
        var currentLink = nav.find(".current");
        if(currentId&&currentLink.attr("href")!=currentId){
            currentLink.removeClass("current");
            nav.find("[href='"+currentId+"']").addClass("current");
        }
    });
});