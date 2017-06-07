$(function(){
    $(".nav .list li").hover(function(){
    	/*stop()要不要都可以；500为毫秒。要不要参数都可以（有默认的参数）；
    	find乡下寻找的意思（这里向下寻找.down选择器；*/
    	/*
          {duration:1000,easing:'easeOutBounce'}这段代码是引用了jquery.easing.1.3.js库的代码，里面有32种动画效果
          dura：时间，easing：'动画方式'；
    	*/
    	$(this).find(".down").stop().slideDown({duration:1000,easing:'easeOutBounce'
    	});
    },function(){
    	$(this).find(".down").stop().slideUp({duration:1000,easing:'easeOutBounce'
    	});
    })
})