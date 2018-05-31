// tady je místo pro náš program

var jmeno;
jmeno = "Luděk";

zobraz(jmeno);
















// --------------------------------------

// funkce, ktera zobrazi predany text uvnitr elementu s id="vysledek"
function zobraz(txt) {
	document.querySelector('#vysledek').textContent += txt + '\n';
}
