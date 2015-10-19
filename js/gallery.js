$(document).ready(function (){
	$('.jeans').click(function (){
		$('section#blazer').hide();
	}); //hide blazers when jeans is clicked
	$('.jeans').click(function (){
		$('section#jeans').show();
	}); //show jeans when jeans is clicked
	$('.blazer').click(function (){
		$('section#jeans').hide();
	}); //hide blazer when jeans is clicked
	$('.blazer').click(function (){
		$('section#blazer').hide();
	}); //show blazers when blazers are clicked
});