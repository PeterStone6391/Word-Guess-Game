// make a list of characters for answers to the game
//need to find images for each character and figure out how to make them small
var gameObj = {
  answerList: [
    ["Aragorn", "assets/images/Aragorn.jpg"],
    ["Legolas", "assets/images/Legolas.jpgl"],
    ["Gandalf", "assets/images/Gandalf.jpg"],
    ["Sam", "assets/images/Sam.jpg"],
    ["Frodo", "assets/images/Frodo.jpg"],
    ["Gimli", "assets/images/Gimli.jpg"],
    ["Gollum", "assets/images/Gollum.jpg"],
    ["Sauron", "assets/images/Sauron.jpg"],
    ["Saruman", "assets/images/Saruman.jpg"]
  ],
  loserImg: ["assets/images/Loser.jpg"],
  // use idea for end flags from slack chat to make it easier to find in my code
  endFlag: 0,
  word: "",
  stringToPrint: "",
  correctGuesses: "",
  incorrectGuesses: "",
  winCount: ""
};
