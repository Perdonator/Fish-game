let score = localStorage.getItem("a839sja92") || 0;
var isSound = "true";
let clickGrader = localStorage.getItem("ClickGrade") || 1;
let Coins = localStorage.getItem("Coins") || 0;
let pay = localStorage.getItem("Pay") || 100;
let clFlag = "true";
let shopFlag = "true";
let skin1 = localStorage.getItem("FishSkin1") || false;
let skin2 = localStorage.getItem("FishSkin2") || false;


//Amgous commands frfr
localStorage.setItem("a839sja92", score);
localStorage.setItem("ClickGrade", clickGrader);
localStorage.setItem("Pay", pay);
localStorage.setItem("Coins", Coins);
document.getElementById("changelog").style.display = "none";
document.getElementById("fishSkin").style.display = "none";
document.getElementById("shop").style.display = "none";
//Shop commands frfr
if (skin1 === "true") {
	document.getElementById("fishBtn").src = "fishskin.png";
}
if (skin2 === "true") {
	document.getElementById("fishBtn").src = "fishlord.png";
}

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
	localStorage.setItem("a839sja92", score);
	console.log("clicked");

}
function showShop() {
	if (shopFlag === "true") {
		document.getElementById("shop").style.display = "initial";
		document.getElementById("shop").style.display = "flex";
		document.getElementById("shop").style.marginRight = "1000px";
		document.getElementById("shop").style.height = "150px";
		document.getElementById("shop").style.width = "200px";
	    document.getElementById("shopBtn").innerHTML = "Hide Shop!";
		shopFlag = "false";
	} else if (shopFlag === "false") {
		document.getElementById("shop").style.display = "none";
	    document.getElementById("shopBtn").innerHTML = "Show Shop!";
		shopFlag = "true";
	}
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
	if (clFlag === "true") {
		document.getElementById("changelog").style.display = "initial";
	    document.getElementById("clTog").innerHTML = "Hide Changelog!";
		clFlag = "false";
	} else if (clFlag === "false") {
		document.getElementById("changelog").style.display = "none";
	    document.getElementById("clTog").innerHTML = "Show changelog!";
		clFlag = "true";
	}
	
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
		localStorage.setItem("a839sja92", score);
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
