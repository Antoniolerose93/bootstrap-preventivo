console.log('preventivo')

// recupero il form
const formElement = document.getElementById('form-preventivo')
// recupero i dati presenti all'interno del form
const inputName = formElement.querySelector('#name')
const inputSurname = formElement.querySelector('#surname')
const inputEmail = formElement.querySelector('#email')
const lavoroSelezionato = formElement.querySelector('#lavoro')
const codiceSconto = formElement.querySelector('#coupon')
const prezzoOutputElement = formElement.querySelector('#prezzo')

console.log(formElement, inputName, inputSurname, inputEmail, lavoroSelezionato, codiceSconto, prezzoOutputElement)


// evento submit
formElement.addEventListener('submit', function (event) {
	event.preventDefault() // blocco l'invio del form
	console.log('submit del form', event)

//leggo il valore inserito nella select lavoro
	let lavoroValue = lavoroSelezionato.value
	console.log(lavoroValue)

//leggo il valore inserito nel codice sconto
	let scontoValue = codiceSconto.value
	console.log(scontoValue)

//imposto il prezzo orario, il prezzo base e e calcolo il prezzo finale dei lavori
	const oreRichieste = 10

	let prezzoOrario;

	if (lavoroValue === 'backend' ) {
		prezzoOrario = 20.50 
	} else if (lavoroValue === 'frontend'){
		prezzoOrario = 15.30
	} else if (lavoroValue === 'analisi') {
		prezzoOrario = 33.60
	} else if (lavoroValue ==='') {
		prezzoOrario = 0
	}	

	let prezzoBase = prezzoOrario * oreRichieste
	
	let prezzoFinale;

//stabilisco gli sconti validi
	const codiceScontovalido = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']


	if (codiceScontovalido.includes(scontoValue)) {
    	prezzoFinale = prezzoBase * 0.75;
		prezzoOutputElement.innerHTML = `${prezzoFinale.toFixed(2)} &euro; - Sconto applicato 25%;` 
	
	}  else {
		prezzoFinale = prezzoBase
		prezzoOutputElement.innerHTML = `${prezzoFinale.toFixed(2)} &euro; - Codice sconto non valido. Non hai diritto ad uno sconto;`
		
	} 

})



