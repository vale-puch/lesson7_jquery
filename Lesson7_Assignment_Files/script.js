/*

Program Name: Recipe Application
Author: Valeria Puchaicela
Date: November 14, 2016
Filename: script.js

*/

//displays the next element after the current target 

function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
    
}//end of display

//attatch event listener to h3 elements to invoke display function when clicked
$("h3").click(display);
