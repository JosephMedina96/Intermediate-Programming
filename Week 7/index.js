// The horrible, awful, not very nice...
//
//            TWITTER BOT
//
//    (Please have mercy on my soul)

// Loads up the twit node-module
const Twit = require('twit');

// Loads up our configuration file
const config = require('./config.json');

// Sets up some data for tweets
const intros = [
	"I'm not a big fan of ",
	"I'd really like to forget about ",
	"I hurt my hands from hitting the wall in rage because of ",
	"Stay alert, I hear a ",
	"I shouldn't have gone to dinner with ",
	"Please, spare me another group date with ",
	"I'm feeling nauseous. Why? ",
	"I'm offended by ",
	"Still not a fan of ",
	"Reason number one why I dislike ",
	"Reason number two why I dislike ",
	"Reason number three why I dislike ",
	"Nobody should care about "
];
const subjects = [
	"Mickey Mouse",
	"John Snow",
	"Gandolf the Gray",
	"Luke Skywalker",
	"Monty Python",
	"Rocky and Bullwinkle",
	"Bugs Bunny",
	"Steven Universe",
	"Teemo",
	"Spongebob Squarepants",
	"Captain Picard",
	"Flapjack",
	"Murdoc and 2D",
	"Quetzalcoatl",
	"Scooby Doo",
	"Hansel and Gretel",
	"McCree",
	"Ben Tennyson",
	"Ed, Edd, and Eddy",
	"Star Butterfly",
	"Dipper Pines",
	"Winnie the Pooh",
	"Phillip J Fry",
	"Stan Marsh",
	"Bear in the Big Blue House",
	"Miss Frizzle",
	"Scott Pilgrim",
	"Captain Underpants",
	"Doctor Spock",
	"Curious George",
	"Danny Fenton",
	"Wakko, Yakko, and Dot",
	"Roger Rabbit",
	"Jay Gatsby",
	"Daisy Fay Buchanan",
	"Hamlet",
	"Fortinbras",
	"Samus Aran",
	"Princess Zelda",
	"Princess Unikitty",
	"Chuck Greene",
	"Frank West",
	"Harry Mason",
	"Mario",
	"Ash Ketchum",
	"Professor Oak"
];
const reasons = [
	"They smell funny.",
	"They believe in things that I don't.",
	"They took the last cookie from the cookie jar.",
	"Because reasons.",
	"All they ever talk about is smooth jazz.",
	"My brother told me they are bad.",
	"Incidentally, does anybody have a spare kidney? No? Okay yeah that's fine.",
	"How could anyone be a fan of them?",
	"My programmer has an irrational hatred of them.",
	"They are silly.",
	"They owe me $50.",
	"I hope that nobody gets me their merchandise for my birthday (HINT HINT).",
	"They beat me in a pokemon battle.",
	"They would not stop talking about their daughter.",
	"They've deluded themselves into believing they are a princess.",
	"They told me the force isn't with me.",
	"They wanted me to drink some poisoned wine.",
	"I just don't understand them.",
	"I don't trust their driving skills.",
	"'Only you can prevent forest fires' they told me. That's WAY too much pressure!",
	"They dumped me :(.",
	"They told me to get on their 'Magic school bus'.",
	"It's high noon.",
	"They wear socks with sandals.",
	"They put pineapple on their pizza.",
	"I tried to get them to leave quietly but they couldn't take the hint.",
	"It's way too awkward to be around them.",
	"They only ever talk about their dead father.",
	"They tried to scam me."
];
const hashtags = [
	"#YOLO",
	"#SoapCake",
	"#TheFirstAmendment",
	"#ImOnFire",
	"#SickBurn",
	"#ButSeriouslyTho",
	"#RealFakeNews",
	"#LifeIsPain",
	"#Hashtag",
	"#Quetzalcoatl",
	"#NotAmused",
	"#ShowerThoughts",
	"#SendHelp",
	"#Rebel4Life",
	"#ThisIsntAJoke",
	"#SugarInsanity",
	"#BoatyMcBoatface",
	"#DustInTheWind",
	"#Depressing"
];

// Sets up a twitter object
let Twitter = new Twit(config);

// Starts up the twitter object
tweeter();

// Sets the interval between tweets
setInterval(tweeter, 60*5*1000);

// Gets a random element from an array
function getRandArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function tweeter() {
	let intro = getRandArrayValue(intros);
	let subject = getRandArrayValue(subjects);
	let reason = getRandArrayValue(reasons);
	let hashtag = getRandArrayValue(hashtags);

	let tweet = intro + subject + ". " + reason + " " + hashtag;

	Twitter.post('statuses/update', {status: tweet}, tweeted);

	// Callback for when the tweet is sent
	function tweeted(err, data, response) {
		if(err) {
			console.log(err);
		} else {
			console.log("Success: " + data.text);
		}
	};
}