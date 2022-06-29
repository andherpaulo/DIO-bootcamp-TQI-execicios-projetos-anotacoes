const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

const placar = document.getElementsByClassName('pontuacao')[0];
const turno = document.getElementsByClassName('jogada')[0];
const avisoFinal = document.getElementsByClassName('mensagem')[0];
const avisoVencedor = document.getElementsByClassName('vencedor')[0];
const restart = document.getElementsByClassName('repetir')[0];

class score {
    constructor(score1, score2) {
        this._score1 = score1;
        this._score2 = score2;
        this.turn1 = false;
    }

    get score1() {
        return this._score1;
    }

    set score1(n) {
        this._score1 = n;
    }

    get score2() {
        return this._score2;
    }

    set score2(n) {
        this._score2 = n;
    }

    pontuar() {
        this.turn1 ? this._score1++ : this._score2++;
    }
}

const pontuacao = new score(0, 0);

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        pontuacao.pontuar();
        updateScore();
        endGame();
        return;
    }

    unflipCards();
    changeTurn();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function updateScore() {
    placar.innerHTML = `Jogador 1: ${pontuacao.score1} pontos<br>Jogador 2: ${pontuacao._score2} pontos`;
}

function endGame() {
    let todasVidaras = true;

    cards.forEach((card) => {
        if(!card.classList.contains('flip')) todasVidaras = false;
    });

    if(todasVidaras){
        avisoFinal.classList.add('encerrado');
        
        let mensagemFinal = '';
        if (pontuacao.score1 === pontuacao.score2){
            mensagemFinal = 'Os jogadores empataram!';
        }else if(pontuacao.score1 > pontuacao.score2){
            mensagemFinal = 'Jogador 1 foi o vencedor!';
        }else{
            mensagemFinal = 'Jogador 2 foi o vencedor!';
        }

        avisoVencedor.innerHTML = mensagemFinal;
    }
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 800)
}

function changeTurn() {
    pontuacao.turn1 = !pontuacao.turn1;
    
    setTimeout(() => {
        pontuacao.turn1 ? turno.innerHTML = 'Vez do Jogador 1!' : turno.innerHTML = 'Vez do Jogador 2!';
    }, 800);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function restartGame(){
    cards.forEach((card) => {
        card.classList.remove('flip');
    });

    avisoFinal.classList.remove('encerrado');
    
    if (pontuacao.score1 === pontuacao.score2) pontuacao.turn1 = !pontuacao.turn1;
    pontuacao.turn1 ? turno.innerHTML = 'Vez do Jogador 1!' : turno.innerHTML = 'Vez do Jogador 2!';


    [pontuacao._score1, pontuacao._score2] = [0, 0];
    updateScore();

    setTimeout(() => {
        (function shuffle() {
            cards.forEach((card) => {
                let ramdomPosition = Math.floor(Math.random() * 16);
                card.style.order = ramdomPosition;
            });
        })();
    }, 800);

    cards.forEach((card) => {
        card.addEventListener('click', flipCard);
    });

    resetBoard();
}

restart.addEventListener('click', restartGame);

restartGame();