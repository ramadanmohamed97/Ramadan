var quote = [
    {quote:"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning." , author:"Albert Einstein" },  

{quote:"The optimist thinks this is the best of all possible worlds. The pessimist fears it is true." , author:"J. Robert Oppenheimer" },

{quote:"The first principle is that you must not fool yourself and you are the easiest person to fool." , author:"Richard P. Feynman"  },

{quote:"Before I came here I was confused about this subject. Having listened to your lecture I am still confused. But on a higher level" , author: "Enrico Fermi" },


{quote:"Science is a way of life. Science is a perspective. Science is the process that takes us from confusion to understanding in a manner that's precise, predictive and reliable - a transformation, for those lucky enough to experience it, that is empowering and emotional." , author:"Brian Greene"},

{quote:"The opposite of a fact is falsehood, but the opposite of one profound truth may very well be another profound truth." , author:"Niels Bohr"},

{quote:"Neuroscience is exciting. Understanding how thoughts work, how connections are made, how the memory works, how we process information, how information is stored - it's all fascinating." , author:"Lisa Randall"},

]


var lastRandomQuote ;
var alreadyDisplayed = [];
function getQuotes() {

                         // method Tracking Previously Used Indices  with displayed
if ( alreadyDisplayed.length == quote.length) { alreadyDisplayed = []}

    var newRandomQuote;

do{ 
var newRandomQuote = Math.floor(Math.random() * quote.length) ;
} while ( lastRandomQuote == newRandomQuote || alreadyDisplayed.includes (newRandomQuote));
    lastRandomQuote = newRandomQuote ;
    alreadyDisplayed.push(newRandomQuote)
    console.log(newRandomQuote);



    document.getElementById("quote").innerHTML = quote[newRandomQuote].quote;
    document.getElementById("author").innerHTML = quote[newRandomQuote].author;

}
