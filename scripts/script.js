$(document).ready(function(){

	$('img').on('dragstart', function(event){
		event.preventDefault();
	})

	$('.add').click(function(){		
		x = parseInt($('.cart_amount').text())
		x = x + 1
		$('.cart_amount').text(x) 
	})

	$('.remove').click(function(){		
		x = parseInt($('.cart_amount').text()) 
		if (x == 0) {
			$('.cart_amount').text(0)
		}else{
			$('.cart_amount').text(x-1)
		}
	})












})