 /* Objects Sliding in on Scroll 
    * ------------------------------------------------------ */

$(function() {
  var $blocks = $('.animBlock.notViewed');
  var $window = $(window);

  $window.on('scroll', function(e){
    $blocks.each(function(i,elem){
      if($(this).hasClass('viewed')) 
        return;
        
      isScrolledIntoView3($(this));
    });
  });
});

function isScrolledIntoView3(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemOffset = 0;
  
  if(elem.data('offset') != undefined) {
    elemOffset = elem.data('offset');
  }
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  
  if(elemOffset != 0) { // custom offset is updated based on scrolling direction
    if(docViewTop - elemTop >= 0) {
      // scrolling up from bottom
      elemTop = $(elem).offset().top + elemOffset;
    } else {
      // scrolling down from top
      elemBottom = elemTop + $(elem).height() - elemOffset
    }
  }
  
  if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
    // once an element is visible exchange the classes
    $(elem).removeClass('notViewed').addClass('viewed');
    
    var animElemsLeft = $('.animBlock.notViewed').length;
    if(animElemsLeft == 0){
      // with no animated elements left debind the scroll event
//      $(window).off('scroll');
    }
  }
    

       
}
    /* Objects Sliding in on Scroll KONIEC
    * ------------------------------------------------------ */



   /* Stat Counter
    * ------------------------------------------------------ */
    // number count for stats, using jQuery animate

function runStats(){
//alert("siema");
    $('.counting').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });  


    });

}

     /* Stat Counter KONIEC
    * ------------------------------------------------------ */





$(allInView);
$(window).scroll(allInView);
function isScrolledIntoView2(elem) {
    
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function allInView() {
    if (isScrolledIntoView2($("#counter-stats"))) runStats();
}