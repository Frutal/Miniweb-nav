$( document ).ready(function() {


 $(".draggable").draggable({ revert: true });

 $("#droppable").droppable({
  activeClass: 'ui-state-hover',
  hoverClass: 'ui-state-active',
  // uncomment the line below to only accept the .correct class..
  // Note: the "drop" function will not be called if not ".correct"
  //  accept : '.correct',
  drop: function(event, ui) {
   // alternative method:
   // if (ui.draggable.find('p').text() == "1") {
   if (ui.draggable.is('.correct')) {
    $(this).addClass('ui-state-highlight').find('p').html('You got it!');
    // cloning and appending prevents the revert animation from still occurring
    ui.draggable.clone(true).css('position', 'inherit').appendTo($(this));
    ui.draggable.remove();
   } else {
    $('#droppable > p').html('Not that one!')
    setTimeout(function(){ $('#droppable > p').html('Drop here'); }, 1000);
   }
  }
 });

});
