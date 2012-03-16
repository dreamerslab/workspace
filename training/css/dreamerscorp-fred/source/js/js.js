$(function(){
  $( '#change-to-tw' ).click(function(){
    $( '.en' ).hide();
    $( '.tw' ).fadeIn( 1000 );
  });

  $( '#change-to-en').click(function(){
    $( '.en' ).fadeIn( 1000 );
    $( '.tw' ).hide();
  });
});