const hexArray = ["#234F38", "#4B2D2B", "#C36A3F"];

$(document).ready(function(){  
  
$(".roll").click(function(){
	
  console.log("hello");	
  $(".intro").addClass('get-results');

  //pick a random hex
  let hex = hexArray[Math.floor(Math.random()*myArray.length)];
  console.log(hex);

  //add hex to 
  $("body").css({ backgroundColor : $hex }) 
  });  
  
});  




