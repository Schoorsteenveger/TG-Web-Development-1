
// a  4.2  DOM methods

// i) getElementsByClassName

const pClassName = document.getElementsByClassName(".pClassName");
console.log(pClassName);

function changeElements() {
  document.querySelector(".pClassName").style.color = "blue";

  console.log(changeElements);
}

const totalh2 = document.getElementsByTagName("h2");

// ii) document.getElementsByTagName alert("total h2 tags are: " + totalh2.length);

document.getElementById("showH2").innerHTML = "Aantal h2 = " + totalh2.length
console.log(totalh2);
console.log(showH2);

// iii) document.querySelector

const text = document.querySelector("text");
function colorChange() {
  document.querySelector(".text").style.backgroundColor = "red";
}

// iv)document.querySelectorAll

const allText = document.querySelectorAll("all-elements");
function Change() {
  document.querySelector(".all-elements").style.backgroundColor = "blue";
}

// v)element.innerHTML
function clickFunction() {
  document.getElementById("list").innerHTML = "Zo, aangepast";
}

// v)element.innerText

function ShowInnerText() {
  const x = document.getElementById("btn-text").innerText;
  document.getElementById("showText").innerHTML = " Het werkt vandaag.";
}