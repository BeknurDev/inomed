import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from '@emotion/react';
import { lightMode, darkMode } from './theme';
import { useMediaQuery } from '@mui/material';
import { CoreContextProvider } from './context/CoreContext';
import Product from './pages/Product';

const App: FC = () => {
  const language = localStorage.getItem("lang") || "ru";
  const locale = {};
  const config = {};
  const isMobile = window.innerWidth < 768;
  // Check system color scheme (light/dark) using Media Query
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // State to store the current theme
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  // Effect to synchronize the state with localStorage if needed
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  // Store theme preference in localStorage when changed
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <CoreContextProvider value={{
      language,
      locale,
      config,
      isMobile,
    }} >
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </CoreContextProvider>
  );
};

export default App;
