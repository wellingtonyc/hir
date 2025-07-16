let mainimage = document.querySelector('.res img')
let dasd = document.querySelector('.img')
let sound = new Audio('sounds/fail-sound-effect.mp3')
let victory = new Audio ('sounds/victory-sound-effect.mp3')
let music = new Audio ('music/mushroom-mayhem-1.mp3')
music.play()
function res(image , mes ) {
    mainimage.src = image
    sound.play()

    let res = document.querySelector('.ress')
    res.innerHTML = mes
}

function acertou(image,mes) {
    let res = document.querySelector('.ress')
  mainimage.src = image
    res.innerHTML = mes
    victory.play()

}