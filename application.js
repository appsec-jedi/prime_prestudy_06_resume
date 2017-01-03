$(document).ready(function(){
  $(".main").hide();
  $("div.button").click(function(){
    $(".main").toggle();
  });
});


var user = prompt("Hey, friend! Welcome to my page! What can I call you?");
alert("Thanks for stopping by, " + user + "! Click on the button on the next page to learn more about me");

setTimeout(function()
  { alert("You've been here a while, " + user + ". feel free to connect with me on LinkedIn and start a conversation"); }, 60000);

function openTab(evt, tabName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
