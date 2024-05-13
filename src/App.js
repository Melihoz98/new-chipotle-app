import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Header from './components/Header';
import Home from './pages/Home';

import Contact from './pages/Contact';
import Job from './pages/Job';
import Menu from './pages/Menu';
//import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/job" element={<Job />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      {/*<Footer /> */}
    </Router>
   
    
  );
}

export default App;
