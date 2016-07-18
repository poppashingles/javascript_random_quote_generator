// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variable declarations
var html = '';
var randomNumber;
var randomQuote;
var quoteToPrint;

//array of objects to hold quote information
var quotes = [
    { quote: "Nuts, I'm freakin' all about sugar... but I'm even more all about feeding hobos!", source: "Finn", episode: "Freak City", year: 2010 },    
    { quote: "We can rule them, like gods...(deep voice) angry gods.", source: "Jake", episode: "Susan Strong", year: 2011 }, 
    { quote: "Oh, oh, don't squeeze me; I'll fart! [farts]", source: "Starchy", episode: "Slumber Party Panic", year: 2010 }, 
    { quote: "Nuh-Nuh-Nuh-Nuh-Nasty! Nasty jazz!", source: "Prismo", episode: "Finn the Human", year: 2012 }, 
    { quote: "I've seen some stuff that would really make you say 'like what'?", source: "Marceline", episode: "Evicted!", year: 2010 }, 
    { quote: "Vampires can't beat ghosts. It's like a rock-paper-scissors thing.", source: "Marceline", episode: "Heat Signature", year: 2011 }, 
    { quote: "Hold tight your buns, if buns you do hold dear. For time has come to wake and run and not give way to fear!", source: "Lemongrab", episode: "Mystery Dungeon", year: 2013 }, 
    { quote: "We've have it all!", source: "Lemongrab", episode: "Lemonhope", year: 2014 }, 
    { quote: "Finn, sometimes you want someone and you want to kiss them and be with them, but you can't because responsibility demands sacrifice.", source: "Princess Bubblegum", episode: "Burning Low", year: 2012 }, 
    { quote: "That tea party was crummier than a big ol' biscuit.", source: "Tree Trunks", episode: "Tree Trunks", year: 2010 }
];

//function to choose a random quote from the array
function getRandomQuote (  ) {
    randomNumber = Math.floor( Math.random() * 10 ) + 1;
    randomQuote = quotes[randomNumber];
    return randomQuote;
}

//function to build the html and print the quote to the screen
function printQuote (  ) {
    quoteToPrint = getRandomQuote();
    html += '<p class = "quote">' + quoteToPrint.quote + '</p>';
    html += '<p class = "source">' + quoteToPrint.source + '</p>';
    html += '<span class = "citation">' + quoteToPrint.episode + '</span>';
    html += '<span class = "year">' + quoteToPrint.year + '</span>';
    return html;
}

html = printQuote();

document.getElementById('quote-box').innerHTML = html;