// Variables for Mad-Libs
var madLibsJSON;  // Holds the list of instruments
var madLibsText;  // What is actually displayed
var answers = []; // Used to interchange instruments

// Ensures that the JSON File will fully load before it is called
function preload() {
	madLibsJSON = loadJSON("instruments.json");
}

function setup() {
	// Creates the canvas where the text will be drawn
	createCanvas(1000, 200);

	// Gets 4 instruments from the JSON file and then specifies the text
	answers = getAnswers();
	madLibsText = makeMadLibs();
}

function draw() {
	background(0);

	// Writes the text to the canvas
	fill(255);
	textSize(22);
	text(madLibsText, 20, 40);
}

// Selects 4 instruments from the JSON file
function getAnswers() {
	var answer1 = random(madLibsJSON.instruments);
	var answer2 = random(madLibsJSON.instruments);
	var answer3 = random(madLibsJSON.instruments);
	var answer4 = random(madLibsJSON.instruments);
	
	var temp_list = [answer1, answer2, answer3, answer4];

	return temp_list;
}

// Finalizes the text
function makeMadLibs() {
	var temp_opening = "Once upon a time, there was a school band that was really bad. \n";
	var temp_exposition_1 = "Brian played the " + answers[0] + " and didn't have a clue how to use it. \n";
	var temp_exposition_2 = "Joseph sucked at playing the " + answers[1] + " so badly, he scared off strangers. \n";
	var temp_exposition_3 = "Mohammed was a bit tone deaf, so it didn't help him play the " + answers[2] + ". \n";
	var temp_exposition_4 = "Finally, Lee should probably give up on his dreams of being a professional " + answers[3] + " player.";

	var final_text = temp_opening + temp_exposition_1 + temp_exposition_2 + temp_exposition_3 + temp_exposition_4;
	return final_text;
}
