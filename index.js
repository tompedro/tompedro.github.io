const image = document.getElementById("main")
const vodka = document.getElementById("vodka")

image.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    //setTimeout(flip, 1000);
    image.src = "./res/full.PNG"
    vodka.style.visibility = "visible"
  } else {
    audio.pause()
    image.src = "./res/russia.jpg"
    vodka.style.visibility = "hidden"
  }
})

window.onbeforeunload = () => {
  return true
}
