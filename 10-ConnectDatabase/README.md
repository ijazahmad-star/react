# Full-Stack Database Connection

A full-stack application demonstrating React frontend integration with Express.js backend, HTTP requests, and RESTful API patterns.

## 🎯 Learning Objectives

- HTTP requests in React
- Backend integration
- RESTful API design
- Custom hooks for data fetching
- Loading and error states
- CORS handling
- Full-stack application architecture

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

This project has both frontend and backend:

#### 1. Install Backend Dependencies

```bash
cd backend
npm install
```

#### 2. Install Frontend Dependencies

```bash
# From project root
npm install
```

### Running the Project

You need to run both backend and frontend:

#### 1. Start the Backend Server

```bash
cd backend
node app.js
```

Backend runs on `http://localhost:3000`

#### 2. Start the Frontend (in a new terminal)

```bash
# From project root
npm run dev
```

Frontend runs on `http://localhost:5173`

## 📁 Project Structure

### Frontend

```
src/
├── App.jsx              # Main application component
├── main.jsx             # Entry point
├── components/          # UI components
├── customHooks/         # Custom hooks for data fetching
├── http.js              # HTTP utility functions
└── assets/              # Images and static files
```

### Backend

```
backend/
├── app.js               # Express server
├── data/                # JSON data files
│   ├── places.json
│   └── user-places.json
└── images/              # Static image files
```

## 🛠️ Built With

### Frontend

- React 19.0.0
- Vite 4.3.9

### Backend

- Node.js
- Express.js 4.18.2
- Body-parser 1.20.2

## 📝 Key Features

- RESTful API endpoints
- GET and PUT requests
- CORS enabled for cross-origin requests
- Custom hooks for data fetching
- Loading states management
- Error handling
- Location-based functionality
- User places management

## 🔌 API Endpoints

- `GET /places` - Fetch all available places
- `GET /user-places` - Fetch user's selected places
- `PUT /user-places` - Update user's places

## 💡 Concepts Covered

### Frontend

- Custom hooks (`useHttp`, etc.)
- Async/await with React
- Error boundaries
- Loading states
- HTTP error handling
- Component lifecycle with data fetching

### Backend

- Express.js server setup
- CORS configuration
- File system operations
- JSON data handling
- RESTful routing
- Static file serving

## 🎓 Custom Hooks Pattern

Creating reusable hooks for data fetching:

```jsx
// Custom hook for HTTP requests
function useHttp(url, options) {
  // Hook logic
}

// Using in component
const { data, isLoading, error } = useHttp("/api/endpoint");
```

## 🔧 Configuration

### CORS Settings

Backend is configured to allow all origins for development:

```javascript
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, PUT
```

### Data Persistence

Data is stored in JSON files in the `backend/data/` directory.

## 📚 Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend

- `node app.js` - Start Express server

## 🐛 Troubleshooting

- **CORS errors**: Ensure backend is running first
- **Connection refused**: Check backend port (3000)
- **Data not loading**: Verify JSON files exist in backend/data/
- **Image not showing**: Check backend/images/ directory

## 🔐 Security Notes

This is a development setup. For production:

- Restrict CORS to specific origins
- Add authentication
- Validate all inputs
- Use environment variables for configuration
- Implement rate limiting
