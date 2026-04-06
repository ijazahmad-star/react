# Forms & User Input

Comprehensive form handling project demonstrating input validation, custom form hooks, and controlled components in React.

## 🎯 Learning Objectives

- Form handling in React
- Input validation patterns
- Custom hooks for forms
- Controlled vs. uncontrolled components
- Form state management
- Validation feedback
- Accessibility in forms

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
├── components/      # Form components
├── hooks/           # Custom form hooks
├── util/            # Validation utilities
│   └── validation.js
└── assets/          # Images and static files
```

## 🛠️ Built With

- React 19.0.0
- Vite 4.3.9
- JavaScript (JSX)

## 📝 Key Features

- Controlled form inputs
- Real-time validation
- Custom validation rules
- Error message display
- Form submission handling
- Input state management
- Custom form hooks
- Reusable validation utilities

## 💡 Concepts Covered

### Form Handling

- Controlled components
- Two-way binding
- Form submission
- Preventing default behavior

### Validation

- On-change validation
- On-blur validation
- On-submit validation
- Custom validation functions
- Error state management

### Custom Hooks

- `useInput` - Managing individual input state
- Form-specific hooks
- Reusable validation logic

## 🎓 Validation Patterns

### Real-time Validation

```jsx
const handleInputChange = (event) => {
  const value = event.target.value;
  setEnteredValue(value);

  // Validate
  const isValid = validateInput(value);
  setIsValid(isValid);
};
```

### On-Blur Validation

```jsx
const handleInputBlur = () => {
  setIsTouched(true);
  // Show errors only after user interaction
};
```

### Form-Level Validation

```jsx
const handleSubmit = (event) => {
  event.preventDefault();

  if (!formIsValid) return;

  // Submit form data
};
```

## ✅ Validation Rules

Common validation implemented:

- Required fields
- Email format
- Minimum/maximum length
- Pattern matching
- Custom validation functions

## 🎨 User Experience

- Show errors only after user interaction
- Clear visual feedback
- Accessible error messages
- Disabled submit when invalid
- Clear success states

## 🔧 Utility Functions

Located in `util/validation.js`:

- Email validation
- Required field validation
- Pattern validators
- Custom rule builders

## 📚 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Best Practices

1. **Controlled Components**: Always use controlled inputs for React forms
2. **Validation Feedback**: Provide clear, immediate feedback
3. **Accessibility**: Use proper labels and ARIA attributes
4. **Error States**: Show errors only after interaction
5. **Reusability**: Extract common logic into custom hooks
6. **User Experience**: Don't overwhelm users with errors

## 🔄 Form State Management

Track multiple states:

- Input values
- Touched state (has user interacted?)
- Validity state
- Error messages
- Form submission state
