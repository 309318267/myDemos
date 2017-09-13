## 9/14/2017
* 删除button中的a子元素，省去a元素默认事件导致浏览器刷新的麻烦
```javascript
$(function(){
    $("a").click(function(event){
        event.preventDefault();
        var cur = $(this).parent().index();
        $(this).addClass("active")
        .parent().siblings()
        .children().removeClass();
//原代码
```
```javascript
$(function(){
    $("button").click(function(){
        var cur = $(this).index();
        $(this).addClass("active")
        .siblings().removeClass();
//优化后
```

