var counter = -1; //teller som er satt til -1 som standard, pga. den økes for hver gang funksjonen kjøres, men første bilde som vises er indeks-0.
var myVar = setInterval(slide, 3000) //tidsintervall på 3 sekunder, som blir brukt for å kjøre bytte-bilde-funksjonen hvert sekund.

bilder = ["img/header1.jpg", "img/header2.jpg", "img/header3.jpg", "img/header4.jpg"] //en liste med src til bildene som skal brukes


//funksjonen som bytter bilde, starter på nytt igjen etter listen er kjørt gjennom.
function slide(){
  if (counter === bilder.length-1) {
    counter = -1;
  }
  counter += 1
  document.getElementById("headerbilde").src = bilder[counter];
}


//funksjon for hvis du bytter bilde med kontrollpilene, med retning som paramter
function neste(ret) {

  //hvis du er på siste bilde og går videre, starter den på første.
  if (counter === bilder.length-1 && ret === 1) {
    counter = -1;
  }

  //hvis du er på første bilde og går bakover, går den til det siste.
  else if (counter <= 0 && ret === -1) {
    counter = bilder.length
  }
  counter += ret
  document.getElementById("headerbilde").src = bilder[counter];

  //resetter counteren, så bildet venter 3 sekunder med å bytte etter du har brukt pilene.
  clearInterval(myVar);
  myVar = setInterval(slide, 3000);
  console.log(counter)
}


//funksjoner som ikke viser pilene bortsett fra hvis musen er over bildet, pga. det ser finere ut uten piler.
function vis(){
  document.getElementById("right").style.display="block"
  document.getElementById("left").style.display="block"
}
function ikkevis(){
  document.getElementById("right").style.display="none"
  document.getElementById("left").style.display="none"
}
