$(document).ready(function(){
  $(".main").hide();
  $("div.button").click(function(){
    $(".main").toggle();
  });
});


var user = prompt("Hey, friend! Welcome to my page! What can I call you?");
alert("Thanks for stopping by, " + user + "! Click on the button on the next page to learn more about me");

setTimeout(function() { alert("You've been here a while, feel free to connect with me on LinkedIn and start a conversation"); }, 60000);
