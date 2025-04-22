import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeProvider from './context/ThemeContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import CategoryNav from './components/CategoryNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';

const App = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider>
        <AnnouncementBar />
        <Navbar />
        <CategoryNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </Provider>
);

export default App;
