//Make html of a game that shows, number of wins, a random number to equal to after guessing the values of the crystals
//four or more crystals to click on and get a random number from each
//have a counter that shows a random number to be matched  by pressing crystals
//have a counter that starts on 0, and that gets added the assigned random numbers to the crystals


$(function(){
  var gameWin = false;
  var gameLose = false;
    var random_result = Math.floor(Math.random() * 40) + 70;
  $("#randomNumber").append("Number to match: "+random_result);  

$("#gameWin").hide();
$("#gameLose").hide();


$("#restart").on("click", function(){
  location.reload();
})

  $(".gems").hover(function () {
    $(this).addClass("gemsDos");
},
 function () {
    $(this).removeClass("gemsDos");
});


var randomArray = [];
for(var i=0; i<6; i++){
  var random = Math.floor(Math.random() * 12) + 4;
  randomArray.push(random);
}
console.log(randomArray);


$("#guessOne").attr({
  "data-random": randomArray[0]

});

$("#guessTwo").attr({
  "data-random": randomArray[1]

});

$("#guessThree").attr({
  "data-random": randomArray[2]

});

$("#guessFour").attr({
  "data-random": randomArray[3]

});

$("#guessFive").attr({
  "data-random": randomArray[4]

});
$("#guessSix").attr({
  "data-random": randomArray[5]

});

var counterInitial = 0;
$("#counter").append(counterInitial);

  $(".gems").on("click", function(){
counterInitial = Number(counterInitial) + Number($(this).attr("data-random"));
$('#counter').text("Your number: "+counterInitial);

if(
  counterInitial === random_result
){
gameWin = true
}
else if(
  counterInitial > random_result
){
  gameLose = true;
}
console.log(gameWin);

if(
  gameWin === true
){
  $("#gamePlay").hide()
  $("#gameWin").show()
}
else if(
  gameLose === true
){
  $("#gamePlay").hide()
  $("#gameLose").show()
}
  });
  
  
$("#gameLose h2").on("click", function(){
  location.reload();
})

$("#gameWin h2").on("click", function(){
  location.reload();
})

  $("#counter").text("Your number: "+counterInitial);


/*
var theTotal = 0;
$('button').click(function(){
   theTotal = Number(theTotal) + Number($(this).val());
    $('.total').text("Total: "+theTotal);        
});

$('.total').text("Total: "+theTotal); 

*/



});





/*

  var randomArray = [];
  var random_results = Math.floor(Math.random() * 30) + 20;
  $("#randomNumber").append(random_results);
var lost;
var wins;

for(var i=0; i < 6; i++){
  var random = Math.floor(Math.random() * 12)+ 2;
  //$(".gems").attr({
    //"data-random": random
  //});
}
//console.log(random);
//$(".gems").attr({
  //"data-random": random
//});



$(".gems").on("click", function(){
  console.log($(this).attr("data-random"));
})
});

*/








/*
$(function(){

var random_result;
var random_results = [];
var counter;
var lost;
var win;

/*
random_result = Math.floor(Math.random() * 100) +80;
$("#randomNumber").append(random_result);

counter = Math.floor(Math.random() * 10) +2;
$("#counter").append(counter);


$("#result").html("Random Results: ");
//console.log(random_result);
for(var i=0; i < 6; i++){
  var random = Math.floor(Math.random() * 18) + 2;
random_results.push(random);
}



$("#guessOne").on("click", function(){
  //$("#guessOne").append(random_results[0]);
 // console.log(#guessOne);
counter = +counter + +random_results[0];

})
 $("#guessTwo").on("click", function(){
  console.log(random_results[1]);
  score += 10;
})

$("#guessThree").on("click", function(){
  console.log(random_results[2]);
})

$("#guessFour").on("click", function(){
  console.log(random_results[3]);
})

$("#guessFive").on("click", function(){
  console.log(random_results[4]);
})

$("#guessSix").on("click", function(){
  console.log(random_results[5]);
})




})
//$(".gems").on("click", function(){
  //console.log(random_result);
//});


  /*
$("#guessOne").append(crystalValues[1]);
$("#counter").add(crystalValues[1]);

})

$("#guessTwo");

$("#guessThree");

$("#guessFour");

var randomNumberVar = Math.floor(Math.random()*50+1);
$("#randomNumber").html(randomNumberVar);
*/
