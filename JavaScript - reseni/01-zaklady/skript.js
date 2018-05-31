
// tady je místo pro náš program

var a;
a = 5;
zobraz(a);

var jmeno;
jmeno = "Jůlie";
zobraz(jmeno);

var prijmeni;
prijmeni = "Nováková";
zobraz(jmeno + " " + prijmeni);

















// --------------------------------------

// funkce, ktera zobrazi predany text uvnitr elementu s id="vysledek"
function zobraz(txt) {
	document.querySelector('#vysledek').textContent += txt + '\n';
}
