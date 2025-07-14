// SVOLGIMENTO SNACK_02
// Dichiaro un array di oggetti 'footballTeams' che contine oggetti con proprietà 'teamName' (nome, unica inizializzata), 'score' (punti fatti), 'receivedFouls' (falli subiti)

const footballTeams = [
	{
		teamName: "Manchester United FC",
		score: 0,
		receivedFouls: 0
	},
	{
		teamName: "Barcelona FC",
		score: 0,
		receivedFouls: 0
	},
	{
		teamName: "Bayern Munich FC",
		score: 0,
		receivedFouls: 0
	}
];

// Ho bisogno di aggiornare i valori 'score' e 'receivedFouls' con un numero randomico

// Creo un nuovo array dove inserisco degli oggetti con i valori già definiti e creo una variabile che conterrà gli oggetti con i valori aggiornati
const footballTeamsUpdated = [];

// Ciclo l'array, dichiaro una variabile per contenere i valori aggiornati, mantenendo il valore 'teamName' come lo stesso, mi servo di math.floor e math.random per score (da 0 a 90) e per receivedFouls (da 0 a 5) e pusho tutto nel nuovo array footballTeamsUpdated
for(let i=0; i<footballTeams.length; i++){
	const updatedValues = {
		teamName: footballTeams[i].teamName,
		score: Math.floor(Math.random() * 91),
		receivedFouls: Math.floor(Math.random() * 6)
	};
footballTeamsUpdated.push(updatedValues);
};
// Stampo in console
console.log(footballTeamsUpdated);

// Ho bisogno di mostrare in un ulteriore array solamente gli elementi 'teamName' e 'receivedFouls' a partire dall'array aggiornato in precedenza e stampare in console questo nuovo array 

// Creo un array che contiene oggetti le cui proprietà riportate saranno solamente 'teamName' e 'receivedFouls'
const footballTeamsNew = [];

// Ciclo l'array aggiornato e dichiaro una variabile 'onlyTwoValues' (che contiene solo due valori richiesti e presi direttamente dai valori aggiornati) e la pusho nel nuovo array di oggetti dichiarato in precedenza
for(let i=0; i<footballTeamsUpdated.length; i++){
	const onlyTwoValues = {
		teamName: footballTeamsUpdated[i].teamName, // Sto puntando all'array aggiornato, non all'originale
		receivedFouls: footballTeamsUpdated[i].receivedFouls // Sto puntando all'array aggiornato, non all'originale
	};
footballTeamsNew.push(onlyTwoValues);
};

// Stampo in console
console.log(footballTeamsNew);

