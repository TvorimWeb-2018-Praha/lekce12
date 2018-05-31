/* Sem přijde náš kód */

function zobrazNeboSkryjFormular() {
    var body = document.querySelector("body");
    body.classList.toggle("zobrazit");
    var formular = document.querySelector("#formular");
    formular.classList.toggle("zobrazit");

    // Vycisti vsechna pole ve formulari
    document.querySelector("#formular-pole").reset();
}

var pridat = document.querySelector("#pridatPasazera");
pridat.addEventListener("click", zobrazNeboSkryjFormular);

var formCancel = document.querySelector("#cancelTlac");
formCancel.addEventListener("click", zobrazNeboSkryjFormular);

var formOk = document.querySelector("#okTlac");
formOk.addEventListener("click", function() {
    var jmeno = document.querySelector("#jmeno");
    var prijmeni = document.querySelector("#prijmeni");
    var vek = document.querySelector("#vek");
    var sleva = document.querySelector("#sleva");
    var cena = 150;
    var kod = "<tr><td>" + jmeno.value + "</td>" +
                "<td>" + prijmeni.value + "</td>" +
                "<td>" + vek.value + "</td>" +
                "<td>" + sleva.value + "</td>" +
                "<td>" + cena + " Kč</td></tr>";

    var tabulka = document.querySelector("#pasazeri");
    tabulka.innerHTML = tabulka.innerHTML + kod;

    zobrazNeboSkryjFormular();
});