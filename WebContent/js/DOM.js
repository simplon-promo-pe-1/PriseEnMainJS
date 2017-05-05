	function calculer() {
		let un = document.getElementById('a').value;
		let deux = document.getElementById('b').value;	
		let zoneResultat = document.getElementById('c');
		zoneResultat.value = somme(un, deux);
		zoneResultat.className = 'fondSaisieRemplie';
		console.log('calculé');
	}