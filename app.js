document.addEventListener("DOMContentLoaded", function() {
  console.log("hi");
  var buttom = document.getElementById('button');
  button.addEventListener("click", Doomsday);
});

function Doomsday() {
  image = document.getElementById("image")
  h1 = document.getElementById("heading");
  var body = document.getElementsByTagName("body");
  document.body.style.backgroundColor = "red";
  image.src="https://media.giphy.com/media/rqoufOL1KY7y8/giphy.gif"
  h1.innerText = "WHYYYYYYYYYYYY?!?!?!"
}
