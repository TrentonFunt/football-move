document.querySelector('.field').addEventListener('click', function (event) {
  const field = this;
  const ball = field.querySelector('.ball');

  // Get field position relative to viewport
  const fieldRect = field.getBoundingClientRect();

  // Calculate click position relative to field
  const clickX = event.clientX - fieldRect.left;
  const clickY = event.clientY - fieldRect.top;

  // Calculate maximum valid positions (accounting for ball size)
  const maxX = field.clientWidth - ball.offsetWidth;
  const maxY = field.clientHeight - ball.offsetHeight;

  // Calculate ball position (centered under pointer, clamped to field boundaries)
  const ballX = Math.max(0, Math.min(clickX - ball.offsetWidth / 2, maxX));
  const ballY = Math.max(0, Math.min(clickY - ball.offsetHeight / 2, maxY));

  // Apply new position with CSS transform for better performance
  ball.style.left = `${ballX + ball.offsetWidth / 2}px`;
  ball.style.top = `${ballY + ball.offsetHeight / 2}px`;
});