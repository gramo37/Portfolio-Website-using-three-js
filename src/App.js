import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Project from './components/Projects/Project';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import MyAlert from './components/Alert/MyAlert';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
