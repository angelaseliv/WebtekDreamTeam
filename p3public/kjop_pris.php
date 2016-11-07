<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style/style.css">
  <link rel="icon" type="image/png" href="img/icon.png">
  <title>Jens Larssen</title>
  <meta charset="utf-8">
</head>
<body>
  <div id="wrapper">
    <div id="space"> </div>
<nav>
  <?php include 'php/meny.php';?>
</nav>

    <!--ALT SOM SKAL STÅ PÅ SIDEN SKRIVES HER-->
    <div id="innholdkjop">
    <h1>Kjøp</h1>

    <?php
    if (isset($_SESSION['sent']) && $_SESSION['sent']) {
      echo "<p style='font-size: 40px; padding: 10px'>Takk for din bestilling.</p>";
      session_destroy();
    }
    ?>
    <p> Er du interessert i å kjøpe et bilde? Her kan du sende inn en bestilling på det bilde du vil ha. Da fyller du ut kontaktinformajsonen, og skriver inn bildenavnet og størrelsen du ønsker. Bildene blir levert med ramme, og alle bilder finnes i to ulike størrelser (...x... og ...x...). Du vil få svar på mail med betalingsinformasjon. Vennligst vær nøye med utfyllingen, og dobbelsjekk at din kontaktinformasjon er riktig. Takk! </p>
    <div id="kjope_skjema">
      </div>
    </div>

    <!-- TIL HER -->

    <footer>
      <?php include ("php/footer.php");?>
    </footer>
  </div>
  <script src="scripts/dropdown.js"></script>
  <script src="scripts/skjema.js"></script>
</body>
