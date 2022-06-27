function alteraTema(){
	changeClasses();	// É UMA BOA PRÁTICA CADA FUNÇÃO FAZER UMA
	changeText();		// COISA ESPECÍFICA (separei as funções)
}

function changeClasses(){
	btn.classList.toggle(darkModeClass);
	titulo.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
}

function changeText(){
	const lightMode = "Light Mode";				// evita erros de digitação
	const darkMode = "Dark Mode";

	if(body.classList.contains(darkModeClass)){	// utilizar o método "contais" para verificar se o elemento possui a classe que queremos
		btn.innerHTML = lightMode;			// utilizar o método "innerHTML" para alterar o que estiver dentro do elemento
		titulo.innerHTML = darkMode + " ON";
		return;
	}

	btn.innerHTML = darkMode;
	titulo.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode';	// como repete várias vezes essa string, é bom criar uma constante para alterar somente aqui no código, se necessário
const btn = document.getElementById('mode-selector');
const titulo = document.getElementById('page-title');	//selecionar todos elementos de uma vez!
const body = document.getElementsByTagName('body')[0];	//selecionar o primeiro do array, já na hora que seleciona "[0]"
const footer = document.getElementsByTagName('footer')[0];

btn.addEventListener('dblclick', alteraTema);		// FUNÇÃO É SEM OS PARÊNTESES!!!