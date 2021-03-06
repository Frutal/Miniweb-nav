$(document).ready(
	function() {
	$( "#catalog" ).accordion();
	$( "#catalog li" ).draggable({
	appendTo: "body",
	helper: "clone"
	});
	$( "#cart ol" ).droppable({
	activeClass: "ui-state-default",
	hoverClass: "ui-state-hover",
	accept: ":not(.ui-sortable-helper)",
	drop: function( event, ui ) {
		//$( this ).find( ".placeholder" ).remove();
		var nom=ui.draggable.attr('name');
		$('div#fitxes_personal').children().each(
			function()
			{
				if($(this).attr("name")===nom)
				{
					$(this).removeClass("noesveu");
					$(this).addClass("esveu");
					$('#cart').removeClass("esveu");
					$('#cart').addClass("noesveu");
				}
				else
				{
					$(this).addClass("noesveu");
					$(this).removeClass("esveu");	
				}	
			}
		);
	}
	}).sortable({
	items: "li:not(.placeholder)",
	sort: function() {
	// gets added unintentionally by droppable interacting with sortable
	// using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
	$( this ).removeClass( "ui-state-default" );
	}
	});
	$('button[name="boto"]').click(
		function()
		{
			var $fitxa=$(this).parents('div.fixa');
			$fitxa.removeClass('esveu');
			$fitxa.addClass('noesveu');
			$('div#inicial').removeClass('noesveu');
			$('div#inicial').addClass('esveu');
			$('div#cart').removeClass('noesveu');
			$('div#cart').addClass('esveu');
		}
	);
}
);