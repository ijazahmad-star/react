# React Learning Projects

A comprehensive collection of React projects demonstrating various concepts, patterns, and best practices. Each project focuses on specific React features and modern web development techniques.

## 📚 Table of Contents

- [Overview](#overview)
- [Projects](#projects)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## Overview

This repository contains multiple React projects built as part of a structured learning journey. Each project is self-contained and focuses on specific React concepts, from fundamentals to advanced topics.

## Projects

### 1. **Starting Project**

📁 `01-starting-project/`

Introduction to React essentials and basic component structure.

**Key Concepts:**

- React components
- JSX syntax
- Props and state basics
- Event handling

---

### 2. **Tic-Tac-Toe Game**

📁 `02-tic-tac-toe-starting-project/`

Classic tic-tac-toe game implementation demonstrating state management and game logic.

**Key Concepts:**

- Component state management
- Conditional rendering
- Game logic implementation
- Winner calculation algorithms

---

### 3. **Calculator**

📁 `03-calculator/`

A functional calculator application showcasing user input handling and computation logic.

**Key Concepts:**

- State management for calculations
- User input handling
- Mathematical operations
- Component composition

---

### 4. **Context API & Reducers**

📁 `04-context-api_and_Reducers/`

Advanced state management using Context API and useReducer hook.

**Key Concepts:**

- React Context API
- useReducer hook
- Global state management
- State providers and consumers
- Complex state logic

---

### 5. **Projects Management Application**

📁 `06-projects-management-project/`

A project management tool with Tailwind CSS for styling.

**Key Concepts:**

- Tailwind CSS integration
- CRUD operations
- Component refs
- Form handling
- Modal management

**Technologies:**

- React
- Tailwind CSS
- PostCSS

---

### 6. **Side Effects & useEffect**

📁 `07-useSideEffects-project/`

Exploration of side effects in React using the useEffect hook.

**Key Concepts:**

- useEffect hook
- Side effects management
- Cleanup functions
- Dependency arrays
- Lifecycle methods

---

### 7. **Side Effects Practice**

📁 `08-sideEffect_Practice_Project/`

Practical implementation of side effects with quiz/questions functionality.

**Key Concepts:**

- useEffect advanced patterns
- Timers and intervals
- Component lifecycle
- Async operations

---

### 8. **Optimization Techniques**

📁 `09-optimizing-techniques/`

Performance optimization strategies and React best practices.

**Key Concepts:**

- useMemo hook
- useCallback hook
- React.memo
- Performance optimization
- Avoiding unnecessary re-renders

---

### 9. **Database Connection**

📁 `10-ConnectDatabase/`

Full-stack application with backend integration and HTTP requests.

**Key Concepts:**

- HTTP requests
- Backend integration
- Express.js server
- RESTful APIs
- Custom hooks for data fetching
- Loading and error states

**Technologies:**

- Frontend: React
- Backend: Express.js, Node.js

---

### 10. **Forms & User Input**

📁 `11-form_userinput/`

Comprehensive form handling and user input validation.

**Key Concepts:**

- Form handling
- Input validation
- Custom form hooks
- Controlled components
- Form state management

---

### 11. **Advanced Forms with Form Actions**

📁 `12-adv-form-formAction/`

Advanced form handling patterns with backend integration.

**Key Concepts:**

- Form actions
- Server-side validation
- Advanced form patterns
- State management for forms
- Backend form processing

**Technologies:**

- Frontend: React
- Backend: Express.js with JSON database

---

### 12. **First Project**

📁 `first_project/`

Initial React project setup and experimentation.

**Key Concepts:**

- React project setup
- Basic component structure
- Vite configuration

---

## Tech Stack

### Frontend

- **React** 19.0.0 - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (selected projects)
- **PostCSS** - CSS processing

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Body-parser** - Request parsing middleware

### Tools

- **ESLint** - Code linting
- **Vite** - Fast development server and build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Running Projects

Each project is independent and can be run separately:

1. **Navigate to the desired project:**

   ```bash
   cd 01-starting-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The application will typically run on `http://localhost:5173`

### For Projects with Backend

Some projects (10-ConnectDatabase, 12-adv-form-formAction) include a backend:

1. **Start the backend server:**

   ```bash
   cd backend
   npm install
   node app.js
   ```

2. **In a new terminal, start the frontend:**
   ```bash
   npm install
   npm run dev
   ```

## Project Structure

Each project follows a similar structure:

```
project-name/
├── index.html           # Entry HTML file
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── public/              # Static assets
└── src/
    ├── App.jsx          # Main App component
    ├── main.jsx         # Entry point
    ├── index.css        # Global styles
    ├── components/      # React components
    ├── assets/          # Images, fonts, etc.
    └── ...              # Project-specific directories
```

## Learning Path

For the best learning experience, it's recommended to explore the projects in order:

1. Start with fundamentals (01, 02, 03)
2. Progress to state management (04)
3. Learn styling and project structure (06)
4. Master side effects (07, 08)
5. Optimize performance (09)
6. Integrate with backends (10)
7. Master advanced forms (11, 12)

## Scripts

Common npm scripts available in most projects:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (where configured)

## Contributing

This is a personal learning repository, but suggestions and improvements are welcome!

## License

This project is for educational purposes.

---

**Happy Learning! 🚀**
