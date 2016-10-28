function enlarge(bilde) {
  var bakgrunn = document.getElementById("enlargebakgrunn");
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

  document.getElementById("exit").onclick = function(){
    bakgrunn.style.display="none";
    document.getElementById("footer").style.display="inline";
    x = "forstegang";

  }
}

var x = "forstegang";
var a = document.getElementById("jass")
var tag = a.getElementsByTagName("img")
var hoved = document.getElementById("vistbilde")




function nextpic(retning) {
  document.getElementById("frem").style.display="inline";
  document.getElementById("tilbake").style.display="inline";
  let lengde = tag.length;
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

  console.log(x)
  document.getElementById("vistbilde").src = tag[x].getAttribute("src")
  document.getElementById("infotekst").innerHTML = tag[x].alt;

}
