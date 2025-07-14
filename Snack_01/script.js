// SVOLGIMENTO SNACK_01
// Dichiaro un array di oggetti 'bicycles' che contine oggetti con proprietà 'bycicleName' (nome) e weight (peso)

const bicycles = [
	{
		bicycleName: "Grazia",
		weight: 20
	},
	{
		bicycleName: "Grazina",
		weight: 15
	},
	{
		bicycleName: "Graziella",
		weight: 10
	},

];

// Ho bisogno di trovare l'oggetto che ha il weight col valore minore e stamparlo in console

// Dichiaro una variabile 'lightest' che conterrà il valore weight minore, partendo dalla posizione [0] dell'array bicycles (questo avviene in modo arbitrario)
let lightest = bicycles[0];

// Ciclo la lunghezza dell'array
for (let i=0; i<bicycles.length; i++){
	// Se il valore weight dell'oggetto che sto ciclando è minore del valore di di quello definito allora lo assegno a lightest
	if(bicycles[i].weight<lightest.weight){
		lightest = bicycles[i];
	}
};
// Stampo in console
console.log(lightest);