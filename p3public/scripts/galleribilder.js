function enlarge(bilde) {
  var bakgrunn = document.getElementById("enlargebakgrunn");
  var pic = document.createElement("IMG");
  bakgrunn.style.display="block";
  document.getElementById("vistbilde").src = bilde.getAttribute("src")
  document.getElementById("infotekst").innerHTML = bilde.alt;
  document.getElementById("footer").style.display="none";
  document.getElementById("frem").style.display="inline";
  document.getElementById("tilbake").style.display="inline";
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
  let lengde = tag.length;
  if (x == "forstegang") {
    for (let i = 0; i < lengde; i++) {
      if (tag[i].getAttribute("src") == hoved.getAttribute("src")) {
        x = i+retning;
      }
    }
  }
  else if (x == lengde-2 && retning == 1) {
    x+= retning
    document.getElementById("frem").style.display="none";
  }
  else if (x == 1 && retning == -1) {
    x += retning
    document.getElementById("tilbake").style.display="none";
  }
  else {
    document.getElementById("frem").style.display="inline";
    document.getElementById("tilbake").style.display="inline";
    x += retning
  }
  console.log(x)
  document.getElementById("vistbilde").src = tag[x].getAttribute("src")
  document.getElementById("infotekst").innerHTML = tag[x].alt;

}
