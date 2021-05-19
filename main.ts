input.onPinPressed(TouchPin.P0, function () {
    input2 += 1
    basic.showNumber(input2)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    mult = 1
    lights = 0
    while (input2 >= mult) {
        mult = mult * 2
        lights += 1
    }
    mult = mult / 2
    lights += -1
    while (input2 > 0) {
        if (input2 >= mult) {
            led.plot(lights % 5, lights / 5)
            input2 = input2 - mult
        }
        input2 = mult / 2
        lights += -1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    input2 += 100
    basic.showNumber(input2)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    input2 += 10
    basic.showNumber(input2)
    basic.clearScreen()
})
let lights = 0
let mult = 0
let input2 = 0
input2 = 0
