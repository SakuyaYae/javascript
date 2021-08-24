var input1Element, input2Element, resultElement; 

function init(){
    input1Element = document.getElementById("input1");
    input2Element = document.getElementById("input2");
    resultElement = document.getElementById("result");
    document.getElementById("runBtn").onclick = doCalculations;
}
window.onload = init;

function doCalculations(){
   var length;
   var width;
   var area;

   length = Number(input1Element.value);
   width = Number(input1Element.value);

   area = length * width;

    resultElement.innerHTML += "<p> arean är: " + area + "m<sup>2</sup></p>\n";

    area = (3.14159 * length * width) / 4;
    resultElement.innerHTML += "<p> arean är: " + area + "m<sup>2</sup></p>\n";
}