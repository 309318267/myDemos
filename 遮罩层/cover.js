$(function(){
    $("a").click(function(event){
        event.preventDefault();
        var cur = $(this).parent().index();
        $(this).addClass("active")
        .parent().siblings()
        .children().removeClass();
        // botton增加active
        var skin = $("div[class*=blur]").attr("class");
        var now = "blur"+cur;
        if(skin!="blur"+cur){
            $("."+skin).removeClass().addClass(now);
        }
        if(cur==3){
            $(".blur3").css({"top":"30%"})
        }else{
            $("div[class*=blur]").css({"top":"0"})
        }
    })
})
