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

- Click anywhere on the green field

- Ball moves smoothly to clicked position

- Score goals by moving ball into right-side goalpost

- Track your score in the top scoreboard

- Ball automatically stays within field boundaries

## Customization

- Modify game parameters in style.css:
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

## Technical Implementation

### Boundary System
- Uses getBoundingClientRect() for accurate position tracking

- Implements coordinate clamping with Math.max()/Math.min()

- Accounts for ball radius in position calculations

### Goal Detection
- Virtual goal bounds calculation

- Ball center position checking

- State management to prevent score spam

### Animation System
- CSS transitions for smooth movement

- Keyframe animations for goal effects

- Cubic-bezier timing functions for natural motion