input.onButtonPressed(Button.A, function () {
    inputpaas = "" + inputpaas + "A"
})
input.onButtonPressed(Button.B, function () {
    inputpaas = "" + inputpaas + "B"
})
input.onGesture(Gesture.Shake, function () {
    inputpaas = ""
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (heslo == inputpaas) {
        basic.showNumber(565543)
        inputpaas = ""
    } else {
        basic.clearScreen()
        inputpaas = ""
    }
})
let inputpaas = ""
let heslo = ""
heslo = "AABBAAB"
