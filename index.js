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

function flip(){
    console.log(image.src);
    if(image.src == "file:///C:/Users/Nox/Desktop/russia/res/full2.png"){
        image.src = "./res/full.PNG"
    }else{
        image.src = "./res/full2.PNG"
    }
    setTimeout(flip, 500);
}
