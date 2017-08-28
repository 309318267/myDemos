/**
 * Created by Administrator on 2017/8/22.
 */
$(function () {
    $("#pho").mouseover(
        function(){
            //获取被放大图片定位对象
            var position = $(this).offset();
            $("#big").css({top:position.top + "px",left:position.left + $(this).width()+5 +"px"}).show();

        }
    ).mouseout(function(){
        $("#big").hide();
    }).mousemove(
        function(e){
            var position = $(this).offset();

            //计算鼠标在图片上面的偏移坐标
            var x = e.pageX - position.left;
            var y = e.pageY - position.top;

            //定位放大镜的距离
            $("#big").scrollTop(y*5-150).scrollLeft(x*5-192);
        });
})
