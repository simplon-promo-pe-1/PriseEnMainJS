function somme(pUn, pDeux) {
	let nUn = Number(pUn);
	let nDeux = Number(pDeux);
	let resultat;
	if (isNaN(nUn) || isNaN(nDeux)) {
		resultat = "";
	} else {
		resultat = nUn + nDeux;
	}
	return resultat;
}