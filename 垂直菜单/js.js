$(function(){

	$(".main>a").click(function(){


		var t= $(this).text();
		$(".text").append(t+">");

        // var p = $(".text").text();
        // alert(p)
        // var s = p.split(">");

        // var w=s.replace( )

        // alert(s.length)
        // $(".text").remove();
        
        




		var UL = $(this).next("ul");
		UL.slideToggle();
		changeNode($(this));
		// changeNodeP($(this).parent());
	});

	$(".main li ").click(function(){
		var tc= $(this).text();
     
		$(this).css("background","#666").siblings().css("background","#eee");
	})


	function changeNode(mainNode){
		if(mainNode){
			if(mainNode.css("background-image").indexOf("sanjiaoyou.png")>=0){
				mainNode.css("background-image","url('sanjiaozuo.png')");


			}else{
				mainNode.css("background-image","url('sanjiaoyou.png')");
			}
		}
	}

})
