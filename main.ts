game.splash("What two numbers would you like to add?")
let FirstNumber = game.askForNumber("")
let SecondNumber = game.askForNumber("")
game.splash("" + FirstNumber + " + " + ("" + SecondNumber) + " = " + ("" + (FirstNumber + SecondNumber)))
