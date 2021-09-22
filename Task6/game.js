//author SakuyaYae
var counter = 1;
var player_1 = 0;
var player_2 = 0;
var cube_top_left = document.getElementById("sakura_game_pos_1")
var cube_top_mid = document.getElementById("sakura_game_pos_2")
var cube_top_rigth = document.getElementById("sakura_game_pos_3")

var cube_mid_left = document.getElementById("sakura_game_pos_4")
var cube_mid_mid = document.getElementById("sakura_game_pos_5")
var cube_mid_rigth = document.getElementById("sakura_game_pos_6")

var cube_bot_left = document.getElementById("sakura_game_pos_7")
var cube_bot_mid = document.getElementById("sakura_game_pos_8")
var cube_bot_rigth = document.getElementById("sakura_game_pos_9")

function sakura_main(){
    var res = document.getElementById("res")
    var game_winner = "error";


    cube_top_left.onclick = cube_top_left_func;
    cube_top_mid.onclick = cube_top_mid_func;
    cube_top_rigth.onclick =  cube_top_rigth_func;
    cube_mid_left.onclick = cube_mid_left_func;
    cube_mid_mid.onclick = cube_mid_mid_func;
    cube_mid_rigth.onclick =  cube_mid_rigth_func;
    cube_bot_left.onclick = cube_bot_left_func;
    cube_bot_mid.onclick = cube_bot_mid_func;
    cube_bot_rigth.onclick =  cube_bot_rigth_func;

// masive if statment for checking if a player wins or not

    if(counter == 5){
        if(player_1 == 6){
          game_winner = "player 1" ;
        }
        if(player_1 == 12){
            game_winner = "player 1" ;
          }
        if(player_1 == 15){
          game_winner = "player 1" ;
        }            
        if(player_1 == 18){
          game_winner = "player 1" ;
        }
        if(player_1 == 24){
            game_winner = "player 1" ;
        }
    }
    if(counter == 6){
        if(player_2 == 6){
          game_winner = "player 2" ;
        }
        if(player_2 == 12){
            game_winner = "player 2" ;
          }
        if(player_2 == 15){
          game_winner = "player 2" ;
        }            
        if(player_2 == 18){
          game_winner = "player 2" ;
        }
        if(player_2 == 24){
            game_winner = "player 2" ;
        }
    }
    if(counter == 7){
        if(player_1 == 6){
            game_winner = "player 1" ;
        }
        if(player_1 == 12){
            game_winner = "player 1" ;
        }
        if(player_1 == 15){
          game_winner = "player 1" ;
        }            
        if(player_1 == 18){
          game_winner = "player 1" ;
        }
        if(player_1 == 24){
            game_winner = "player 1" ;
        }    
    }
    if(counter == 8){
        if(player_2 == 6){
            game_winner = "player 2" ;
          }
        if(player_2 == 12){
            game_winner = "player 2" ;
        }
        if(player_2 == 15){
            game_winner = "player 2" ;
        }            
        if(player_2 == 18){
            game_winner = "player 2" ;
        }
        if(player_2 == 24){
            game_winner = "player 2" ;
        }
    }
    if(counter == 9){
        game_winner = " none"
    }
    res.innerHTML = "Game over winner is: " + game_winner;
}

// here comes functions for adding ponts to players

function cube_top_left_func(){
    if((counter % 2) == 1){
        player_1 += 1
        cube_top_left.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 1
        cube_top_left.innerHTML = "X"
        counter += 1;
    }

}

function cube_top_mid_func(){
    if((counter % 2) == 1){
        player_1 += 2
        cube_top_mid.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 2
        cube_top_mid.innerHTML = "X"
        counter += 1;
    }

}

function cube_top_rigth_func(){
    if((counter % 2) == 1){
        player_1 += 3
        cube_top_rigth.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 3
        cube_top_rigth.innerHTML = "X"
        counter += 1;
    }

}

function cube_mid_left_func(){
    if((counter % 2) == 1){
        player_1 += 4
        cube_mid_left.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 4
        cube_mid_left.innerHTML = "X"
        counter += 1;
    }

}

function cube_mid_mid_func(){
    if((counter % 2) == 1){
        player_1 += 5
        cube_mid_mid.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 5
        cube_mid_mid.innerHTML = "X"
        counter += 1;
    }

}

function cube_mid_rigth_func(){
    if((counter % 2) == 1){
        player_1 += 6
        cube_mid_rigth.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 6
        cube_mid_rigth.innerHTML = "X"
        counter += 1;
    }
}

function cube_bot_left_func(){
    if((counter % 2) == 1){
        player_1 += 7
        cube_bot_left.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 7
        cube_bot_left.innerHTML = "X"
        counter += 1;
    }
}

function cube_bot_mid_func(){
    if((counter % 2) == 1){
        player_1 += 8
        cube_bot_mid.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 8
        cube_bot_mid.innerHTML = "X"
        counter += 1;
    }

}

function cube_bot_rigth_func(){
    if((counter % 2) == 1){
        player_1 += 9
        cube_bot_rigth.innerHTML = "O"
        counter += 1;
    }
    else{
        player_2 += 9
        cube_bot_rigth.innerHTML = "X"
        counter += 1;
    }

}

window.onload = sakura_main;

    