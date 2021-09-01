// author SakuyaYae https://github.com/SakuyaYae

var min; // min value for sakura_sum_min_max()
var max; // max value for sakura_sum_min_max()
var number; // argument for sakura_calc_squere()
var text;


function sakura_sum_min_max(min, max){
    var sum;
    for(i = min; i <= max; i++){
    sum += i;
    }
    return sum;
}

function sakura_calc_squere(number){
    var squere = number ^ 2;
    return squere;
}

function sakura_calc_squere_min_max(min, max){
    var range_squere;
    var sum;
    for(i = min; i <= max; i++){
    sum += i;
    range_squere += sum ^ 2
    }
    return range_squere, sum;
}

function sakura_check_string(text){
    var check;


    if(check == "1"){
        console.info("true")
        return true;
    }
    if(check == "0"){
        console.info("false")
        return false;
    }
    else{
        console.info("Error")
        return;
    }
}