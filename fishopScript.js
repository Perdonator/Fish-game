Coins = localStorage.getItem("Coins") || 0;
document.getElementById("coins").textContent = Coins;
function skinChange1() {
	if (Coins > 0 && Coins >= 2) {
		Coins = Coins - 2
	    localStorage.setItem("Coins", Coins);
	    document.getElementById("coins").textContent = Coins;
	    document.getElementById("fishBtn").src = "fishskin.png";
		localStorage.setItem("FishSkin1", true);
	} else {
		alert("Not enough coins!");
	}
	
}
function skinChange2() {
	if (Coins > 0 && Coins >= 8) {
		Coins = Coins - 8
	    localStorage.setItem("Coins", Coins);
	    document.getElementById("coins").textContent = Coins;
	    document.getElementById("fishBtn").src = "fishlord.png";
		localStorage.setItem("FishSkin2", true);
	} else {
		alert("Not enough coins!");
	}
	
}
function bgChange1() {
	if (Coins > 0 && Coins >= 5) {
		Coins = Coins - 5
	    localStorage.setItem("Coins", Coins);
	    document.getElementById("coins").textContent = Coins;
		document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/b9/aa/9a/b9aa9a90f6e7047aa698144179c9e1e6.jpg')";
		localStorage.setItem("FishWallaper1", true);
	} else {
		alert("Not enough coins!");
	}
}
	
