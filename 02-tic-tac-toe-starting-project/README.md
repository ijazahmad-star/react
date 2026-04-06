# Tic-Tac-Toe Game

A classic tic-tac-toe game built with React, demonstrating state management, game logic, and interactive UI components.

## 🎯 Learning Objectives

- Advanced state management
- Conditional rendering
- Game logic implementation
- Winner calculation algorithms
- Component communication
- Derived state concepts

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Project

```bash
npm run dev
```

The game will run on `http://localhost:5173`

## 🎮 How to Play

1. Two players take turns (X and O)
2. Click on any empty square to place your mark
3. First player to get 3 marks in a row (horizontal, vertical, or diagonal) wins
4. Players can customize their names
5. Game log shows move history
6. Rematch option to start a new game

## 📁 Project Structure

```
src/
├── App.jsx                  # Main game component
├── components/
│   ├── Player.jsx           # Player name and active indicator
│   ├── GameBoard.jsx        # Game board grid
│   ├── Log.jsx              # Move history log
│   └── GameOver.jsx         # Game over modal
├── winning-combinations.js  # Winning patterns
└── assets/                  # Images and static files
```

## 🛠️ Built With

- React 19.0.0
- Vite 4.3.9
- JavaScript (JSX)

## 📝 Key Features

- Two-player gameplay
- Editable player names
- Active player highlighting
- Winner detection
- Draw detection
- Move history tracking
- Rematch functionality
- Immutable state updates

## 💡 Concepts Covered

- Complex state management with multiple state variables
- Deriving state from props
- Lifting state up
- Immutability in React
- Two-way binding
- Conditional rendering patterns

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
