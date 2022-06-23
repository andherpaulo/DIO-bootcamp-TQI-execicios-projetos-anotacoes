var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment () {
	if(currentNumber < 10){
		currentNumber++;	
		currentNumberWrapper.innerHTML = currentNumber;
	}
	if(currentNumber < 0){
		currentNumberWrapper.style.color = 'red';
	}else{
		currentNumberWrapper.style.color = 'black';
	}
}

function decrement () {
	if(currentNumber > -10){
		currentNumber--;
		currentNumberWrapper.innerHTML = currentNumber;
	}
	if(currentNumber < 0){
		currentNumberWrapper.style.color = 'red';
	}else{
		currentNumberWrapper.style.color = 'black';
	}
}

const subtracao = document.getElementById("subtrair");
subtracao.addEventListener("click", decrement);

const adicao = document.getElementById("adicionar");
adicao.addEventListener("click", increment);