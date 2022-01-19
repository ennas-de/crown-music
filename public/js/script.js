let mySong = document.getElementById("mySong");
		let icon   = document.getElementById("icon");
		let command = document.getElementById("command");

		icon.onclick = function() {
			if(mySong.paused) {
				mySong.play();
				icon.src = "images/pause.png";
				command.innerHTML = "Click to pause";
			} else {
				mySong.pause();
				icon.src = "images/play.png";
				command.innerHTML = "Click to play";
			}

		}