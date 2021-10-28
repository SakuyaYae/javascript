// Globala konstanter och variabler
var boardElem;			// Referens till div-element för "spelplanen"
const carImgs = ["car_up.png","car_right.png","car_down.png","car_left.png"];
						// Array med filnamn för bilderna med bilen
var carDir = 1;			// Riktning för bilen, index till carImgs
var carElem;			// Referens till img-element för bilen
const xStep = 5;		// Antal pixlar som bilen ska förflytta sig i x-led
const yStep = 5;		// eller y-led i varje steg
const timerStep = 20;	// Tid i ms mellan varje steg i förflyttningen
var timerRef = null;	// Referens till timern för bilens förflyttning
var startBtn;			// Referens till startknappen
var stopBtn;			// Referens till stoppknappen
/* === Tillägg i uppgiften === */
var boar_count; // controls UI element for number of boars
var boar_kills; // controls UI element for number of boars hit
var count_boar_kills;
const boar = "pig.png" // boar img file name
const kill = "smack.png" // hit img file name
var boar_show_timer; // a timer ?
var rng_gen; // uses random to get random numbers
var hit_elem; // refrens to hit element
var boar_elem; // refrens to baor element
var count_shown_boar; // number of boars shown
var boar_pos_x
var boar_pos_y
var car_pos_x
var car_pos_y
// ------------------------------
// Initiera globala variabler och koppla funktion till knapp
function init() {
	// Referenser till element i gränssnittet
		boardElem = document.getElementById("board");
		carElem = document.getElementById("car");
		startBtn = document.getElementById("startBtn");
		stopBtn = document.getElementById("stopBtn");
	// Lägg på händelsehanterare
		document.addEventListener("keydown",checkKey);
			// Känna av om användaren trycker på tangenter för att styra bilen
		startBtn.addEventListener("click",startGame);
		stopBtn.addEventListener("click",stopGame);
	// Aktivera/inaktivera knappar
		startBtn.disabled = false;
		stopBtn.disabled = true;
	/* === Tillägg i uppgiften === */
	boar_count = document.getElementById("pigNr");
	boar_kills = document.getElementById("hitCounter");
	boar_elem = document.getElementById("pig");
} // End init
window.addEventListener("load",init);
// ------------------------------
// Kontrollera tangenter och styr bilen
function checkKey(e) {
	let k = e.keyCode;
	switch (k) {
		case 37: // Pil vänster
		case 90: // Z
			carDir--; // Bilens riktning 90 grader åt vänster
			if (carDir < 0) carDir = 3;
			carElem.src = "img/" + carImgs[carDir];
			break;
		case 39:  // Pil höger
		case 173: // -
			carDir++; // Bilens riktning 90 grader åt höger
			if (carDir > 3) carDir = 0;
			carElem.src = "img/" + carImgs[carDir];
			break;
	}
} // End checkKey
// ------------------------------
// Initiera spelet och starta bilens rörelse
function startGame() {
	startBtn.disabled = true;
	stopBtn.disabled = false;
	carElem.style.left = "0px";
	carElem.style.top = "0px";
	carDir = 1;
	carElem.src = "img/" + carImgs[carDir];
	boar_elem.src = "img/" + boar;
	boar_elem.style.left = "0px"
	boar_elem.style.top = "0px"
	moveCar();
	/* === Tillägg i uppgiften === */

} // End startGame
// ------------------------------
// Stoppa spelet
function stopGame() {
	if (timerRef != null) clearTimeout(timerRef);
	startBtn.disabled = false;
	stopBtn.disabled = true;
	/* === Tillägg i uppgiften === */
	boar_count.innerHTML = "0";
	boar_kills.innerHTML = "0";
	count_shown_boar = 0;
	count_boar_kills = 0;
} // End stopGame
// ------------------------------
// Flytta bilen ett steg framåt i bilens riktning
function moveCar() {
	let xLimit = boardElem.offsetWidth - carElem.offsetWidth;
	let yLimit = boardElem.offsetHeight - carElem.offsetHeight;
	let x = parseInt(carElem.style.left);	// x-koordinat (left) för bilen
	let y = parseInt(carElem.style.top);	// y-koordinat (top) för bilen
	switch (carDir) {
		case 0: // Uppåt
			y -= yStep;
			if (y < 0) y = 0;
			break;
		case 1: // Höger
			x += xStep;
			if (x > xLimit) x = xLimit;
			break;
		case 2: // Nedåt
			y += yStep;
			if (y > yLimit) y = yLimit;
			break;
		case 3: // Vänster
			x -= xStep;
			if (x < 0) x = 0;
			break;
	}
	carElem.style.left = x + "px";
	carElem.style.top = y + "px";
	timerRef = setTimeout(moveCar,timerStep);
	/* === Tillägg i uppgiften === */
	sakura_boar_location()
	sakura_check_hit(x, y)
} // End moveCar
// ------------------------------

/* === Tillägg av nya funktioner i uppgiften === */
function sakura_check_hit(x, y){
	car_pos_x = x;
	car_pos_y = y;
	if(boar_pos_x == x && boar_pos_y == y){
		count_boar_kills += 1;
	}
	boar_kills.innerHTML = '${count_boar_kills}';
}


function sakura_boar_location(){
	boar_pos_x = parseInt(boar_elem.style.left);
	boar_pos_y = parseInt(boar_elem.style.top);
	rng_gen = Math.round(Math.random() * 1000 + 1);
	console.log("rng seed ",rng_gen);

	boar_pos_x += rng_gen;
	boar_pos_y += rng_gen;

	sakura_show_boar(boar_pos_x, boar_pos_y);

}

function sakura_show_boar(boar_pos_x, boar_pos_y){
	boar_show_timer = Math.round(Math.random() * 10 + 1);
	for(i = 0; i < boar_show_timer; i++){
		boar_elem.style.left = boar_pos_x + "px";
		boar_elem.style.top = boar_pos_y + "px";
		count_shown_boar += 1;
	}
}
