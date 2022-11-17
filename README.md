# Functions Challenge - Desafio Latam

The meaning of this challenge is to validate JS knowledge by modifying and transforming functions and code into the ones required.

Site of deploy: https://arekkusu17.github.io/funciones-desafio-latam/



## Work Done
- Write the html structure and the script.
It was easier to write first the script and modify the DOM as needed for every task, I isolated my work by working on only a task each time, this was very helpful to avoid mistakes in the conditionals statements. The styles were made later    

-The firs requiriment was changin the next declarated function in to a Expression Function
```
function example(a, b, c){
return a+b+c
}
```
After the changes
```
const example = function (a, b, c) {
  return a + b + c;
};
```
- Change the function to an Arrow Function
```
suma = function(a, b){
return a + b
}

```
After
```
const suma = (a, b) => a + b;

```
- Add Event Listeneres.
The first task was to modify an element by using a function. This function needed to pass a parameter for the element undergoing the change so it didnt had to repeat the selection of said element.
 Before
 ```
function pintar(){
ele = document.getElementById("ele1")
ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
 ```
 Version 1
  ```
function pintar(element) {
   element.style.backgroundColor = "yellow";
 }
 const ele = document.getElementById("ele1");
 ele.addEventListener("click", () => pintar(ele));
``` 
Final Version

Needed to add one parameter more, so the color could be chosen when calling the function. As it is seen in the last line.
  ```
const element = document.getElementById("ele1");
element.setAttribute("style", "background-color:#48EE48");
const pintar = function (ele, color) {
  ele.setAttribute("style", "background-color:" + color);
};
element.addEventListener("click", () => pintar(element, "#F9C74F"))
 ```
  
The last task was adding an event listener that stored in a global variable a color depending on the key of the keyboard pressed.
Then that color would change the background color of the div that it's clicked (another EventListener).

At first I thought  about adding an EventListener for every div, but that would have been repetitive and not useful. 
So i used the target and tagName property to capture the div that i clicked on and then change the color. 

- Style the whole page.
- Remove unused code and do some cleaning.
- Add the Readme.
