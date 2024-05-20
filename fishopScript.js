let coin = localStorage.getItem("Coins") || 1;
function skinChange() {
	coin = coin - 5;
	document.getElementById("fishKing").src = "fishskin.jpg";
	localStorage.setItem("Coins", coin);

}