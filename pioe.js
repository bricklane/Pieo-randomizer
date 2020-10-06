const hexArray = ["blue", "green", "pink", "yellow", "orange", "black", "brown"];
const promptArray = ["Hatching", "Hot springs", "Wings", "Symbiosis", "In the deep", "Teeth and claws", "Shed and molt", "Metaporphosis", "Spineless", "Migration", "Fur", "Dwelling", "Pollinators", "Keystone species", "Tentacles", "Predator", "Prey", "Nocturnal", "Shells", "Slither", "Lightning", "Poison", "Amphibious", "Ecosystem engineer", "Risk", "Doves", "Daytimes", "Streets", "Bathing", "Fire", "Astronomy", "Chair", "Eating and drinking", "Sharp" ]
const inputArray = ["Eye Tracking","Temperature","Light","Heart Rate","Muscle Movement","Sound","Movement","Acceleration","Angle/Tilt","GPS/Location","Pressure","Proximity","Buttons/Switches","Pulleys","Word Recognition","Object Recognition","Body Tracking","Semantic Classification","Semantic Association","Environmental"];
const outputArray = ["Movement","Vibration","Temperature","Scent","Projection","Video","Air","Water","Electricity","Eject","Text"];
const evokeArray = ["Togetherness","New","Awareness","Individual","Playful","Somber","Satisfaction","Hunger","Small","Big"];

$(document).ready(function(){  
  
$(".roll").click(function(){
	
  console.log("hello");	
  $(".intro").addClass('get-results');
  $(".results").animate({ opacity: 1.0 });

  //pick a random hex
  let hex = hexArray[Math.floor(Math.random()*hexArray.length)];
  console.log(hex);

  //get a random prompt
  let prompt = promptArray[Math.floor(Math.random()*promptArray.length)];
  console.log(prompt);

  //get a random input
  let input = inputArray[Math.floor(Math.random()*inputArray.length)];
  console.log(input);

  //get a random output
  let output = outputArray[Math.floor(Math.random()*outputArray.length)];
  console.log(output);

  //get a random evoke
  let evoke = evokeArray[Math.floor(Math.random()*evokeArray.length)];
  console.log(evoke);

  $("body").addClass( hex + "-bg");
  $(".prompt-result").append( prompt );
  $(".input-result").append( input );
  $(".output-result").append( output );
  $(".evoke-result").append( evoke );

  //add hex to 
  //$("body").css({"background-color": "#" + hex }) 
  });
  
}); 


//refresh results

$(document).ready(function(){  
  $(".bodymovinanim").click(function(){
  	console.log("twerks");
  });
  
}); 



$(document).ready(function(){ 
/* Play an animation on each click */
    let iconSkipForward = document.querySelector('.bodymovinanim');

    let animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets3.lottiefiles.com/packages/lf20_vtkhpebf.json"
    });

      iconSkipForward.addEventListener('click', function() {
      animationSkipForward.playSegments([0,192], true);
    }); 
  });




