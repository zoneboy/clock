
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function hourFunct(){
	let myDate = new Date();
	const displayHour = myDate.getHours();
	if (displayHour.toString().length == "1" ){
		var doubleHours= "0" + displayHour + "h";
		hour.innerText = doubleHours;
	} else {
		hour.innerText= displayHour + "h";
	}
}

function minFunct(){
	let myDate = new Date();
	const displayMinutes = myDate.getMinutes();
	if (displayMinutes.toString().length == "1" ){
		var doubleMinutes = "0" + displayMinutes + "m";
		minutes.innerText = doubleMinutes;
	} else {
		minutes.innerText= displayMinutes + "m";
	}
}
function secFunct(){
	let myDate = new Date();
	const displaySeconds = myDate.getSeconds();
	if (displaySeconds.toString().length == "1"){
		var doubleSeconds = "0" + displaySeconds + "s";
		seconds.innerText = doubleSeconds;
	} else {
		seconds.innerText= displaySeconds + "s";
	}
} 

function time(){
	secFunct();
	minFunct();
	hourFunct();
}

setInterval(time, 1000)