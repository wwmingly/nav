$(function(){
    $(".nav .list li").hover(function(){
    	/*stop()要不要都可以；500为毫秒。要不要参数都可以（有默认的参数）；
    	find乡下寻找的意思（这里向下寻找.down选择器；*/
    	$(this).find(".down").stop().slideDown(500);
    },function(){
    	$(this).find(".down").slideUp(500);
    })
})