class FootballGame {
  constructor() {
    // Game state
    this.score = 0;
    this.isInGoal = false;

    // DOM elements
    this.field = document.querySelector('.field');
    this.ball = document.querySelector('.ball');
    this.goalpost = document.querySelector('.goalpost');
    this.scoreDisplay = document.querySelector('#score');

    // Initialize game
    this.initializeGame();
  }

  initializeGame() {
    // Calculate initial goal bounds
    this.calculateGoalBounds();
    this.resetBallPosition();

    // Set up event listeners
    this.field.addEventListener('click', (e) => this.moveBall(e));
    this.ball.addEventListener('transitionend', () => this.checkGoal());
    window.addEventListener('resize', () => this.calculateGoalBounds());
  }

  calculateGoalBounds() {
    // Get goalpost position with 5px inner margin for net area
    const goalRect = this.goalpost.getBoundingClientRect();
    this.goalBounds = {
      left: goalRect.left + 5,
      right: goalRect.right - 5,
      top: goalRect.top + 10,
      bottom: goalRect.bottom - 10
    };
  }

  resetBallPosition() {
    const centerX = this.field.clientWidth / 2;
    const centerY = this.field.clientHeight / 2;
    this.ball.style.left = `${centerX}px`;
    this.ball.style.top = `${centerY}px`;
  }

  moveBall(event) {
    // Get field dimensions and position
    const fieldRect = this.field.getBoundingClientRect();

    // Calculate click position relative to field
    const clickX = event.clientX - fieldRect.left;
    const clickY = event.clientY - fieldRect.top;

    // Calculate ball radius once
    const ballRadiusX = this.ball.offsetWidth / 2;
    const ballRadiusY = this.ball.offsetHeight / 2;

    // Calculate valid boundaries for BALL CENTER
    const minX = ballRadiusX;
    const maxX = this.field.clientWidth - ballRadiusX;
    const minY = ballRadiusY;
    const maxY = this.field.clientHeight - ballRadiusY;

    // Clamp coordinates to keep ball fully visible
    const clampedX = Math.max(minX, Math.min(clickX, maxX));
    const clampedY = Math.max(minY, Math.min(clickY, maxY));

    // Apply positions directly (transform handles centering)
    this.ball.style.left = `${clampedX}px`;
    this.ball.style.top = `${clampedY}px`;
  }

  checkGoal() {
    // Get current ball position
    const ballRect = this.ball.getBoundingClientRect();
    const ballCenter = {
      x: ballRect.left + ballRect.width / 2,
      y: ballRect.top + ballRect.height / 2
    };

    // Check if ball center is in goal bounds
    const isGoal = ballCenter.x >= this.goalBounds.left &&
      ballCenter.x <= this.goalBounds.right &&
      ballCenter.y >= this.goalBounds.top &&
      ballCenter.y <= this.goalBounds.bottom;

    // Update score and state
    if (isGoal && !this.isInGoal) {
      this.score++;
      this.scoreDisplay.textContent = this.score;
      this.goalpost.classList.add('goal-effect');
      setTimeout(() => {
        this.goalpost.classList.remove('goal-effect');
      }, 800);
    }
    this.isInGoal = isGoal;
  }
}

// Initialize game when document loads
document.addEventListener('DOMContentLoaded', () => {
  new FootballGame();
});