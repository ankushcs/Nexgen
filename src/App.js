import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import ProductAndServices from './components/ProductAndServices'
import MissionAndVision from './components/MissionAndVision'
import OurValues from './components/OurValues'
import ContactUs from './components/ContactUs'
import OurCoreCompetencies from './components/OurCoreCompetencies'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/mission-and-vision" element={<MissionAndVision/>}/>
          <Route path="/our-values" element={<OurValues/>}/>
          <Route path="/our-core-competencies" element={<OurCoreCompetencies/>}/>
          <Route path="/product-and-services" element={<ProductAndServices/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
