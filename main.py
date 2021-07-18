def on_button_pressed_a():
    playSong()
input.on_button_pressed(Button.A, on_button_pressed_a)

def playSong():
    for index in range(8):
        music.play_tone(list2[index], music.beat(BeatFraction.WHOLE))
        radio.send_number(list2[index])
radio.set_group(1)
note1 = 440
note2 = 440
note3 = 466
note4 = 523
note5 = 523
note6 = 466
note7 = 440
note8 = 392
list2 = [note1, note2, note3, note4, note5, note6, note7, note8]