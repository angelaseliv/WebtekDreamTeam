<!--
Filnavn:
Skrevet av:
Dato:
Mål:
-->

<?php
$navn = $_POST['Navn'];
$gatenavn = $_POST['Gatenavn'];
$postnummer = $_POST['Postnummer'];
$poststed = $_POST['Poststed'];
$telefon = $_POST['Telefon'];
$email_addresse = $_POST['Email'];
$bildenavn = $_POST['Bildenavn'];
$storrelse = $_POST['Storrelse'];
$annet = $_POST['annet'];
mail("havardhuns@gmail.com", utf8_decode("Kjøp av bilder: "). utf8_decode($navn), "Navn: " . $navn . "\n" . "Gatenavn: " . $gatenavn . "\n" . "Postnummer: " . $postnummer . "\n" . "Poststed: " . $poststed . "\n" . "Telefon: " . $telefon . "\n" . "Bildenavn: " . $bildenavn . "\n" . "Størrelse: " . $storrelse . "\n" . "Annet: " . $annet . "\n\n\n" . "SENDT FRA: " . $email_addresse);
header("Location: ../kjop_pris.php");
?>
