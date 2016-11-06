var knapp = document.getElementById("menyknapp")
var innhold = document.getElementById("mobilmenuinnhold")

function mobil(){
  if (innhold.style.display === "inline") {
    document.getElementById("mobilmenuinnhold").style.display = "none";
    document.getElementById("menyknapp").style.backgroundColor = "#A48F6B"
  }
  else {
    document.getElementById("mobilmenuinnhold").style.display = "inline";
    document.getElementById("menyknapp").style.backgroundColor = "#C6AA77"

  }
}
