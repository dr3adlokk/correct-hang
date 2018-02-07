
var catLetters = ['a','b','c',
'd','e','f',
'g','h','i',
'j','k','l',
'm','n','o',
'p','q','r',
's','t','u',
'v','w','x',
'y','z'];

var wordBank =['peopleeatingtastyanimals','choclate','soy','mint','organic','grassfed','rockyroadjquery', 'done','fiddycentflavor'];


var chosenOne = "";

var lettersInWord = [];

var numBlanks = 0;

var blanksAndSuccesses =[];

var wrongLetters = [];

var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;


function reset()
{

chosenOne = wordBank[Math.floor(Math.random() * wordBank.length)];

lettersInWord = chosenOne.split('');

numBlanks = lettersInWord.length;


letterGuessed = 0;
rightGuessCounter = 0;
guessesLeft = 9;
wrongLetters =[];
blanksAndSuccesses =[];
catLetters = ['a','b','c',
	'd','e','f',
	'g','h','i',
	'j','k','l',
	'm','n','o',
	'p','q','r',
	's','t','u',
	'v','w','x',
	'y','z'];
test=false;
startGame();
}
function startGame()
{

chosenOne = wordBank[Math.floor(Math.random() * wordBank.length)];

lettersInWord = chosenOne.split('');

numBlanks = lettersInWord.length;


rightGuessCounter = 0;
guessesLeft = 9;
wrongLetters =[];
blanksAndSuccesses =[];
catLetters = ['a','b','c',
	'd','e','f',
	'g','h','i',
	'j','k','l',
	'm','n','o',
	'p','q','r',
	's','t','u',
	'v','w','x',
	'y','z'];


for(var i = 0; i< numBlanks; i++)
{
blanksAndSuccesses.push('_');
document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
}


document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
document.getElementById('numGuesses').innerHTML = guessesLeft;
document.getElementById('winCounter').innerHTML = winCount;
document.getElementById('lossCounter').innerHTML = loseCount;
document.getElementById('wrongGuesses').innerHTML = wrongLetters;

console.log(chosenOne);
console.log(lettersInWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
}

function compareLetters(userKey)
{
console.log('WORKING!');

if(chosenOne.indexOf(userKey) > -1)
{
   
  for(var i = 0; i < numBlanks; i++)
  {
	  
	  if(lettersInWord[i] === userKey)
	  {
		  rightGuessCounter++;
		  blanksAndSuccesses[i] = userKey;
		  document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
	  }	
  }
  
  console.log(blanksAndSuccesses);
}

else
{
  wrongLetters.push(userKey);
  guessesLeft--;
  
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('wrongGuesses').innerHTML = wrongLetters;
  
  console.log('Wrong Letters = ' + wrongLetters);
  console.log('Guesses left are ' + guessesLeft);
}



}
function winLose()
{

if(rightGuessCounter === numBlanks)
{

winCount++;

document.getElementById('winCounter').innerHTML = winCount;
alert('You Win');
reset();
}

else if(guessesLeft === 0)
{

loseCount++;

document.getElementById('lossCounter').innerHTML = loseCount;
alert('You Lose');
reset();
}
}


startGame();

document.onkeyup = function(event)
{
test = true;
var letterGuessed = event.key;
for(var i = 0; i < catLetters.length; i++)
{	
if(letterGuessed === catLetters[i] && test === true)
{
var spliceDword = catLetters.splice(i,1);

console.log('Double word is = ' + catLetters[i])
console.log('Spliced Word is = ' + spliceDword);

compareLetters(letterGuessed);
winLose();
}
}		

}