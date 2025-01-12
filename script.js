// Variables
let cat = document.getElementById('cat');
let obstacle = document.getElementById('obstacle');
let scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;

// Control del salto
document.addEventListener('keydown', function(e) {
  if (e.code === 'Space' && !isJumping) {
    isJumping = true;
    cat.style.animation = 'jump 0.5s ease-out forwards';
    setTimeout(function() {
      cat.style.animation = '';
      isJumping = false;
    }, 500);
  }
});

// Animación de salto
@keyframes jump {
  0% { bottom: 0; }
  50% { bottom: 80px; }
  100% { bottom: 0; }
}

// Lógica del obstáculo
function moveObstacle() {
  let obstaclePosition = obstacle.offsetLeft;
  if (obstaclePosition < 0) {
    score++;
    scoreDisplay.textContent = 'Puntuación: ' + score;
    obstacle.style.right = '-30px';
  } else {
    obstacle.style.right = obstaclePosition + 5 + 'px';
  }
  if (obstaclePosition > 0 && obstaclePosition < 50 && !isJumping) {
    alert('¡Game Over! Tu puntuación fue ' + score);
    score = 0;
    scoreDisplay.textContent = 'Puntuación: ' + score;
    obstacle.style.right = '-30px';
  }
}

// Actualizar movimiento
setInterval(moveObstacle, 20);
