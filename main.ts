basic.forever(function () {
    if (innobit.Line_following_IR1() && innobit.Line_following_IR2()) {
        innobit.motor_M1(150)
        innobit.motor_M2(150)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (innobit.Line_following_IR1()) {
        innobit.motor_M1(150)
        innobit.motor_M2(-150)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (innobit.Line_following_IR2()) {
        innobit.motor_M1(-150)
        innobit.motor_M2(150)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else {
        innobit.motor_M1(0)
        innobit.motor_M2(0)
        basic.showIcon(IconNames.No)
    }
})
