radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        grue = 1
        basic.showNumber(1)
    } else if (receivedNumber == 2) {
        grue = 2
        basic.showNumber(2)
    } else if (receivedNumber == 3) {
        grue = 3
        basic.showNumber(3)
    } else if (receivedNumber == 4) {
        grue = 4
        basic.showNumber(4)
    }
    if (grue == 1) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, receivedNumber)
    } else if (grue == 2) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, receivedNumber)
    } else if (grue == 3) {
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, receivedNumber)
    } else if (grue == 4) {
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, 0)
    }
    if (receivedNumber == 0) {
        wuKong.mecanumStop()
    }
})
let grue = 0
radio.setGroup(1)
grue = 2
basic.forever(function () {
	
})
