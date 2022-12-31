const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rock = $('#rock');
        const paper = $('#paper');
        const scissors = $('#scissors');
        const playerOptions = [rock, paper, scissors];
        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach(option => {
            option.on('click', function() {
                const movesLeft = $('.movesLeft');
                moves++;
                movesLeft.text(`Moves left: ${10 - moves}`);
                movesLeft.css('font-size', '20px');
                movesLeft.css('color', 'white');
                movesLeft.css('margin-bottom', '18px');

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice);

                if(moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
        });
    };

    const winner = (player,computer) => {
        const result = $('.result');
        const playerScoreBoard = $('#player-score');
        const computerScoreBoard = $('#computer-score');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        switch (true) {
            case (player === computer):
                result.text('Tie!');
                break;
            case (player == 'rock'):
                if(computer == 'paper'){
                    result.text('Computer Won!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    computerScore++;
                    computerScoreBoard.text(computerScore);
                } else {
                    result.text('Player Won!');
                    result.css('margin-bottom', '2rem');
                    playerScore++;
                    playerScoreBoard.text(playerScore);
                }
                break;
            case (player == 'scissors'):
                if(computer == 'rock'){
                    result.text('Computer Won!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    computerScore++;
                    computerScoreBoard.text(computerScore);
                } else {
                    result.text('Player Won');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    playerScore++;
                    playerScoreBoard.text(playerScore);
                }
                break;
            case (player == 'paper'):
                if(computer == 'scissors'){
                    result.text('Computer Won!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    computerScore++;
                    computerScoreBoard.text(computerScore);
                } else {
                    result.text('Player Won!');
                    result.css('margin-bottom', '2rem');
                    result.css('font-size', '18px');
                    playerScore++;
                    playerScoreBoard.text(playerScore);
                }
                break;
            default:
                console.log("Invalid input");
        }
    }

    const gameOver = (playerOptions, movesLeft) => {
        const choose = $('.choose');
        const result = $('.result');

        playerOptions.forEach(option => {
            option.css('display', 'none');
        });

        choose.css('font-size', '2rem');
        choose.text('Game Over!');
        choose.css('color', 'white');
        choose.css('margin-bottom', '4rem');
        movesLeft.css('display', 'none');

        if (playerScore > computerScore) {
            result.css('font-size', '2rem');
            result.text('You won the game');
            result.css('color', '#308d46');
            result.css('margin-bottom', '4rem');
        } else if (playerScore < computerScore) {
            result.css('font-size', '2rem');
            result.text('You lost!');
            result.css('color', 'red');
            result.css('margin-bottom', '4rem');
        } else {
            result.css('font-size', '2rem');
            result.text('Tie');
            result.css('color', 'whitesmoke');
            result.css('margin-bottom', '4rem');
        }
    }

    const resetBtn = $('.reset');
    resetBtn.text('Restart' || 'Reset');
    resetBtn.css('display', 'flex');
    resetBtn.on('click', () => {
        window.location.reload();
    });
    playGame();
}
game();