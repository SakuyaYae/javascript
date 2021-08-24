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
   var area_inc;
   var area_tri;
   var distanse;
   var unit = ["steg", "fot","tum"];
   var conv = [90, 30.48, 2.54];


   length = Number(input1Element.value);
   width = Number(input1Element.value);

   area = length * width;
   area_inc = (length * 1.5) * (width + 3);
   area_tri = (length * width) / 2;

    resultElement.innerHTML += "<p> rektangle arean är: " + area + "m<sup>2</sup></p>\n";

    area = (3.14159 * length * width) / 4;
    resultElement.innerHTML += "<p> eleps arean är: " + area + "m<sup>2</sup></p>\n";

    resultElement.innerHTML += "<p> rektangle arean är nu: " + area_inc + "m<sup>2</sup></p>\n";

    resultElement.innerHTML += "<p> längden: " + length + " meter blir:</p>\n";
    distanse = length / conv[0] * 100;

    resultElement.innerHTML += "<p>" + distanse + length + unit[0] + "</p>\n";
    distanse = length / conv[1] * 100;

    resultElement.innerHTML += "<p>" + distanse + length + unit[1] + "</p>\n";
    distanse = length / conv[2] * 100;

    resultElement.innerHTML += "<p>" + distanse + length + unit[2] + "</p>\n";

    distanse = area_tri / conv[1] * 100;

    resultElement.innerHTML += "<p> trianelns area är: " + distanse +  unit[1] + "<sup>2</sup></p>\n";
    
}

