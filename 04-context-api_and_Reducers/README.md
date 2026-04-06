# Context API & Reducers

Advanced state management project demonstrating React Context API and useReducer hook for managing complex application state.

## 🎯 Learning Objectives

- React Context API for global state
- useReducer hook for complex state logic
- State providers and consumers
- Avoiding prop drilling
- Action-based state updates
- Context best practices

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
├── App.jsx              # Main application component
├── main.jsx             # Entry point
├── components/          # UI components
├── store/               # Context providers and reducers
├── dummy-products.js    # Sample data
└── assets/              # Images and static files
```

## 🛠️ Built With

- React 19.0.0
- Vite 4.4.5
- ESLint for code quality

## 📝 Key Features

- Global state management with Context API
- Complex state updates using reducers
- Shopping cart functionality
- Product management
- No prop drilling
- Scalable state architecture

## 💡 Concepts Covered

- Creating and using Context
- useContext hook
- useReducer hook
- Reducer functions and actions
- Context Provider patterns
- Combining multiple contexts
- Performance considerations with Context

## 🎓 When to Use

- **Context API**: When you need to share state across many components without prop drilling
- **useReducer**: When state logic is complex or involves multiple sub-values

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
