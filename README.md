# Soccer Practice Game ⚽

A browser-based interactive game where players move a soccer ball across a field to score goals, featuring boundary constraints and score tracking.

![Game Preview](screenshot.png) *Add screenshot here*

## Features

- **Click-to-Move Mechanics**: Move the ball to clicked positions with smooth animations
- **Goal Detection System**: Automatic scoring when ball enters goal area
- **Boundary Constraints**: Ball stays fully visible within field boundaries
- **Score Tracking**: Persistent score counter with visual feedback
- **Responsive Design**: Works at various screen sizes and aspect ratios
- **Visual Effects**: 
  - Smooth ball movement transitions
  - Goalpost flash animation on scoring
  - Material design-inspired UI elements

## Technologies Used

- **HTML5**: Game structure and semantic markup
- **CSS3**: 
  - Flexbox layout
  - CSS transitions and animations
  - Modern gradient effects
- **Vanilla JavaScript**:
  - Class-based architecture
  - DOM manipulation
  - Coordinate calculations
  - Event handling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/soccer-practice-game.git

2. Navigate to project directory:
   ```bash
   cd football-move

3. Open `index.html` in modern web browser

## How To Play

- 1. Click anywhere on the green field

- 2. Ball moves smoothly to clicked position

- 3. Score goals by moving ball into right-side goalpost

- 4. Track your score in the top scoreboard

- 5. Ball automatically stays within field boundaries

## Customization

- Modify game parameters in style.css and index.js:
   ```css
   /* Change field dimensions */
  .field {
  width: 800px;  /* Modify field width */
  height: 500px; /* Modify field height */
  }

  /* Customize ball appearance */
  .ball {
  width: 50px;          /* Ball size */
  background: #ffffff;   /* Ball color */
  box-shadow: 0 5px 15px rgba(0,0,0,0.2); /* Shadow effect */
  }

   ```javascript
      // Adjust goal detection margins
    calculateGoalBounds() {
    const goalRect = this.goalpost.getBoundingClientRect();
    this.goalBounds = {
      left: goalRect.left + 10,   // Left detection margin
      right: goalRect.right - 10, // Right detection margin
      top: goalRect.top + 20,     // Top detection margin
      bottom: goalRect.bottom - 20 // Bottom detection margin
    };
  }