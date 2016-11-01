var counter = -1;
var myVar = setInterval(slide, 3000)

bilder = ["img/header1.jpg", "img/header2.jpg", "img/header3.jpg", "img/header4.jpg"]


function slide(){
  counter += 1
  document.getElementById("headerbilde").src = bilder[counter];
  if (counter === 3) {
    counter = -1;
  }
}

function neste(ret) {
  if (counter === 3 && ret === 1) {
    counter = -1;
  }
  else if (counter <= 0 && ret === -1) {
    counter = 4
  }
  counter += ret
  document.getElementById("headerbilde").src = bilder[counter];
  clearInterval(myVar);
  myVar = setInterval(slide, 3000);
}

function vis(){
  document.getElementById("right").style.display="block"
  document.getElementById("left").style.display="block"
}


function ikkevis(){
  document.getElementById("right").style.display="none"
  document.getElementById("left").style.display="none"
}
