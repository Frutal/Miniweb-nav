$( document ).ready(function() {

 $(".draggable").draggable({ revert: true });

 $(".droppable").droppable({

  drop: function(event, ui) {
    $(this).addClass('noesveu');
    
    var nom=ui.draggable.attr('name');
    $('div#fitxes_personal').children().each(
      function()
      {
        if($(this).attr("name")===nom)
        {
          $(this).removeClass("noesveu");
          $(this).addClass("esveu");
}});
$('button[name="boto"]').click(
  function()
  {
    var $fitxa=$(this).parents('div.fixa');
    $fitxa.removeClass('esveu');
    $fitxa.addClass('noesveu');
    $('div#puntets').removeClass('noesveu');
    $('div#puntets').addClass('esveu');
  }
);
  }
 });
});
