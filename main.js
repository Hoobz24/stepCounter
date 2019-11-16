input.onButtonPressed(Button.B, function () {
    basic.showString("" + steps)
    moving = 1
    motobit.enable(MotorPower.Off)
})
function update() {
    if (moving == 0) {
        steps += 1
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        basic.pause(100)
        basic.showString("" + steps)
        update()
    }
}
input.onButtonPressed(Button.A, function () {
    moving = 0
    steps = 0
    motobit.enable(MotorPower.On)
    update()
})
let moving = 0
let steps = 0
motobit.invert(Motor.Left, false)
motobit.invert(Motor.Right, false)
steps = 0
