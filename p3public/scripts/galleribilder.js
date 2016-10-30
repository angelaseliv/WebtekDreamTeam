//Variabler brukt senere i scriptet

var bakgrunn = document.getElementById("enlargebakgrunn");

var x = "forstegang";
var a = document.getElementById("jass")
var tag = a.getElementsByTagName("img")
var hoved = document.getElementById("vistbilde")
var musoverbilde = 1


//Funksjon for å bruke diverse tastetrykk til forskjellige ting
document.onkeydown = keycheck;
function keycheck(e) {
  e = e || window.event;
  if (bakgrunn.style.display == "block") {
    if (e.keyCode == '39' && document.getElementById("frem").style.display == "inline" ) { //arrow-right = galleri til høyre, bare hvis frem-knappen er der.
       nextpic(+1);
    }
    else if (e.keyCode == '37' &&  document.getElementById("tilbake").style.display == "inline") { //arrow-left = galleri til venstre, bare hvis tilbake-knappen er der
      nextpic(-1);
    }
    else if (e.keyCode == '27' && bakgrunn.style.display=="block")  {
      closeit()
    }
  }
}


//Forstørre bildet
function enlarge(bilde) {
  var pic = document.createElement("IMG");
  bakgrunn.style.display="block";
  document.getElementById("vistbilde").src = bilde.getAttribute("src")
  document.getElementById("infotekst").innerHTML = bilde.alt;
  document.getElementById("footer").style.display="none";
  document.getElementById("frem").style.display="inline";
  document.getElementById("tilbake").style.display="inline";

  if (tag[0].getAttribute("src") == hoved.getAttribute("src")){
      document.getElementById("tilbake").style.display="none";
  }
  if (tag[tag.length - 1].getAttribute("src") == hoved.getAttribute("src")){
      document.getElementById("frem").style.display="none";
  }

  document.getElementById("exit").onclick = closeit
}

function closeit(){
  if (bakgrunn.style.display=="block") {
    bakgrunn.style.display="none";
    document.getElementById("footer").style.display="inline";
    x = "forstegang";
  }
}



//Gjør så bildevisningen lukkes om man trykker på skjermen utenfor bildet. Veldig rar måte å gjøre det på, men er den enkleste måten for meg da det blir for mye å endre på i html, css og js hvis ikke.
document.getElementById("innhald").onmouseover = function(){
  musoverbilde = 1
}
document.getElementById("innhald").onmouseout = function(){
  musoverbilde = 0
}
bakgrunn.onclick = function(){
  if (musoverbilde == 0){
    closeit();
  }
}






//Funksjon for å bytte bilde i fremvisningen
function nextpic(retning) {
  document.getElementById("frem").style.display="inline";
  document.getElementById("tilbake").style.display="inline";
  var lengde = tag.length;
  if (x == "forstegang") {
    for (let i = 0; i < lengde; i++) {
      if (tag[i].getAttribute("src") == hoved.getAttribute("src")) {
        x = i+retning;
      }
    }
  }
  else {
    x += retning
  }
  if (x == lengde-1) {
    document.getElementById("frem").style.display="none";
  }
  else if (x == 0) {
    document.getElementById("tilbake").style.display="none";
  }
  document.getElementById("vistbilde").src = tag[x].getAttribute("src")
  document.getElementById("infotekst").innerHTML = tag[x].alt;
}
