
function revealSecrets() {
	  let SecretFound = localStorage.getItem("SecretFound") || 0;
      var code = document.getElementById("codeInput").value.toLowerCase();
      if (code === "fish") {
        var video = document.getElementById("fishVideo");
        video.style.display = "block"; // Show the video
        video.play(); // Play the video
        setTimeout(function() {
          video.style.display = "none"; // Hide the video after it finishes
        }, video.duration * 1000); // Hide the video after it finishes playing
	  } else if (code === "amgous"){
		  let score = localStorage.getItem("clickerScore") || 0;
		  localStorage.setItem("clickerScore", score + 1000);
		  console.log("code activated!")
	  } else {
        alert("Incorrect code. Try again.");
      }
    }