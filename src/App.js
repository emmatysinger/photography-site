import React, { useContext } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from './context/CursorContext'; //cursor


const App = () => {
  const {cursorVariants, cursorBG} = useContext(CursorContext)
  return <>
    <Router>
      <Header />
      <AnimRoutes />
      <Footer />
      
    </Router>
    {/* cursor */}
    
  </>
};

export default App;
