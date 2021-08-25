// JavaScript

// Globala variabler
var msgElem; // ...
var inputElem; // stores inputs in a List
var fruitNames; // a list that stores fruitnames
var fruitNr // stores the number of chosen fruit

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    inputElem = [];
    inputElem[1] = document.getElementById("input1")
	inputElem[2] = document.getElementById("input2")
    inputElem[3] = document.getElementById("input3")

    msgElem = document.getElementById("message");

    fruitNames = ["Ingen frukt", "Äppel", "bannan", "citron", "apelsin", "päron"];
    fruitNr = 0;

    document.getElementById("btn1").onclick = showFruit;
    document.getElementById("btn2").onclick = checkName;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad


function showFruit() {
// The function checks the imput of the first text feld and alters the img on the webbpage if the input was a nummber that 
// coresponds to a img of a fruit. if the input is a wrong number or if its NaN it tells the user
    var nr; // takes the input from a varable an converts it int a number
    var fruitUrl; // stores a reffrens that is used to alter the img on the webbpage

    nr = inputElem[1];
    nr = Number(inputElem[1].value)
    fruitUrl = document.getElementById("fruitImg");

    nr = parseInt(nr);
    // if statment that chechs if nr is in range 1-5
    if(nr < 1 || nr > 5){
        msgElem.innerHTML = "talet är inte mellan 1-5"
        return;
    }
    // if statment that chechs if nr is a number
    if(isNaN(nr)){
        msgElem.innerHTML = "inmatningen är inte ett tal"
        return; 
    }

    // if else if else code that checks specificly for the numbers that are used to display fruits
    if(nr == 1){
        fruitUrl.src = "./pics/fruit1.jpg";

    }
    else if(nr == 2){
        fruitUrl.src = "./pics/fruit2.jpg";

    }
    else if(nr == 3){
        fruitUrl.src = "./pics/fruit3.jpg";

    }
    else if(nr == 4){
        fruitUrl.src = "./pics/fruit4.jpg";

    }
    else if(nr == 5){
        fruitUrl.src = "./pics/fruit5.jpg";

    }
    else{
        alert("Oops somting went worng!")
    }
    fruitNr = nr;
}

function checkName(){
    var name; // stores input name
   
    if(fruitNr == 0){
        msgElem.innerHTML = "Ingen frukt är vald" 
        return;
    }

    name = inputElem[2];
    name = String(inputElem[2].value);
    
    if(name == fruitNames[fruitNr]){
        msgElem.innerHTML = "Rätt frukt"
    }
    else{
        msgElem.innerHTML = "fel frukt" 
    }


}