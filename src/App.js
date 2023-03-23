// CSS
import './App.css';

// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// COMPONENTS
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// PAGES
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={ <Home />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
