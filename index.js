const image = document.getElementById("main")
const vodka = document.getElementById("vodka")

image.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    //setTimeout(flip, 1000);
    image.src = "./res/full.png"
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

function flip(){
    console.log(image.src);
    if(image.src == "file:///C:/Users/Nox/Desktop/russia/res/full2.png"){
        image.src = "./res/full.png"
    }else{
        image.src = "./res/full2.png"
    }
    setTimeout(flip, 500);
}