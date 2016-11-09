var knapp = document.getElementById("menyknapp")
var innhold = document.getElementById("mobilmenuinnhold")

//funksjon for å åpne mobilmenyen
function mobil(){
  //Menyen lukkes hvis knappen trykker og den allerede er åpen, og går tilbake til standard knappfarge
  if (innhold.style.display === "inline") {
    document.getElementById("mobilmenuinnhold").style.display = "none";
    document.getElementById("menyknapp").style.backgroundColor = "#A48F6B"
  }
  //Menyen åpnes hvis den ikke allerede er åpen, og knappen får en lysere farge.S
  else {
    document.getElementById("mobilmenuinnhold").style.display = "inline";
    document.getElementById("menyknapp").style.backgroundColor = "#C6AA77"

  }
}
 /*
function mobilchange(id) {
  //venstre = document.getElementById(id);
  //hoyre1 = document.getElementById("drop1")
  //hoyre2 = document.getElementsByClassName("drop2")
  console.log(id)
}
*/
