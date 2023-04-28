const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const audioJump = document.querySelector('.audio-jump');
const gameOver = document.querySelector('.game-over');
const start = document.querySelector('start')

const jump = () => {
    mario.classList.add('jump');

    audioJump.currentTime = 0.1;
    audioJump.volume = 0.1;
    audioJump.play();

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver.currentTime = 0.1;
        gameOver.volume = 0.2;
        gameOver.play();
        
        document.getElementById("start").innerHTML = "GAME OVER";

        clearInterval(loop);
    }

}, 10);

// qualquer tecla
document.addEventListener('keydown', jump);
// click mouse
document.addEventListener('click', jump);
// toque na tela
document.addEventListener('touchstart', jump);