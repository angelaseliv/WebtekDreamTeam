
//Funksjon for å få frem undermenyen, som er et parameter, siden flere deler av menyen har denne funksjonen.
function dropdown(id) {
  document.getElementById(id).style.visibility = "visible";
}

//Samme funksjon, bare for å slutte å vise undermenyen når musen går bort. 
function notdropdown(id) {
  document.getElementById(id).style.visibility = "hidden";
}
