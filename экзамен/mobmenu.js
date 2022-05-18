
$(function(){
	function menuPoyavlyaetsa()
	{
		$('#mobbm').toggleClass('netu');
		$('#mobbm').removeClass('mobanim');
	
		
	}
	
	
	
	
	function animaciyaPriIscheznovenii()
	{
		$('#mobbm').toggleClass('mobanim');
	
		
	}
	
	function burgerMenu()
	{
		$('#burgermenu').toggleClass('bnone');
	
		
	}
	
	
$('a').on('click', function(){
return false;}	);
	
	$('#burgermenu').on('click', function(){		
		menuPoyavlyaetsa();	
		burgerMenu();	
		
	});
	
	$('#close').on('click', function(){		
		animaciyaPriIscheznovenii();	
		setTimeout(menuPoyavlyaetsa, 1000);	
		setTimeout(burgerMenu, 500);	
		
	});
	
});