let score = localStorage.getItem("clickerScore") || 0;
let clickGrader = localStorage.getItem("ClickGrade") || 1;
let pay = localStorage.getItem("Pay") || 100;
var isSound = "true";
// Update score display
function noSound() {
	isSound = "false";
}
function backSound() {
	isSound = "true";
}
function updateScore() {
    document.getElementById("score").textContent = score;
}
// Function to handle button click
function handleClick() {
	if (document.getElementById("clickBtn").classList.contains("clicked")) return;
    localStorage.setItem("clickerScore", score);
	document.getElementById("clickBtn").classList.add("clicked");
	setTimeout(() => {
	document.getElementById("clickBtn").classList.remove("clicked");
	}, 200);
	score = parseInt(score) + 1 * parseInt(clickGrader);
	updateScore()
	document.getElementById("gradeCounter").innerHTML = clickGrader;
	document.getElementById("payCounter").innerHTML = parseInt(pay);
	console.log("clicked");
	
}
function ClickGrader() {
	localStorage.setItem("ClickGrade", clickGrader);
	localStorage.setItem("Pay", pay);
	if (score > 0 && pay <= score) {
		clickGrader++;
		score = score - pay;
		localStorage.setItem("clickerScore", score - pay);
		pay = parseInt(pay * 1.3);
		updateScore();
		console.log(clickGrader);
	} else {
		alert("Not enough score!")
	}
}
// Add event listener to the button
document.getElementById("clickBtn").addEventListener("click", function() {
    var audio = new Audio("Fishy.mp3");
	if (isSound === "true") {
		audio.play();
	}
	handleClick()

});
updateScore();