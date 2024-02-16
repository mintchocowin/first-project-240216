$(document).ready(function($){
  $(.scroll).click(function(event){
    console.log(".scroll");
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},500);
  })
})


$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 1000);
  e.preventDefault();
});

// $(".text-photo").remove(function () {
//   $("#photo-introduce-windows").remove()
// });


// function removeElementsByClass(".photo-introduce-windows"){
//   const elements = document.getElementsByClassName(".photo-introduce-windows");
//   while(elements.length > 0){
//       elements[0].parentNode.removeChild(elements[0]);
//   }
// }


$(document).ready(function() {
  $("#text-photo").hover(function() {
      $("#photo-windows").fadeIn(3000);
  }, function() {
      $("#photo-windows").fadeOut(3000);
  });
});