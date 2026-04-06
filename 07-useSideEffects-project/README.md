# Side Effects with useEffect

Exploring React side effects using the useEffect hook, demonstrating lifecycle methods, cleanup functions, and dependency management.

## 🎯 Learning Objectives

- Understanding useEffect hook
- Side effects in React
- Cleanup functions
- Dependency arrays
- Effect timing and execution
- Synchronization with external systems

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
├── data.js          # Application data
├── loc.js           # Location utilities
└── assets/          # Images and static files
```

## 🛠️ Built With

- React 19.0.0
- Vite 4.3.9
- JavaScript (JSX)

## 📝 Key Features

- Location-based functionality
- Data fetching and synchronization
- Timer-based operations
- Cleanup on component unmount
- Effect dependency management
- External system synchronization

## 💡 Concepts Covered

- useEffect hook basics
- Effect cleanup functions
- Dependency array usage
- Running effects once vs. repeatedly
- Avoiding infinite loops
- Synchronizing with browser APIs
- Effect execution timing
- Common useEffect patterns

## 🎓 When to Use useEffect

- Fetching data from APIs
- Setting up subscriptions
- Manually changing the DOM
- Logging
- Setting up timers
- Synchronizing with external systems

## ⚠️ Common Pitfalls

- Missing dependencies in dependency array
- Infinite loops from incorrect dependencies
- Not cleaning up side effects
- Using effects for data transformations (use useMemo instead)

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
