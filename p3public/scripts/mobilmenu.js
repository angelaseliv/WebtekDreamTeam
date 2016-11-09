var knapp = document.getElementById("menyknapp")
var innhold = document.getElementById("mobilmenuinnhold")

//funksjon for å åpne mobilmenyen
function mobil(){
  //Menyen lukkes hvis knappen trykker og den allerede er åpen, og går tilbake til standard knappfarge
  if (innhold.style.display === "inline") {
    document.getElementById("mobilmenuinnhold").style.display = "none";
    document.getElementById("menyknapp").style.backgroundColor = "#A48F6B"
    document.getElementById("mobilmenygalleri").style.display = "inline";
    document.getElementById("mobilmenyinspirasjon").style.display = "inline";
  }
  //Menyen åpnes hvis den ikke allerede er åpen, og knappen får en lysere farge.S
  else {
    document.getElementById("mobilmenuinnhold").style.display = "inline";
    document.getElementById("ikkevis1").style.display = "none";
    document.getElementById("ikkevis2").style.display = "none";
    document.getElementById("menyknapp").style.backgroundColor = "#C6AA77"

  }
}

function mobilchange(id) {
  var venstre = document.getElementById(id);
  document.getElementById("mobilmenygalleri").style.display = "none"
  document.getElementById("pil").style.display = "none";
  venstre.style.display = "inline";

  console.log(id)
}
