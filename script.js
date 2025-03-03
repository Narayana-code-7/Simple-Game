var player = document.getElementById('player');
var obstacle = document.getElementById('obstacle');
var homeScreen = document.getElementById('homeScreen');
var start = document.getElementById('startBtn');
var backgroundMusic = new Audio("bg.mp3");
// start.innerHTML = '<i class="fas fa-play"></i>';    
start.addEventListener('click', () => {
    homeScreen.style.display = 'none';
    player.style.display = 'block';
    obstacle.style.display = 'block';
    obstacle.classList.add('obstacleAni');
    setTimeout(() => {
        backgroundMusic.play();
    }, 1000);
});

var howToPlay = document.getElementById('howToPlay');
var hTp = document.getElementById('hTp');
var closeBtn = document.getElementById('close');

howToPlay.addEventListener('click', () => {
    hTp.style.scale = '1';
    hTp.style.opacity = '1';
});

closeBtn.addEventListener('click', ()=> {
    hTp.style.scale = '0';
    hTp.style.opacity = '0';
})



cross = true
score = 0;
audioGameOver = new Audio("new.mp3");
document.onkeydown = function(e){
    console.log('KeyCode is: ', e.keyCode);
    if(e.keyCode===38){
        player = document.getElementById('player');
        playerY = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'))
        player.style.bottom = playerY + 300 + "px";
        // player.classList.add('playerUp')
        setTimeout(() => {
            player.style.bottom = "0px";
            // player.classList.remove('playerUp')
        },300);
    }
    if(e.keyCode===32){
        player = document.getElementById('player');
        playerY = parseInt(window.getComputedStyle(player, null).getPropertyValue('bottom'))
        player.style.bottom = playerY + 300 + "px";
        // player.classList.remove('playerUp')
        setTimeout(() => {
            player.style.bottom = "0px";
            // player.classList.remove('playerUp')
        },300);
    }
    if(e.keyCode===39){
        player = document.getElementById('player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 150 + 'px';
        player.style.transform = 'scaleX(' + 1 + ')';
    }
    if(e.keyCode===37){
        player = document.getElementById('player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 150) + 'px';
        player.style.transform = 'scaleX(' + -1 + ')';
    }
}
setInterval(() => {
    player = document.getElementById('player');
    gameOver = document.getElementById('gameOver');
    obstacle = document.getElementById('obstacle');
    gameContainer = document.getElementById('gameContainer');

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);
    // console.log(offsetX,offsetY);

    if (offsetX < 123 && offsetY < 100) {
        gameOver.style.visibility = 'visible';
        gameOver.innerHTML = "Game Over - Press <kbd>ctrl</kbd> + <kbd>r</kbd> to Restart. <br>Your score is " + score;
        obstacle.classList.remove('obstacleAni');
        gameContainer.style.background = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(../bg.png)";
        // player.classList.add('die');
        audioGameOver.play();
        backgroundMusic.pause();
        player.style.bottom = "-30vh";
    }
else if(offsetX < 145 && cross){
    score+=1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);
    setTimeout(() => {
        var animationDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        var newAnimationDuration = (animationDuration - 0.1) + "s";
        obstacle.style.animationDuration = newAnimationDuration;
    }, 500);
}
}, 100);
function updateScore(score) {
    var scoreContainer = document.getElementById('scoreContainer');
    scoreContainer.innerHTML = "Score: " + (score - 1) ;
}
