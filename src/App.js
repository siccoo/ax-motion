import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';


import "./App.css";
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <section className="ax__hero">
        <motion.h1 className="ax__hero__text">Our Sectors</motion.h1>
      </section>

    </Router>
    );
};

export default App;

