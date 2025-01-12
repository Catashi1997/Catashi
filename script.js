// Variables
let cat = document.getElementById('cat');
let obstacle = document.getElementById('obstacle');
let scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;

// Función para manejar el salto
document.addEventListener('keydown', function(e) {
  if (e.code === 'Space' && !isJumping) {
    isJumping = true;
    cat.classList.add('jump'); // Activa la animación de salto
    setTimeout(function() {
      cat.classList.remove('jump'); // Elimina la animación después de que termine
      isJumping = false;
    }, 500); // El tiempo debe coincidir con la duración de la animación
  }
});

// Lógica del obstáculo (solo para probar si el juego está funcionando)
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

// Mueve el obstáculo
setInterval(moveObstacle, 20);
