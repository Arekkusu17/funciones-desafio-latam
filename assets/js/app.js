//First Script
//change this function to a function expression.
//function example(a, b, c){
//  return a+b+c
//  }

const example = function (a, b, c) {
  return a + b + c;
};

//Second Script
//change this function to an arrow function
//suma=function(a,b){
//  return a+b
//}

const suma = (a, b) => a + b;

//3.1
const element = document.getElementById("ele1");
element.setAttribute("style", "background-color:#48EE48");
const pintar = function (ele, color) {
  ele.setAttribute("style", "background-color:" + color);
};
element.addEventListener("click", () => pintar(element, "#F9C74F"));

// 4
const chosenColor = document.getElementById("chosenColor");

let changeToColor = {};
document.addEventListener("keydown", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      changeToColor.hex = "#F3722C";
      changeToColor.name = "Tango";
      break;
    case "s":
      changeToColor.hex = "#277DA1";
      changeToColor.name = "Jellybean";
      break;
    case "d":
      changeToColor.hex = "#4D908E";
      changeToColor.name = "Malachite";
      break;
  }
  chosenColor.textContent = changeToColor.name;
  return changeToColor;
});

//FIRST VERSION
// const firstSquare = document.getElementById("firstSquare");
// const secondSquare = document.getElementById("secondSquare");
// const thirdSquare = document.getElementById("thirdSquare");
// const fourthSquare = document.getElementById("fourthSquare");

// firstSquare.addEventListener("click", () => {
//   firstSquare.setAttribute("style", "background-color: " + changeToColor);
// });
// secondSquare.addEventListener("click", () => {
//   secondSquare.setAttribute("style", "background-color: " + changeToColor);
// });
// thirdSquare.addEventListener("click", () => {
//   thirdSquare.setAttribute("style", "background-color: " + changeToColor);
// });
// fourthSquare.addEventListener("click", () => {
//   fourthSquare.setAttribute("style", "background-color: " + changeToColor);
// });

// document.onclick = (e) => {
//   console.log(e.target.id);
// };

const divSection = document.getElementById("divContainer");

divSection.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    const divAffected = e.target;
    divAffected.setAttribute("style", "background-color: " + changeToColor.hex);
  }
});
