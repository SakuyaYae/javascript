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
   var distanse;
   var unit = ["steg", "fot","tum"];
   var conv = [90, 30, 48, 2.54];


   length = Number(input1Element.value);
   width = Number(input1Element.value);

   area = length * width;

    resultElement.innerHTML += "<p> arean är: " + area + "m<sup>2</sup></p>\n";

    area = (3.14159 * length * width) / 4;
    resultElement.innerHTML += "<p> arean är: " + area + "m<sup>2</sup></p>\n";

    resultElement.innerHTML += "<p> längden: " + length + " meter blir:</p>\n";
    distanse = length / conv[0] * 100;

    resultElement.innerHTML += "<p>" + distanse + length + unit[0] + "</p>\n";
    distanse = length / conv[1] * 100;

    resultElement.innerHTML += "<p>" + distanse + length + unit[1] + "</p>\n";
    distanse = length / conv[2] * 100;

    resultElement.innerHTML += "<p>" + distanse + length + unit[2] + "</p>\n";
    
}

