<div id="menu">
      <a href="index.html" id="mobillogo"><img src="img/logohvit.png" class="logohvit" id="mobilbilde" class="disable-select"></a>
      <div id="menyknapp" onclick="mobil()">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
        <ul id="menyinnhold">
        <li><a href="index.html" id="hjembilde"><img src="img/logohvit.png" class="logohvit" class="disable-select"></a></li>
        <li><a href="index.html" id="menyforside">Forside </a></li>
        <li><a href="galleri.html" onmouseover="dropdown('drop')" onmouseout="notdropdown('drop')" id = "menygalleri">Galleri </a>
        <ul id="drop" onmouseover="dropdown('drop')" onmouseout="notdropdown('drop')" style="visibility: hidden;">
          <li><a href="kjop_pris.html"  id="menykjop">Kjøp</a></li>
        </ul>
      </li>
        <li><a href="blogg.html" id="menyopplevelser">Opplevelser </a></li>
        <li><a href="mininspirasjon.html" onmouseover="dropdown('drop2')" onmouseout="notdropdown('drop2')" id = "menyinspirasjon">Inspirasjon </a>
        <ul id="drop2" onmouseover="dropdown('drop2')" onmouseout="notdropdown('drop2')" style="visibility: hidden;">
          <li><a href="kaaseri.html" id="menykaaseri">Kåseri</a></li>
          <li><a href="fototips.html" id="menyfototips">Fototips</a></li>
        </ul>
        </li>
      <li><a href="kontaktinformasjon.html" id="menykontakt">Kontakt</a></li>
    </ul>
    </div>
    <div id="mobilmenu">
      <ul id= "mobilmenuinnhold">
        <li><a href="index.html" id="mobilmenyforside">Forside </a></li>
        <div class = "venstreforpil"><li><a href="galleri.html" id = "mobilmenygalleri">Galleri </a></li></div>
        <div id="pil"><li id="mobilmenypil2"><a href="#" onclick="mobilchange("ikkevis1")">&rsaquo;</a></div></li>
        <div id = "ikkevis1">
        <div id="pil2"><li id="mobilmenypil2"><a href="#" onclick="mobilchange()">&lsaquo;</a></div></li>
        <div id="hoyreforpil"><li><a href="kjop_pris.html"  id="mobilmenykjop">Kjøp</a></li></div>
      </div>
        <li><a href="kontaktinformasjon.html" id="mobilmenykontakt">Kontakt </a></li>
        <div class="venstreforpil"><li><a href="mininspirasjon.html" id="mobilmenyinspirasjon">Insp. </a></li></div>
        <div id="pil3"><li id="mobilmenypil2"><a href="#">&rsaquo;</a></div></li>

        <div id = "ikkevis2">
        <li><a href="kaaseri.html" id="mobilmenykaaseri">Kåseri</a></li>
        <li><a href="fototips.html" id="mobilmenyfototips">Fototips</a></li>
      </div>
        <li><a href="blogg.html" id="mobilmenyopplevelser">Opplevelser</a></li>
      </ul>
    </div>
