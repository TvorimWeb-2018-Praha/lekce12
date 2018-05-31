// zkontroluje zda hrac vyhral
function vyhral(hrac) {
	var deska = document.querySelector('#deska'),
		radky = document.querySelectorAll("#deska tr").length,
		sloupce = document.querySelectorAll("#deska tr:first-child > td").length,
		vyhra = 3; // pocet potrebny na vyhru
	var sousedi = [
		[0, 1], // vpravo
		[1, 1], // vpravo dolu
		[1, 0], // dolu
		[1, -1] // vlevo dolu
	];
	var i, j, s, m, n;
	var pocet;

	for (i = 0; i < radky; i++) {
		for (j = 0; j < sloupce; j++) {
			if (deska.rows[i].cells[j].innerText != hrac) {
				continue;
			}

			for (s = 0; s < sousedi.length; s++) {
				m = i; // vychozi pozice pro kontrolu rady ve zvolenem smeru
				n = j;
				pocet = 0; // pocet stejnych dlazdic v rade

				// projdeme vsechny dazdice od vychoziho bodu v danem smeru
				while (m >= 0 && n >= 0 && m < radky && n < sloupce && deska.rows[m].cells[n].innerText == hrac) {
					pocet++;
					m += sousedi[s][0];
					n += sousedi[s][1];
				}

				if (pocet === vyhra) {
					// presne XX dlazdic v rade = vyhra
					return true;
				} else if (pocet > vyhra) {
					// pri vice nez XX dlazdic v rade se podle pravidel pokracuje
					return false;
				}
			}
		}
	}

	// nevyhral
	return false;
}
