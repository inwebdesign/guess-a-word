// defining words

var words = [
	'love',
	'heart',
	'sun'
]
var newArr = [];
var input;
var randomWord;
var remainLetters;

// showWordToGuess();
showWordToGuess();


function showWordToGuess(){
		randomWord = '';
		randomWord = words[Math.floor(Math.random() * words.length)];
		remainLetters = randomWord.length;

		for(let i = 0; i < randomWord.length; i++){
				newArr[i] = " _ " ;
		}
		guessAWord();
		
}

// quessing a letter to complete word

function guessAWord(){
	while(remainLetters > 0){
			alert(newArr.join(" "));
			input = prompt('Enter a letter');
	if(input === null){
		break;
	}else if(input.length !== 1){
		alert('Please, enter a single letter');
	}else{
		for(let i = 0; i < randomWord.length; i++){
			if(input === randomWord[i]){
				newArr[i] = input;
				remainLetters--;
			}
	}
	}		
	}
	let newQuiz = confirm(`Congratulations! The word we are looking is ${newArr.join("")} \n Do you wish
		to play again?`);
		if(newQuiz){
			showWordToGuess();
			guessAWord();
		}else{
			return;
		}
} 

