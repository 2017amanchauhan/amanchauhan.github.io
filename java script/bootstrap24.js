
/*=================10/07/2023=================*/


/*
var newElement=document.getElementsByClassName("aman")[0];
newElement.style.color="red";
var newElement=document.getElementById("nav");
newElement.style.backgroundColor="black";
newElement.style.borderBottom="5px solid white";
var newElement=document.getElementById("header");
newElement.style.backgroundColor="red";
var newItems=document.getElementsByClassName("course")[0];
newItems.style.color="white";
var newItems=document.getElementById("items");
newItems.style.backgroundColor="black";
newItems.style.borderTop="5px solid white";
var orderList=document.getElementsByTagName("li");
orderList[0].style.color="red";
orderList[1].style.color="white";
orderList[2].style.color="red";
orderList[3].style.color="white";
orderList[4].style.color="red";
orderList[4].innerHTML="Gaming";

var inputType=document.getElementById("footer");
inputType.style.backgroundColor="red";
var inputType=document.getElementsByTagName("input");
inputType[0].value="Enter your email";
inputType[0].style.color="gray";
inputType[0].style.border="2px solid black";
var newText=document.getElementsByClassName("aman");
newText[0].innerHTML="PUNEET SIR ";
console.log(newText);

*/


/*=================Today Work 12/07/2023=================*/



/*
var newElement=document.querySelector("#nav");
newElement.style.backgroundColor="red";
newElement.style.borderBottom="5px solid black";
var newElement=document.querySelector(".aman");
newElement.innerHTML="PUNEET SIR";
newElement.style.textDecoration="underline";
var newElement=document.querySelector(".computer");
newElement.innerHTML="WEB DEVELOPMENT";
var newElement=document.querySelector("#header");
newElement.style.backgroundColor="green";
newElement.style.borderBottom="5px solid red";
var newElement=document.querySelector(".course");
newElement.style.color="white";
var newElements=document.querySelector("#items").className="box";
var newElement=document.querySelectorAll("li");
newElement[3].style.color="white";
newElement[0].style.color="white";


console.log(newElement);

*/


/*
var newElement=document.querySelector(".aman");
newElement.style.color="black";
var newElement=document.querySelector(".computer");
newElement.style.color="pink";
console.log(newElement);
var newElement
function myFun(){
	newElement=document.getElementById("nav");
	newElement.classList.add("pari");
	newElement.innerHTML="PUNEET SIR";
	newElement.style.padding="20px";
	newElement.style.fontSize="48px";
	newElement.style.fontWeight="bold";
	newElement.style.color="white";
	
	
}
function myClose(){
	newElement=document.getElementById("nav");
	newElement.classList.remove("pari");
	
	
}
*/
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
