// author: SakuyaYae https://github.com/SakuyaYae

var min; // min value for sakura_sum_min_max()
var max; // max value for sakura_sum_min_max()
var numbers; // argument for sakura_calc_squere()
var text;



function init() {
    inputElem = [];
    inputElem[0] = document.getElementById("max")
	inputElem[1] = document.getElementById("min")
    inputElem[2] = document.getElementById("number")
    inputElem[3] = document.getElementById("text")

    document.getElementById("btn_min").onclick = sakura_min;
    document.getElementById("btn_max").onclick = sakura_max;
    document.getElementById("btn_numbers").onclick = sakura_numbers;
    document.getElementById("btn_text").onclick = sakura_text_string;
    document.getElementById("btn_sakura").onclick = sakura_main_func;


} // End init
window.onload = init;

function sakura_max(){
    max = Number(inputElem[0].value);
    return max;
}

function sakura_min(){
    min = Number(inputElem[1].value);
    return min;
}

function sakura_numbers(){
    numbers = Number(inputElem[2].value);
    return numbers;
}
function sakura_text_string(){
  text = String(inputElem[3])
  return text;
}


function sakura_sum_min_max(min, max){
    var sum = 0;
    for(i = min; i <= max; i++){
    sum += i;
    }
    return sum;
}

function sakura_calc_squere(numbers){
    var squere = numbers * numbers;
    return squere;
}

function sakura_calc_squere_min_max(min, max){
    var range_squere = 0;
    var sum = 0;
    for(i = min; i <= max; i++){
    sum += i;
    range_squere += sum ^ 2
    }
    return range_squere;
}

function sakura_check_string(text){
    var check;
    var text_size;
    var text_divide;

    text_divide = text_size % 2;

    if(text_divide == 0){

    }

    if(text_divide == 1){

    }

    if(check == "1"){
        console.info("true")
        return true;
    }
    if(check == "0"){
        console.info("false")
        return false;
    }
    else{
        alert("Error")
        console.info("Error")
        return;
    }
}

function sakura_main_func(){
    max = sakura_max()
    min = sakura_min()
    numbers = sakura_numbers()

    var sakura_squere = sakura_calc_squere(numbers);
    var sakura_squere_min_max = sakura_calc_squere_min_max(min, max);
    var sakura_sum = sakura_sum_min_max(min, max);

    console.info("squere is: ",  sakura_squere);
    console.info("squere of sum is: ",  sakura_squere_min_max);
    console.info("sum is: ",  sakura_sum);
}
