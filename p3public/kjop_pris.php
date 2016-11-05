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
  <div id="side">
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
    <p> Dersom du er interresert i å kjøpe et bilde du så i galleriet, skal du her få forklart hvordan du går fram, i tillegg til et skjema hvor du fyller inn informasjon som Jens trenger for å selge/sende bildet til deg.</p>
    <div id="kjope_skjema">
      </div>
    </div>

    <!-- TIL HER -->

    <footer>
      <?php include ("php/footer.php");?>
    </footer>
  </div>
  </div>
  <script src="scripts/dropdown.js"></script>
  <script src="scripts/skjema.js"></script>
</body>
