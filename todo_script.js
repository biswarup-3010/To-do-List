let strALL = document.querySelectorAll("h1,h3,p");
strALL.forEach(function (strALL) {
  strALL.textContent = strALL.textContent.toUpperCase();
});
let idx = 0;
let worksPending = 0;
function adWork() {
  var audio = new Audio("sounds/added-error-1110.wav");
  audio.play();
  let str = document.getElementById("workPlan").value;
  let newstr = str.trim();
  if (newstr == "") {
    alert("Please enter valid work...");
  } else {
    idx++;
    let element = document.createElement("div");
    element.innerHTML = `<div class="worksToDO">
  <div id="sl"><h3>${idx}</h3></div>
  <div id="dtls"><h3>${str}</h3></div>
  <button id="rmv1" onclick="removeWork(this)"><h3>x</h3></button>
</div>`;

    document.querySelector(".works").appendChild(element);
    worksPending++;
  }
  document.getElementById("workPlan").value = "";
  document.getElementById(
    "worksPending"
  ).innerHTML = `No of pending works : ${worksPending}`;
}
function removeWork(button) {
  button.parentElement.parentNode.removeChild(button.parentElement);
  var audio = new Audio("sounds/interface_click.wav");
  worksPending--;
  audio.play();
  document.getElementById(
    "worksPending"
  ).innerHTML = `No of pending works : ${worksPending}`;
  if (worksPending == 0) {
    location.reload();
  }
}
// on opening the web play sound
function playMusic() {
  var audio = new Audio("sounds/opening-software-interface-2578.wav");
  audio.play();
}
