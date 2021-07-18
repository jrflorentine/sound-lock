radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index <= 7; index++) {
        if (list2[index] == receivedNumber) {
            correct = 1
        } else {
            correct = 0
        }
    }
    if (correct == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.A, function () {
    playSong()
})
function playSong () {
    for (let index = 0; index <= 7; index++) {
        music.playTone(list2[index], music.beat(BeatFraction.Whole))
        radio.sendNumber(list2[index])
    }
}
let list2: number[] = []
let correct = 0
radio.setGroup(1)
correct = 1
let note1 = 440
let note2 = 440
let note3 = 466
let note4 = 523
let note5 = 523
let note6 = 466
let note7 = 440
let note8 = 392
list2 = [
note1,
note2,
note3,
note4,
note5,
note6,
note7,
note8
]
