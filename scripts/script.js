$(document).ready(function(){
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


	$('img').on('dragstart', function(event){
		event.preventDefault();
	})

	$('.addqty').click(function(){
		x = parseInt($(this).next('h3').text())
		x = x+1
		$(this).next('h3').text(x)
		price = parseInt($(this).parent().siblings('.price').children('p').text())
		$(this).parent().siblings('.total_price').children('p').text( x * price)		
		
	})


	$('.cart_add_qty').click(function(){
		event.preventDefault()
		x = parseInt($(this).next('p').text())
		x = x+1
		$(this).next('p').text(x)
	})


	$('.cart_remove_qty').click(function(){
		event.preventDefault()
		x = parseInt($(this).prev('p').text())
		if (x == 0) {
			$(this).prev('h3').text(x)
		}else{
			x = x - 1
			$(this).prev('p').text(x)		
		}
		price = parseInt($(this).parent().siblings('.price').children('p').text())
		$(this).parent().siblings('.total_price').children('p').text( x * price)
	})
	$('.cart_remove_order').click(function(){
		event.preventDefault()
		$(this).parents('tr').remove()

	})


	$('.admin_accepted').click(function(){
		$(this).parents('tr').css('background-color' , '#698f38')
		})

	$('.admin_denied').click(function(){
		$(this).parents('tr').css('background-color' , '#d32f2f')
		})
	$('.admin_completed').click(function(){
		$(this).parents('tr').css('background-color' , 'grey')
		})
	


	$('#sign_in_button').click(function () {
		x = $('#usrname').val()
		if (x == 'admin') {
			window.location = 'admin.html'
		}else{
			window.location = '../index.html'			}	
	})

	$('.delete_menu_item').click(function(){
		event.preventDefault();
		$(this).closest('.single_item').remove()

	})

	$('#admin_menu_submit').click(function(){
		event.preventDefault();
		text = $('#food_desc_input').val();
		price = $('#food_price_input').val();
		src = 'empty'
		$('#food_image_input').change(function(){
			src = grabimage(this.val());
			
		})

		
		food = '<div class="single_item">'+
				'<img src=" '+src+' ">'+
				'<div class="menu_item_desc">'+ 
				'<p>'+	text +				
				'</p>'+
				'</div>'+
				'<div class="menu_item_price">'+
				'<h4>'+  price +
				'</h4>'+
				'</div>'+
				'<button class="delete_menu_item">'+
				'DELETE'+
				'</button>'+
				'</div>"'
		$('#current_menu_items').append(food);

		
	})


	function grabimage (event){
		src = 'empty'
		files = event.target.files[0]
		var reader = new FileReader();
		reader.onload = function(event){

			src = event.target.result;
		}
		reader.readAsDataURL(files);
		return src;
	}







	
})


