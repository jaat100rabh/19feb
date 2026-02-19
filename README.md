# Netflix Clone Frontend

A production-ready Netflix frontend clone built with React, Vite, and modern web technologies.

## 🚀 Features

### Authentication System
- User signup and login functionality
- JWT-like authentication using localStorage
- Protected routes for authenticated users
- Context API for authentication state management
- Logout functionality

### Movie Features
- Browse movies from OMDB API
- Search movies by title
- View detailed movie information
- Responsive movie grid layout
- Pagination for search results

### UI/UX
- Netflix-inspired dark theme
- Responsive design for all devices
- Smooth animations and transitions
- Loading states and error handling
- Professional and modern interface

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **State Management**: Context API
- **HTTP Client**: Axios
- **API**: OMDB API
- **Styling**: Modern CSS (no Tailwind)
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
 ├── assets/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── MovieCard.jsx
 │    └── ProtectedRoute.jsx
 ├── context/
 │    └── AuthContext.jsx
 ├── pages/
 │    ├── Login.jsx
 │    ├── Signup.jsx
 │    ├── Home.jsx
 │    └── MovieDetails.jsx
 ├── services/
 │    └── api.js
 ├── styles/
 │    ├── global.css
 │    ├── Navbar.css
 │    ├── Auth.css
 │    ├── MovieCard.css
 │    ├── Home.css
 │    └── MovieDetails.css
 ├── App.jsx
 └── main.jsx
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your OMDB API key:
     ```
     VITE_OMDB_API_KEY=your_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Authentication
1. **Sign Up**: Create a new account with name, email, and password
2. **Login**: Access your account with email and password
3. **Protected Routes**: Home page and movie details require authentication

### Movie Features
1. **Browse**: View popular movies on the home page
2. **Search**: Use the search bar to find specific movies
3. **Movie Details**: Click on any movie to view detailed information
4. **Pagination**: Navigate through multiple pages of search results

## 🎨 Design Features

- **Dark Theme**: Netflix-inspired black and red color scheme
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Hover Effects**: Interactive elements with smooth transitions
- **Loading States**: User-friendly loading indicators
- **Error Handling**: Graceful error messages and fallbacks

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Mobile**: Below 480px

## 🌐 API Integration

The application uses the OMDB API for movie data:
- **Base URL**: `https://omdbapi.com/`
- **Authentication**: API key via environment variables
- **Features**: Movie search, details, and pagination

## 🔒 Security Features

- Environment variable protection for API keys
- Input validation and sanitization
- Protected route implementation
- Secure localStorage usage

## 🚀 Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes only. All movie data and images are provided by the OMDB API.

## 🙏 Acknowledgments

- OMDB API for movie data
- Netflix for design inspiration
- React community for excellent tools and libraries
