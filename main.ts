input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() >= 350 || input.compassHeading() <= 10) {
        basic.showString("N")
    } else if (input.compassHeading() < 350 && input.compassHeading() > 270) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (input.compassHeading() > 10 && input.compassHeading() < 90) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
	
})
