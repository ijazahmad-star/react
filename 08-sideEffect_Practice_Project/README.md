# Side Effects Practice - Quiz Application

A practical implementation of React side effects with a quiz/questions feature, demonstrating advanced useEffect patterns and timer management.

## 🎯 Learning Objectives

- Advanced useEffect patterns
- Timer and interval management
- Progress tracking
- Component lifecycle management
- Async operations with effects
- Cleanup best practices

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

The application will run on `http://localhost:5173`

## 📁 Project Structure

```
src/
├── App.jsx          # Main application component
├── main.jsx         # Entry point
├── components/      # UI components
├── questions.js     # Quiz questions data
└── assets/          # Images and static files
```

## 🛠️ Built With

- React 19.0.0
- Vite 4.3.9
- JavaScript (JSX)

## 📝 Key Features

- Interactive quiz application
- Timed questions with progress bars
- Automatic progression
- Answer validation
- Score tracking
- Timer cleanup on component unmount
- Question shuffling

## 💡 Concepts Covered

- useEffect with timers (setTimeout, setInterval)
- Cleanup functions for timers
- Effect dependencies with state
- Sequential effects
- Progress tracking with effects
- Preventing memory leaks
- Effect coordination

## 🎮 How It Works

1. Questions are presented one at a time
2. Each question has a time limit
3. Progress bar shows remaining time
4. Automatic advancement after timeout
5. Score calculation at the end
6. Proper cleanup prevents memory leaks

## ⚡ Performance Considerations

- Timers are properly cleaned up
- Effects run only when necessary
- Dependency arrays optimized
- No memory leaks from unmounted components

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
