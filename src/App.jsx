import { SpeedInsights } from "@vercel/speed-insights/react";
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedback, Home, Navbar, ParticlesContainer, Tech, Works } from './components';
import { StarsCanvas } from './components/canvas';

import '../dotenv.config.js';



const App = () => {
  return(
  <>
  
  <BrowserRouter>
    <div className = "relative z-0">
    <ParticlesContainer></ParticlesContainer>
      <div className = "relative z-1">
        <Navbar/>
        <Home/>
        <SpeedInsights/>
        {/* avatar here in the future */}
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedback/>
      <div className = "relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>

    </div>
  
  </BrowserRouter>
    
    
    
    
    
    </>
    
    
  );
}
export default App