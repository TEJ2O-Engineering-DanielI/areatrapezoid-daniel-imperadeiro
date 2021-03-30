game.splash("Today we will calculate the area of a trapezoid! ")
let a_length = game.askForNumber("Enter the A length in cm: ")
let b_length = game.askForNumber("Enter the B length in cm: ")
let height = game.askForNumber("Enter the height in cm: ")
let area = a_length + b_length
area = area / 2
area = area * height
game.splash("The area of a trapezoid with the A length of  " + a_length + " cm and the B length of  " + b_length + " cm, with a height of " + height + " cm is " + area + " cm squared")
