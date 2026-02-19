import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/movie/:id" 
              element={
                <ProtectedRoute>
                  <MovieDetails />
                </ProtectedRoute>
              } 
            />
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
