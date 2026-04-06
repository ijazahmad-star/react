# Project Management Application

A project management tool built with React and Tailwind CSS, featuring task organization, modal dialogs, and refs for DOM manipulation.

## 🎯 Learning Objectives

- Tailwind CSS integration with React
- Using refs for DOM manipulation
- Portal components for modals
- CRUD operations
- Form handling and validation
- Component organization

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
│   ├── NewProject.jsx
│   ├── ProjectsSidebar.jsx
│   └── Modal.jsx
└── assets/          # Images and static files
```

## 🛠️ Built With

- React 19.0.0
- Tailwind CSS 3.3.3
- PostCSS & Autoprefixer
- Vite 4.4.5

## 📝 Key Features

- Create, read, update, and delete projects
- Add tasks to projects
- Modal dialogs for user interactions
- Sidebar navigation
- Responsive design with Tailwind CSS
- Form validation
- Clean and modern UI

## 💡 Concepts Covered

- useRef hook for DOM access
- forwardRef for component refs
- Portal components for modals
- Tailwind CSS utility classes
- Component composition
- State management for CRUD operations
- Form handling best practices

## 🎨 Styling

This project uses Tailwind CSS for styling with a custom configuration:

- Utility-first CSS approach
- Responsive design utilities
- Custom PostCSS configuration

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
