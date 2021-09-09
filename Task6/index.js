// author: SakuyaYae https://github.com/SakuyaYae

var min; // min value for sakura_sum_min_max()
var max; // max value for sakura_sum_min_max()
var numbers; // argument for sakura_calc_squere()
var text; // argument for polydrom checking function sakura_check_string()
var tracker = 0; // keeps track what backrund to chance to
var sakura_elem;

function init() {
    input_elem = [];
    input_elem[0] = document.getElementById("max")
	input_elem[1] = document.getElementById("min")
    input_elem[2] = document.getElementById("number")
    input_elem[3] = document.getElementById("text")
    sakura_elem = document.getElementById("sakura")

    document.getElementById("btn_min").onclick = sakura_min;
    document.getElementById("btn_max").onclick = sakura_max;
    document.getElementById("btn_numbers").onclick = sakura_numbers;
    document.getElementById("btn_text").onclick = sakura_text_string;
    document.getElementById("btn_sakura").onclick = sakura_main_func;
    //document.getElementById("btn_sakuya").onclick = sakura_alter_background;

} // End init
window.onload = init;
// returns the inputed max value
function sakura_max(){
    max = Number(input_elem[0].value);
    return max;
}
// returns the inputed min value
function sakura_min(){
    min = Number(input_elem[1].value);
    return min;
}
// returns the inputed value for square number
function sakura_numbers(){
    numbers = Number(input_elem[2].value);
    return numbers;
}
// returns the inputed text string
function sakura_text_string(){
  text = String(input_elem[3].value)
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
// function for checking the inputed text string
function sakura_check_string(text){
    var check = 0;
    var text_size;
    var string_size;
    var text_mid;

    text = text.replaceAll(".", "")
    text = text.replaceAll("/", "")
    text = text.replaceAll(",", "")

    text_size = text.length;
    string_size = text_size;
    text_mid = (text_size / 2);
    text_mid = parseInt(text_mid);

    if((text_size % 2) == 1){
      text = text.replace(text[text_mid], "")
      text_size = text.length;
      string_size = text_size;
    }

        for(i = 0; i < (string_size / 2); i++){
            if(text[i] == text[text_size - 1]){
                check += 1;
                text_size -= 1;
            }
        }

        if(check == (string_size / 2)){
            check = 1;
        }
        else{
            check = 0;
        }

    if(check == "1"){
        return true;
    }

    if(check == "0"){
        return false;
    }
}

function sakura_alter_background(){
  var changer;


  if(tracker == 0){

    sakura_elem.style.color = "ff00ff"
    tracker = 1;
  }

  if(tracker == 1){


    tracker = 0;
  }

}



function sakura_main_func(){
    var sakura_squere = sakura_calc_squere(numbers);
    var sakura_squere_min_max = sakura_calc_squere_min_max(min, max);
    var sakura_sum = sakura_sum_min_max(min, max);
    var sakura_text = sakura_check_string(text)

    console.info("squere is: ",  sakura_squere);
    console.info("squere of sum is: ",  sakura_squere_min_max);
    console.info("sum is: ",  sakura_sum);
    console.info("is polyndrom ", sakura_text)
}
