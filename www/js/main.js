$(document).bind("mobileinit", function(){
  //apply overrides here
  
       $.mobile.defaultPageTransition = 'flow';
  
});

$(document).ready(function() {
     
    $(".button").click(function() {
         var messages = ["Frikandel!", "Kaassoufle", "Bal gehakt", "Halve kip", "Huzarenslaatje"],
         message = messages[Math.floor(Math.random() * messages.length)];
        $("#snack").text(message); 
    });
    
});