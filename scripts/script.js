$(document).ready(function(){
	

	$('img').on('dragstart', function(event){
		event.preventDefault();
	})
	$('.addqty').click(function(){
		x = parseInt($(this).next('h3').text())
		x = x+1
		$(this).next('h3').text(x)
	})

	$('.subqty').click(function(){
		x = parseInt($(this).prev('h3').text())
		if (x == 0) {
			$(this).prev('h3').text(x)
		}else{
			$(this).prev('h3').text(x-1)		
		}
	})




	
})


