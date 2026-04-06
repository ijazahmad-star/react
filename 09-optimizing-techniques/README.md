# React Optimization Techniques

Performance optimization project demonstrating React memoization techniques, preventing unnecessary re-renders, and best practices for React performance.

## 🎯 Learning Objectives

- useMemo hook for expensive calculations
- useCallback hook for function memoization
- React.memo for component memoization
- Performance profiling
- Avoiding unnecessary re-renders
- Optimization best practices

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
├── components/      # Optimized UI components
├── log.js           # Performance logging utility
└── assets/          # Images and static files
```

## 🛠️ Built With

- React 19.0.0
- Vite 4.3.9
- JavaScript (JSX)

## 📝 Key Features

- Component render tracking
- Memoized expensive calculations
- Optimized event handlers
- Prevents unnecessary re-renders
- Performance comparison examples
- Logging for render detection

## 💡 Concepts Covered

### useMemo

- Memoizing expensive calculations
- When to use vs. when not to use
- Dependency array optimization

### useCallback

- Memoizing function references
- Preventing prop changes
- Use with React.memo

### React.memo

- Component memoization
- Custom comparison functions
- When to apply memoization

## 🎓 When to Optimize

✅ **Use optimization when:**

- Component has expensive calculations
- Child components re-render unnecessarily
- Passing callbacks to memoized child components
- Large lists or complex UI

❌ **Don't optimize prematurely:**

- Simple components
- Components that rarely re-render
- When optimization adds more complexity than benefit

## ⚡ Performance Tips

1. Profile before optimizing
2. Use React DevTools Profiler
3. Measure the actual performance impact
4. Don't memoize everything
5. Keep dependency arrays minimal
6. Consider code splitting for large apps

## 📊 Measuring Performance

Use the included logging utility (`log.js`) to track component renders:

```jsx
import { log } from './log.js';

function Component() {
  log('<ComponentName>', <log_level>);
  // component code
}
```

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔍 Debugging Tips

- Open React DevTools
- Use the Profiler tab
- Check render counts
- Look for unnecessary re-renders
- Review component dependencies
