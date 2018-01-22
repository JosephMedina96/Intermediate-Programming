var mode;   // A state variable that will be used to determine the contents of the webpage.
var player; // An element variable that will be used to generate a Youtube video player.

// Generates a Youtube video player asynchronously
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '315',
		width: '560',
		videoId: 'RM5hQ3Qtf-8'
	})
}

// Cues a Youtube video with the given ID
function loadNewVideo(id) {
	player.cueVideoById(id);
}

// Changes the contents of the picture and video to dogs				
function dogMode() {
	document.getElementById("picture").src = "https://www.what-dog.net/Images/faces2/scroll0015.jpg";
	loadNewVideo("swmuqGWgZCc")
	mode = true;
}

// Changes the contents of the picture and video to cats
function catMode() {
	document.getElementById("picture").src = "https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg";
	loadNewVideo("RM5hQ3Qtf-8")
	mode = false;
}

// Used to switch the contents of the webpage
function switchMode() {
	if (mode) {
		catMode();
	} else {
		dogMode();
	}
}