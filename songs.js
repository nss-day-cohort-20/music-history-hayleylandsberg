// Add one song to the beginning and the end of the array.
// Loop over the array, and remove any words or characters that obviously don't belong.
// Find and replace the > character in each item with a - character.
// Add each string to the DOM in index.html in the main content area.
// Example output:

// {Song name} by {Artist} on the album {Album}

// {Song name} by {Artist} on the album {Album}






var songs = [
	{
		title: "I Wanna Dance With Somebody",
		artist: "Whitney Houston",
		album: "Whitney Houston",
		genre: "Pop"
	},
	{
		title: "Legs",
		artist: "ZZTop",
		album: "Eliminator",
		genre: "Classic Rock"
	},
	{
		title: "The Logical Song",
		artist: "Supertramp",
		album: "Breakfast in America",
		genre: "Classic Rock"
	},
	{
		title: "Another Brick in the Wall",
		artist: "Pink Floyd",
		album: "The Wall",
		genre: "Classic Rock"
	},
	{
		title: "Welcome to the Jungle",
		artist: "Guns & Roses",
		album: "Appetite for Destruction",
		genre: "Classic Rock"
	},
	{
		title: "Ironic",
		artist: "Alanis Morisette",
		album: "Jagged Little Pill",
		genre: "Classic Rock"
	},
	{
		title: "When Doves Cry",
		artist: "Prince",
		album: "Purple Rain",
		genre: "Pop"
	}
];

var songElement = document.getElementById("songs");

for (var i = 0; i < songs.length; i++) {
	console.log(songs[i]);
	songElement.innerHTML += `<section><h1>${songs[i].title}</h1><div><ul><li class="border">${songs[i].artist}</li><li class="border">${songs[i].album}</li><li>${songs[i].genre}</li></ul></div>`
};
