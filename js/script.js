// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//variable declarations
var html = '';
var randomNumber;
var randomQuote;
var quoteToPrint;
var interval;

//array for storing quotes that have been viewed to stop them repeating until all quotes have been viewed
var viewedQuotes = []; 

//array of objects to hold quote information
var quotes = [
    { quote: "Nuts, I'm freakin' all about sugar... but I'm even more all about feeding hobos!", source: "Finn", season: 1, episode: "Freak City", year: 2010 },    
    { quote: "We can rule them, like gods...(deep voice) angry gods.", source: "Jake", season: 2, episode: "Susan Strong", year: 2011 }, 
    { quote: "Oh, oh, don't squeeze me; I'll fart! [farts]", source: "Starchy", season: 1, episode: "Slumber Party Panic", year: 2010 }, 
    { quote: "Nuh-Nuh-Nuh-Nuh-Nasty! Nasty jazz!", source: "Prismo", season: 5, episode: "Finn the Human", year: 2012 }, 
    { quote: "I've seen some stuff that would really make you say 'like what'?", source: "Marceline", season: 1, episode: "Evicted!", year: 2010 }, 
    { quote: "Vampires can't beat ghosts. It's like a rock-paper-scissors thing.", source: "Marceline", season: 2, episode: "Heat Signature", year: 2011 }, 
    { quote: "Hold tight your buns, if buns you do hold dear. For time has come to wake and run and not give way to fear!", source: "Lemongrab", season: 5, episode: "Mystery Dungeon", year: 2013 }, 
    { quote: "We've have it all!", source: "Lemongrab", season: 5, episode: "Lemonhope", year: 2014 }, 
    { quote: "Responsibility demands sacrifice.", source: "Princess Bubblegum", season: 4, episode: "Burning Low", year: 2012 }, 
    { quote: "That tea party was crummier than a big ol' biscuit.", source: "Tree Trunks", season: 1, episode: "Tree Trunks", year: 2010 },
    { quote: "Well, I'm going back to my cave to wait for someone to kill me. Goodbye.", source: "Abracadaniel", season: 3, episode: "Wizard Battle", year: 2011 },
    { quote: "Bubblegum, I hereby challenge you to an honorable prison stabbing to the death!", source: "Abracadaniel", season: 5, episode: "Wizards Only, Fools", year: 2013 },
    { quote: "In my youth, I was much like you. Motivated, head strong, wore a silly little outfit.", source: "Billy", season: 1, episode: "His Hero", year: 2010 },
    { quote: "When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.", source: "BMO", season: 3, episode: "The Creeps", year: 2011 },
    { quote: "BMO Chop! If this were a real attack, you'd be dead.", source: "BMO", season: 4, episode: "Card Wars", year: 2012 },
    { quote: "She's red hot like pizza supper!", source: "BMO", season: 4, episode: "BMO Noire", year: 2012 },
    { quote: "Those are the rules in the Land of the Dead. Lose a music battle, lose your life.", source: "Death", season: 2, episode: "Death in Bloom", year: 2011 },
    { quote: "She's totally gross over ninety percent of her body. The other ten percent is crazy nasty.", source: "Dr. Ice Cream", season: 2, episode: "Mortal Recoil", year: 2011 },
    { quote: "Hey, it's okay. People make mistakes. It's all a part of growing up and you never really stop growing.", source: "Duke of Nuts", season: 1, episode: "The Duke", year: 2010 },
    { quote: "We can hang this up over our mantle and snuggle by the fire, like we... like we used to! I'm going to fix us, Barb. FIX US!", source: "Ed", season: 4, episode: "Web Weirdos", year: 2012 },
    { quote: "Margaret, this baby won't tell me what's wrong with it, and it's stuck to a leaf, and it stinks.", source: "Joshua", season: 1, episode: "Memories of Boom Boom Mountain", year: 2010 }
];

//function to choose a random quote from the array
//selected quote is then stored in viewedQuotes array to stop it appearing again until all quotes have appeared
//once all quotes have come up, the quotes array is refilled with the contents of viewedQuotes, which is set back to empty
function getRandomQuote (  ) {
    randomNumber = Math.floor( Math.random() * quotes.length );
    randomQuote = quotes[randomNumber];
    
    var splicedQuote = quotes.splice(randomQuote, 1)[0];
    viewedQuotes.push(splicedQuote);
    if (quotes.length == 0) {
        quotes = viewedQuotes;
        viewedQuotes = [];
    }
    
    return splicedQuote;
}

//function to return a random colour
function getRandomColour () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);           //chooses a hex number
  return "#" + ("000000" + hex.toString(16)).substr(-6);    //builds out hex string to give the random colour
}

//function to build the html and print the quote to the screen
function printQuote (  ) {
    quoteToPrint = getRandomQuote();
    
    //building out the html
    html = '';
    html += '<p class = "quote">' + quoteToPrint.quote + '</p>';
    html += '<p class = "source">' + quoteToPrint.source + '</p>';
    
    //if statements to omit blank parts of the object from the html view
    if ( quoteToPrint.episode != '' ) {
        html += '<span class = "citation">' + quoteToPrint.episode + '</span>';
    }
    if ( quoteToPrint.year != '' ) {
        html += '<span class = "year">' + quoteToPrint.year + '</span>';
    }
    if ( quoteToPrint.season != '' ) {
        html += '<span class = "season">' + quoteToPrint.season + '</span>';
    }

    //sending information to the html to print to screen
    document.getElementById('quote-box').innerHTML = html;
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    document.getElementById('body').style.background = getRandomColour();
    
    //load a new quote automatically every 10 seconds - clears current interval first then starts a new 10 second one
    clearInterval(interval);
    interval = setInterval(printQuote, 10000);
    
}

//initiate the printQuote function looping round on first page load
printQuote();