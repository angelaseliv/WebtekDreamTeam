// Lager skjemaet
var x = document.getElementById("kjope_skjema");
var lagskjema = document.createElement('form');
lagskjema.setAttribute("method", "POST");
lagskjema.setAttribute("action","php/sendmail.php");
x.appendChild(lagskjema);

//Overskrift

var overskrift = document.createElement('h3');
overskrift.setAttribute("id","skjemaoverskrift");
overskrift.innerHTML = "Kontaktinformasjon for bestilling";
lagskjema.appendChild(overskrift);


//Navn - label
var label_navn = document.createElement('label');
label_navn.innerHTML= "Navn:";
lagskjema.appendChild(label_navn);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

// Navn - input
var input_navn = document.createElement('input');
input_navn.setAttribute("type","text");
input_navn.setAttribute("name","Navn");
input_navn.setAttribute("pattern","^[a-zA-ZæøåÆØÅ ]+$");
input_navn.setAttribute("required",true);
input_navn.setAttribute("placeholder", "Ditt navn");
input_navn.setAttribute("id","navn_input")
lagskjema.appendChild(input_navn);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//Gatenavn label
var label_gatenavn = document.createElement('label');
label_gatenavn.innerHTML="Gatenavn og nummer:";
lagskjema.appendChild(label_gatenavn);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Gatenavn input
var input_gatenavn = document.createElement('input');
input_gatenavn.setAttribute("type","text");
input_gatenavn.setAttribute("name","Gatenavn");
input_gatenavn.setAttribute("required",true);
input_gatenavn.setAttribute("placeholder", "Eks: Karl Johans gate 2");
input_gatenavn.setAttribute("id","gatenavn_input");
lagskjema.appendChild(input_gatenavn);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//Postnummer label
var label_postnummer = document.createElement('label');
label_postnummer.innerHTML="Postnummer:";
lagskjema.appendChild(label_postnummer);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Postnummer input
var input_postnummer = document.createElement('input');
input_postnummer.setAttribute("type","numbers");
input_postnummer.setAttribute("name","Postnummer");
input_postnummer.setAttribute("required",true);
input_postnummer.setAttribute("placeholder", "Ditt postnummer");
input_postnummer.setAttribute("id","postnummer_input");
lagskjema.appendChild(input_postnummer);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//Poststed label
var label_poststed = document.createElement('label');
label_poststed.innerHTML = "Poststed:";
lagskjema.appendChild(label_poststed);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Poststed input
var input_poststed = document.createElement('input');
input_poststed.setAttribute("type","text");
input_poststed.setAttribute("name", "Poststed");
input_poststed.setAttribute("required",true);
input_poststed.setAttribute("placeholder", "Ditt poststed");
input_poststed.setAttribute("id", "poststed_input");
lagskjema.appendChild(input_poststed);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//Telefonnummer label
var label_telefon = document.createElement('label');
label_telefon.innerHTML="Telefon:";
lagskjema.appendChild(label_telefon);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Telefonnummer input
var input_telefon = document.createElement('input');
input_telefon.setAttribute("type","numbers");
input_telefon.setAttribute("name","Telefon");
input_telefon.setAttribute("required",true);
input_telefon.setAttribute("placeholder", "Ditt telefonnummer (Eks: 99 99 99 99");
input_telefon.setAttribute("id", "telefon_input");
lagskjema.appendChild(input_telefon);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//E-mail label
var label_email = document.createElement('label');
label_email.innerHTML="E-mail:";
lagskjema.appendChild(label_email);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//E-mail input
var input_email = document.createElement('input');
input_email.setAttribute("type","email");
input_email.setAttribute("name","Email");
input_email.setAttribute("required",true);
input_email.setAttribute("placeholder", "xxxx@xxx.com");
input_email.setAttribute("id", "email_input");
lagskjema.appendChild(input_email);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//Bildenavn label
var label_bildenavn = document.createElement('label');
label_bildenavn.innerHTML="Bildenavn:";
lagskjema.appendChild(label_bildenavn);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Bildenavn input
var input_bildenavn = document.createElement('input');
input_bildenavn.setAttribute("type","text");
input_bildenavn.setAttribute("name","Bildenavn");
input_bildenavn.setAttribute("required",true);
input_bildenavn.setAttribute("placeholder", "Eks: Hjort i Forollhogna");
input_bildenavn.setAttribute("id", "bildenavn_input");
lagskjema.appendChild(input_bildenavn);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//Bildestørrelse label
var label_storrelse = document.createElement('label');
label_storrelse.innerHTML="Bildestørrelse:";
lagskjema.appendChild(label_storrelse);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Bildestørrelse input
var input_storrelse = document.createElement('input');
input_storrelse.setAttribute("type","text");
input_storrelse.setAttribute("name","Storrelse");
input_storrelse.setAttribute("required",true);
input_storrelse.setAttribute("placeholder", "Bredde x høyde");
input_storrelse.setAttribute("id","storrelse_input");
lagskjema.appendChild(input_storrelse);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);
//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);


//Annet label
var label_annet = document.createElement('label');
label_annet.innerHTML="Annet:";
lagskjema.appendChild(label_annet);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Annet input
var input_annet = document.createElement('textarea');
input_annet.setAttribute("placeholder", "Andre spørsmål? (190 tegn)");
input_annet.setAttribute("Id", "annet_input");
input_annet.setAttribute("name","annet");
input_annet.setAttribute("autoResize","40");
lagskjema.appendChild(input_annet);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);



//Submitknapp
var submit = document.createElement('input'); // Append Submit Button
submit.setAttribute("type", "submit");
submit.setAttribute("name", "submit");
submit.setAttribute("value", "Send inn din bestilling!");
submit.setAttribute("id", "submit_input");
lagskjema.appendChild(submit);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Linjeskift
var linjeskift = document.createElement('br');
lagskjema.appendChild(linjeskift);

//Inspirasjon funnet på https://www.formget.com/javascript-contact-form/