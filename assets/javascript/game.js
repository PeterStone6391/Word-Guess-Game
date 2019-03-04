// create an array of Words
//need to find images for each character and figure out how to make them small.....done
// const word = [["Aragorn", "assets/images/Aragorn.jpg"],
// ["Legolas","assets/images/Legolas.jpg"],["Gandalf", "assets/images/Gandalf.jpg"],
// ["Sam", "assets/images/Sam.jpg"],
// ["Frodo", "assets/images/Frodo.jpg"],
// ["Gimli", "assets/images/Gimli.jpg"],
// ["Gollum", "assets/images/Gollum.jpg"],
// ["Sauron", "assets/images/Sauron.jpg"],
// ["Saruman", "assets/images/Saruman.jpg"]
// ]
//Couldn't figure out how to make the array also have the image with it

// choose word randomly
// let randNum = Math.floor(Math.random() *word.length);
// let choosenWord = word[randNum];
// let rightWord = [];
// let wrongWord = [];
// let underScore = [];
// Testing
// console.log(choosenWord);

// create underscores based on length of word
// let generateUnderscore = () =>{
//     for (let i = 0; i < choosenWord.length; i++) {
//         underScore.push('_');
//     }
//     return underScore;
// }
// console.log(generateUnderscore());

// Get users guess
// document.addEventListener('keypress', (event) => {
//     let keyword = String.fromCharCode(event.keyCode);
// })
// Check if guess is right
// If right push to right array
// if(choosenWord.indexOf(keyword) >-1) {
//add to right of array
//     rightWord.push(keyword);
// }
// replace underscore with right letter
//make result or picture for right
// need image of happy LOTR scene...... in progress of finding

// If wrong push to wrong array
//make result or picture for wrong
// loserImg: ["assets/images/Loser.jpg"],

// Still need time to work out the functions better to finish my game. please give me an extension

// below is some trial and error items to remember what i named parts on my html
//   missedGuesses: document.getElementById("incorrect-guesses"),
//   guessesRemaining: document.getElementById("guesses-remaining"),
//   endImage: document.getElementById("winner"),
//   victories: document.getElementById("victories"),
