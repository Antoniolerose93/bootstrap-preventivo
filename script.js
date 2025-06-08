console.log('preventivo')

// recupero il form
const formElement = document.getElementById('form-preventivo')
// recupero i dati presenti all'interno del form
const inputName = formElement.querySelector('#name')
const inputSurname = formElement.querySelector('#surname')
const inputEmail = formElement.querySelector('#email')
const lavoroSelezionato = formElement.querySelector('#lavoro')
const codiceSconto = formElement.querySelector('#coupon')
const couponFeedbackElement = formElement.querySelector('#coupon-result')
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
	console.log(scontoValue, 'codice sconto inserito')

//imposto il prezzo orario, il prezzo base e e calcolo il prezzo di listino dei lavori
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
	console.log(prezzoBase, 'Prezzo di listino')
	

//stabilisco gli sconti validi
	const codiceScontovalido = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']
	let prezzoFinale;

//calcolo il prezzo definitivo alla luce del codice sconto inserito dall'utente
	if (codiceScontovalido.includes(scontoValue)) {
    	prezzoFinale = prezzoBase * 0.75;
		prezzoOutputElement.innerHTML = `${prezzoFinale.toFixed(2)} &euro;`
		couponFeedbackElement.innerHTML = 'Codice sconto valido. Hai diritto al 25% di sconto'; 
	
	}  else {
		prezzoFinale = prezzoBase
		prezzoOutputElement.innerHTML = `${prezzoFinale.toFixed(2)} &euro;` 
		couponFeedbackElement.innerHTML = 'Codice sconto non valido';
	} 
		console.log(prezzoFinale, 'Prezzo applicato')
		
//formatto il prezzo 
		const formattaPrezzo = prezzoFinale.toFixed(2)
		const [cifreIntere, cifreDecimali] = formattaPrezzo.split(".");
		prezzoOutputElement.innerHTML = `<strong>${cifreIntere}</strong>.${cifreDecimali}&euro;`


})



