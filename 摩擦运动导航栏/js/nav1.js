/*用到了jquery.easing库的动画效果，但是这个库的主要用法：
  {duration：时间：,easing:动画方式}
*/
$(function(){
	var index = window.location.href.split('/').length-1;
	var href = window.location.href.split('/')[index].substr(0,4);
	/*addClass()为某个选择器绑定已经写好的样式(.on)*/
    $(".nav_con li a[href^='"+href+"']").addClass("on");
    /*获取a或者li的宽度*/
    var li_width = $(".nav_con li a.on").outerWidth();
    /*获取a的left值，因为这个是以定位的方式决定line的位置*/
    var li_left = $(".nav_con li a.on").position().left;
    /*line的宽和左边的位置，重新设置*/
    $(".nav_con .line").css({width:li_width,left:li_left})

    /*鼠标经过时候，line的滑动*/
    $(".nav_con li").hover(function(){
    	/*这里的li_width和li_left是在函数里面的，所以仅在函数中执行；
         当鼠标到哪里，line就滑到哪里
    	*/
    	var li_width = $(this).outerWidth();
    	var li_left = $(this).position().left;
        $(".nav_con .line").stop().animate({width:li_width,left:li_left},
        {
        	duration:1000,
        	easing:'easeOutElastic'
        })
    },function(){
    	/*这里的li_width和li_left是在函数外面的，所以用的是上面的全局变量；
         当鼠标离开时候，line返回时的动画
    	*/
        $(".nav_con .line").stop().animate({width:li_width,left:li_left},{
        	duration:1000,
        	easing:'easeOutElastic'
        })
    })
})