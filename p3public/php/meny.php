<div id="menu">
  <a href="index.php" id="mobillogo"><img src="img/logohvit.png" class="logohvit" id="mobilbilde" class="disable-select"></a>
  <div id="menyknapp" onclick="mobil()">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
    <ul id="menyinnhold">
    <li><a href="index.php" id="hjembilde"><img src="img/logohvit.png" class="logohvit" class="disable-select"></a></li>
    <li><a href="forsip.php" id="menyforside">Forside </a></li>
    <li><a href="galleri.php" onmouseover="dropdown('drop', 'menygalleri')" onmouseout="notdropdown('drop', 'menygalleri')" id = "menygalleri">Galleri </a>
    <ul id="drop" onmouseover="dropdown('drop', 'menygalleri')" onmouseout="notdropdown('drop', 'menygalleri')" style="visibility: hidden;">
      <li><a href="kjop_pris.php"  id="menykjop">Kjøp</a></li>
    </ul>
  </li>
    <li><a href="kontaktinformasjon.php" id="menykontakt">Kontakt </a></li>
    <li><a href="mininspirasjon.php" onmouseover="dropdown('drop2', 'menyinspirasjon')" onmouseout="notdropdown('drop2', 'menyinspirasjon')" id = "menyinspirasjon">Inspirasjon </a>
    <ul id="drop2" onmouseover="dropdown('drop2', 'menyinspirasjon')" onmouseout="notdropdown('drop2', 'menyinspirasjon')" style="visibility: hidden;">
      <li><a href="kaaseri.php" id="menykaaseri">Kåseri</a></li>
      <li><a href="fototips.php" id="menyfototips">Fototips</a></li>
    </ul>
    </li>
  <li><a href="blogg.php" id="menyopplevelser">&nbsp;Opplevelser</a></li>
</ul>
</div>
<div id="mobilmenu">
  <ul id= "mobilmenuinnhold">
    <li><a href="index.php" id="mobilmenyforside">Forside </a></li>
    <li><a href="galleri.php" id = "mobilmenygalleri">Galleri </a>
      <ul id="mobildrop1">
        <li><a href="kjop_pris.php"  id="mobilmenykjop">Kjøp</a></li>
      </ul>
    </li>
    <li><a href="kontaktinformasjon.php" id="mobilmenykontakt">Kontakt </a></li>
    <li><a href="mininspirasjon.php" id="mobilmenyinspirasjon">Inspirasjon </a>
      <ul id="mobildrop2">
        <li><a href="kaaseri.php" id="mobilmenykaaseri">Kåseri</a></li>
        <li><a href="fototips.php" id="mobilmenyfototips">Fototips</a></li>
      </ul>
    </li>
    <li><a href="blogg.php" id="mobilmenyopplevelser">Opplevelser</a></li>
  </ul>
</div>
