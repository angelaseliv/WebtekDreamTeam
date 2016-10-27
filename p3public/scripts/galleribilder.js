function enlarge(bilde) {
  var bakgrunn = document.getElementById("enlargebakgrunn");
  var pic = document.createElement("IMG");
  bakgrunn.style.display="block";
  document.getElementById("vistbilde").src = bilde.getAttribute("src")
  document.getElementById("infotekst").innerHTML = bilde.alt;
  document.getElementById("footer").style.display="none";
  document.getElementById("vistbilde").onclick = function(){
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
  else if (x == lengde-1 && retning == 1) {
    x = 0
  }
  else if (x == 0 && retning == -1) {
    x = lengde -1
  }
  else {
    x += retning
  }
  console.log(x)
  document.getElementById("vistbilde").src = tag[x].getAttribute("src")
  document.getElementById("infotekst").innerHTML = tag[x].alt;

}
