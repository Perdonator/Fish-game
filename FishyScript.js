let score = localStorage.getItem("clickerScore") || 0;
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
    localStorage.setItem("clickerScore", score);
	document.getElementById("clickBtn").classList.add("clicked");
	setTimeout(() => {
	document.getElementById("clickBtn").classList.remove("clicked");
	}, 1000);
	score++
	updateScore()
	console.log("clicked");
	
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