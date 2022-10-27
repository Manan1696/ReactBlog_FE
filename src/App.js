import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Nav from './Components/Nav';
import Hollywood from "./Components/Hollywood";
import Bollywood from "./Components/Bollywood";
import Food from "./Components/Food";
import SiteName from './Components/toplogo';
import Tourism from "./Components/Tourism";
import Technology from "./Components/Technology";
import Blog from "./Components/Blog";
import { useLocation } from "react-router-dom";


function App() {
  <SiteName />
  const location = useLocation();
  console.log("Final page location", location);
    return (
    <>    
          <div className="container">
      
          <Nav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hollywood" element={<Hollywood />} />
          <Route path="/Bollywood" element={<Bollywood />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Tourism" element={<Tourism />} />
          <Route path="/Technology" element={<Technology />} />
          {location.state !== null && (
            <Route path="/Blog" element={<Blog />} />
          )}
          </Routes>
          </div>
    </>
  );
}

export default App;
