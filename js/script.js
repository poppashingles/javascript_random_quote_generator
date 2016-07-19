// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

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
    { quote: "That tea party was crummier than a big ol' biscuit.", source: "Tree Trunks", episode: "Tree Trunks", year: 2010 },
    { quote: "Well, I'm going back to my cave to wait for someone to kill me. Goodbye.", source: "Abracadaniel", episode: "Wizard Battle", year: 2011 },
    { quote: "Bubblegum, I hereby challenge you to an honorable prison stabbing to the death!", source: "Abracadaniel", episode: "Wizards Only, Fools", year: 2013 },
    { quote: "In my youth, I was much like you. Motivated, head strong, wore a silly little outfit.", source: "Billy", episode: "His Hero", year: 2010 },
    { quote: "When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light.", source: "BMO", episode: "The Creeps", year: 2011 },
    { quote: "BMO Chop! If this were a real attack, you'd be dead.", source: "BMO", episode: "Card Wars", year: 2012 },
    { quote: "She's red hot like pizza supper!", source: "BMO", episode: "BMO Noire", year: 2012 },
    { quote: "Those are the rules in the Land of the Dead. Lose a music battle, lose your life.", source: "Death", episode: "Death in Bloom", year: 2011 },
    { quote: "She's totally gross over ninety percent of her body. The other ten percent is crazy nasty.", source: "Dr. Ice Cream", episode: "Mortal Recoil", year: 2011 },
    { quote: "Hey, it's okay. People make mistakes. It's all a part of growing up and you never really stop growing.", source: "Duke of Nuts", episode: "The Duke", year: 2010 },
    { quote: "We can hang this up over our mantle and snuggle by the fire, like we... like we used to! I'm going to fix us, Barb. FIX US!", source: "Ed", episode: "Web Weirdos", year: 2012 },
    { quote: "Margaret, this baby won't tell me what's wrong with it, and it's stuck to a leaf, and it stinks.", source: "Joshua", episode: "Memories of Boom Boom Mountain", year: 2010 }
];

//function to choose a random quote from the array
function getRandomQuote (  ) {
    randomNumber = Math.floor( Math.random() * quotes.length );
    randomQuote = quotes[randomNumber];
    return randomQuote;
}

//function to build the html and print the quote to the screen
function printQuote (  ) {
    quoteToPrint = getRandomQuote();
    html = '';
    html += '<p class = "quote">' + quoteToPrint.quote + '</p>';
    html += '<p class = "source">' + quoteToPrint.source + '</p>';
    html += '<span class = "citation">' + quoteToPrint.episode + '</span>';
    html += '<span class = "year">' + quoteToPrint.year + '</span>';
    document.getElementById('quote-box').innerHTML = html;
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}

//initiate the printQuote function looping round on first page load
printQuote();