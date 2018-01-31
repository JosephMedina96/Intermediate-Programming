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

// Mess with people who have OCD
// Code borrowed from https://codebox.net/pages/monkeyshine-javascript-practical-jokes
function slightlyEvil() {
	['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix) {
		Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(el) {
			el.style[prefix + 'transform'] = 'rotate(' + (Math.floor(Math.random() * 100) - 1) + 'deg)';
		});
	})
}

// Randomly pick a title message
function titleTrolling() {
	var titles = [
		"Why did you do that?",
		"Please stop.",
		"You are hurting innocent lives.",
		"My soul hurts.",
		"You are literally the worst person.",
		"Don't make me call the cops.",
		"Ugh. You're hurting me.",
		"*Insert Insulting Text Here*",
		"Tell me about your horrible childhood.",
		"You are the reason capital punishment exists.",
		"I need to clean my eyes with bleach now."
	];

	var chosenTitle = titles[Math.round(Math.random() * 10)];
	return chosenTitle;
}

// Randomly pick messages
function textTrolling() {
	var text = [
		"picture Here's a",
		"a picture Here's",
		"here's Also, video a",
		"Error: text not found.",
		"Error: video not found.",
		"A E S T H E T I C",
		"Send help",
		"They've got me locked in the basement.",
		"I didn't kill him, I swear!",
		"Error: Jelly roll 404.",
		"I never wanted this life."
	];

	var chosenText = text[Math.round(Math.random() * 10)];
	return chosenText;
}

// Changes the contents of the picture and video to dogs				
function dogMode() {
	document.getElementById("picture").src = "https://www.what-dog.net/Images/faces2/scroll0015.jpg";
	var temp = document.getElementsByName("h1");
	for (i = 0; i < temp.length; i++) {
		temp[i].style.fontFamily = "VT323,monospace";
	}
	loadNewVideo("swmuqGWgZCc")
	mode = true;
}

// Changes the contents of the picture and video to cats
function catMode() {
	document.getElementById("picture").src = "https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg";
	var temp = document.getElementsByName("h1");
	for (i = 0; i < temp.length; i++) {
		temp[i].style.fontFamily = "Indie Flower,cursive";
	}
	loadNewVideo("RM5hQ3Qtf-8")
	mode = false;
}

// Used to switch the contents of the webpage
function switchMode() {
	slightlyEvil();

	if (mode) {
		catMode();
	} else {
		dogMode();
	}

	document.getElementById('why').innerHTML = titleTrolling();
	var temp = document.getElementsByName("h1");
	for (i = 0; i < temp.length; i++) {
		temp[i].innerHTML = textTrolling();
	}
}