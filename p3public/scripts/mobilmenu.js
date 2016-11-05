var knapp = document.getElementById("menyknapp")
var innhold = document.getElementById("mobilmenuinnhold")

function mobil(){
  if (innhold.style.display === "inline") {
    document.getElementById("mobilmenuinnhold").style.display = "none";
  }
  else {
    document.getElementById("mobilmenuinnhold").style.display = "inline";
  }
}
