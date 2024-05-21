let score = localStorage.getItem("clickerScore") || 0;
var isSound = "true";
let clickGrader = localStorage.getItem("ClickGrade") || 1;
let Coins = localStorage.getItem("Coins") || 0;
let pay = localStorage.getItem("Pay") || 100;


//Amgous commands frfr
localStorage.setItem("clickerScore", score);
localStorage.setItem("ClickGrade", clickGrader);
localStorage.setItem("Pay", pay);
localStorage.setItem("Coins", Coins);
document.getElementById("changelog").style.visibility = "hidden";


// Update score display
function noSound() {
	isSound = "false";
}
function backSound() {
	isSound = "true";
}
function updateScore() {
	document.getElementById("score").textContent = score;
	console.log("Score = ", score);
}
function update() {
		document.getElementById("gradeCounter").textContent = clickGrader;
		document.getElementById("payCounter").textContent = pay;
		document.getElementById("coins").textContent = Coins;
}
// Function to handle button click
function handleClick() {
	if (document.getElementById("clickBtn").classList.contains("clicked")) return;
	document.getElementById("clickBtn").classList.add("clicked");
	setTimeout(() => {
		document.getElementById("clickBtn").classList.remove("clicked");
	}, 200);
	score = parseInt(score) + 1 * parseInt(clickGrader);
	updateScore()
	localStorage.setItem("clickerScore", score);
	console.log("clicked");

}
function ClickGrader() {
	if (score > 0 && pay <= score) {
		clickGrader++;
		score = score - pay;
		pay = parseInt(pay * 1.2);
		localStorage.setItem("ClickGrade", clickGrader);
		localStorage.setItem("Pay", pay);
		updateScore();
		console.log(clickGrader);
		document.getElementById("gradeCounter").innerHTML = clickGrader;
		document.getElementById("payCounter").innerHTML = parseInt(pay);
	} else {
		alert("Not enough score!")
	}
}
function changelogToggle() {
	document.getElementById("changelog").style.visibility = "visible";
}
function fishCoins() {
	if (score > 0 && 1000 <= score) {
		score = score - 1000;
		updateScore();
		Coins++;
		localStorage.setItem("Coins", Coins);
		document.getElementById("coins").innerHTML = Coins;
	} else {
		alert("Not enough score!")
	}
}
function reset() {
	if (confirm('Are you sure you want to reset all your progress?')) {
		console.log('Reset.');
		pay = 100;
		score = 0;
		clickGrader = 1;
		updateScore();
		update();
		localStorage.setItem("clickerScore", score);
		localStorage.setItem("ClickGrade", clickGrader);
		localStorage.setItem("Pay", pay);
	} else {
		console.log('Reset Canceled');
	}
}
// Add event listener to the button
document.getElementById("clickBtn").addEventListener("click", function () {
	var audio = new Audio("Fishy.mp3");
	if (isSound === "true") {
		audio.play();
	}
	handleClick();
});
updateScore();
update();