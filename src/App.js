import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

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
    </Router>
    );
};

export default App;

