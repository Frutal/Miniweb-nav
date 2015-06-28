$( document ).ready(function() {


 $(".draggable").draggable({ revert: true });

 $(".droppable").droppable({
  activeClass: 'ui-state-hover',
  hoverClass: 'ui-state-active',

  // uncomment the line below to only accept the .correct class..
  // Note: the "drop" function will not be called if not ".correct"
  //  accept : '.correct',
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
    //$('#ffrutal').show();

    // cloning and appending prevents the revert animation from still occurring
    //ui.draggable.clone(true).css('position', 'inherit').appendTo($(this));
  //  ui.draggable.remove();


  }
 });
});
