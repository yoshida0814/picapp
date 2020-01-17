$(document).on('turbolinks:load', function() {　
$(function() {
    setTimeout(function(){
        $('.main-text ').fadeIn(4000);
    },500); //0.5秒後にロゴをフェードイン!
});
$(function(){
  // 
  var duration = 300;

  // aside ----------------------------------------
  var $aside = $('.page-main > aside');
  var $asidButton = $aside.find('button')
      .on('click', function(){
          $aside.toggleClass('open');
          if($aside.hasClass('open')){
              $aside.stop(true).animate({left: '-70px'}, duration, 'easeOutBack');
              $asidButton.find('img').attr('src', 'assets/btn_close.png');
          }else{
              $aside.stop(true).animate({left: '-350px'}, duration, 'easeInBack');
              $asidButton.find('img').attr('src', 'assets/btn_open.png');
          };
      });

  });

});