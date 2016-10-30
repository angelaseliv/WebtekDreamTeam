function dropdown(id1, id2) {
  document.getElementById(id1).style.visibility = "visible";
  var fikseborder = document.getElementById(id2)
  if (id2 == 'menyinspirasjon') {
    document.getElementById('menykontakt').style.borderRight = "0px";
    document.getElementById('menyopplevelser').style.borderLeft = "0px";
  }
  else if (id2 == 'menygalleri') {
    document.getElementById('menyforside').style.borderRight = "0px";
    document.getElementById('menykontakt').style.borderLeft = "0px";
  }
  fikseborder.style.borderRight = "2px solid white"
  fikseborder.style.borderLeft = "2px solid white"
}

function notdropdown(id1, id2) {
  document.getElementById(id1).style.visibility = "hidden";
  var fjerneborder = document.getElementById(id2)
  if (id2 == 'menyinspirasjon') {
    document.getElementById('menykontakt').style.borderRight = "2px solid white";
    document.getElementById('menyopplevelser').style.borderLeft = "2px solid white";
  }
  else if (id2 == 'menygalleri') {
    document.getElementById('menyforside').style.borderRight = "2px solid white";
    document.getElementById('menykontakt').style.borderLeft = "2px solid white";
  }
  fjerneborder.style.borderRight = "0px"
  fjerneborder.style.borderLeft = "0px"

}
