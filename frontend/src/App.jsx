import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={ <Home/> }></Route>
              <Route path="*" element={<Notfound/>} />
            </Routes>
          </div> 
        </BrowserRouter>

      </div>
      
    </>
  )
}

export default App
