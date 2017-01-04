$(document).ready(function(){
  $(".main").hide();
  $("div.button").click(function(){
    $(".main").toggle();
  });
});


var gotName = false;
while (gotName == false) {
  var userName = prompt("Hey, friend! Welcome to my page! What can I call you?");
  if (userName == null) {
    alert("Sorry, I didn't get that");
  }
  else if (userName.length <= 1) {
    alert("Sorry, I didn't get that");
  }
  else {
    alert("Thanks for stopping by, " + userName + "! Click on the button on the next page to learn more about me");
    gotName = true;
  }}

console.log(userName);
console.log(typeof(userName));


setTimeout(function()
  { alert("You've been here a while, " + userName + ". feel free to connect with me on LinkedIn and start a conversation"); }, 60000);

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
