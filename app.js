(function() {
    const playerOne = document.getElementById('playerScore');
    const playerTwo = document.getElementById('playertwoScore');
    const winDisplay = document.querySelector('p span');
    const inputScore = document.getElementById('inputScore');
    const playerOneBtn = document.getElementById('btn_one');
    const playerTwoBtn = document.getElementById('btn_two');
    const game_Reset = document.getElementById('btn_reset');
    let p1Score = 0;
    let p2Score = 0;
    let winingScore = 5;
    let gameOver = false;


    playerOneBtn.addEventListener('click', () => {
        p1Score += 1;
        if (!gameOver) {
            winner(p1Score, winingScore);
            playerOne.textContent = p1Score;
        }

    });

    playerTwoBtn.addEventListener('click', () => {
        if (!gameOver) {
            p2Score += 1;
            winner(p2Score, winingScore);
            playerTwo.textContent = p2Score;
        }
    });

    function winner(oldScore, winingScore) {
        if (oldScore === winingScore) {

            if (p1Score === winingScore) {
                playerOne.classList.add('winnerColor');
            } else {
                playerTwo.classList.add('winnerColor');
            }

            gameOver = true;
            playerOneBtn.setAttribute('disabled', 'disabled');
            playerTwoBtn.setAttribute('disabled', 'disabled');
        }
    }

    inputScore.addEventListener('change', () => {
        let number = winDisplay.textContent = Number(inputScore.value);
        winingScore = number;
        inputScore.value = '';
        reset();
    });

    function reset() {
        p1Score = 0;
        p2Score = 0;
        gameOver = false;
        playerOne.textContent = 0;
        playerTwo.textContent = 0;
        playerOneBtn.removeAttribute('disabled', 'disabled');
        playerTwoBtn.removeAttribute('disabled', 'disabled');
        playerOne.classList.remove('winnerColor');
        playerTwo.classList.remove('winnerColor');
    };

    game_Reset.addEventListener('click', reset);
})();