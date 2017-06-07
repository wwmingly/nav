$(function(){
	/*index值是数组的最后一个值；window.location.href是获取地址栏（地址栏的地址就是一串字符）；split是把字符串分割成数组*/
	var index=window.location.href.split("/").length-1
	/*window.location.href.split("/")[index]就是获取数组的最后一个；substr就是比较最后一个数组字符串的前四位（从0到3）*/
	var href=window.location.href.split("/")[index].substr(0,4);
	/*下面的意思就是：当页面加载时，有href（href>0）时执行第一句，没有href（href<0)时，默认显示首页；其中注意（ ^ )这个比较符号*/
	if (href>0) {
		$(".list li a[href^='"+href+"']").addClass("on");
	}else{
		$(".list li a[href^='index']").addClass("on");
	};
	
})