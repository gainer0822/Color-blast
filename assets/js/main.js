jQuery(document).ready(function($) {
  new Clipboard('.color');
});



$(function setcolorWord(){
  var $colorWord = $('.color-word');

  $('.color').mouseenter(function(){
    var color = $(this).css('background-color');
    $colorWord.css('color', color);
  });
  $('.color').mouseleave(function(){
    var color = $(this).css('background-color');
    $colorWord.css('color', '#222');
  });
})

$('.color').click(function(){
  var color = $(this).css('background-color');
  $this = $(this);
  
  
  $('<div class="blast" style="background-color:' + color + '" ></div>')
  .appendTo($this.parent())
  .delay(1500).queue(function() { $(this).remove(); });

});


$(function chooseOption(){
    $(".choose-option").first().addClass('active');
    $(".color-hex").addClass('active');

    $(".choose-option").click(function(e){
        e.preventDefault();
        var $this = $(this);
        var $colorDiv = $('.color')
        $this.addClass('active');
        $this.siblings().removeClass('active');
        
        // If user clicks on RGB option
        if ($this.hasClass('choose-option-2')){
            $('.choose-border').addClass('changed');


            $('.color-hex').removeClass('active');
            $('.color-rgb').addClass('active');


            // Change attribute "data-clipboard-text" in all color elements from HEX value to RGB value
            $colorDiv.each(function(){
          
              var rgbVal = $(this).attr("data-rgb");
              $(this).attr("data-clipboard-text", rgbVal);
            
            });
        } 
        // If user clicks on HEX option
        if ($this.hasClass('choose-option-1')){
            $('.choose-border').removeClass('changed');


            $('.color-rgb').removeClass('active');
            $('.color-hex').addClass('active');

            
            // Change attribute "data-clipboard-text" in all color elements from RGB value to HEX value
            $colorDiv.each(function(){

              var hexVal = $(this).attr("data-hex");
              $(this).attr("data-clipboard-text", hexVal);


            });
        };
    });
});





