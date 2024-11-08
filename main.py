game.splash("What two numbers would you like to add?")
FirstNumber = game.ask_for_number("")
SecondNumber = game.ask_for_number("")
game.splash("" + str(FirstNumber) + " + " + str(SecondNumber) + " = " + str((FirstNumber + SecondNumber)))