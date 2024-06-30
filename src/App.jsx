import React from 'react';
import { StarsCanvas } from './components/canvas';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedback, Home, Navbar, ParticlesContainer, Tech, Works } from './components';
const App = () => {
  return(
  <>
  
  <BrowserRouter>
    <div className = "relative z-0">
    <ParticlesContainer></ParticlesContainer>
      <div className = "relative z-1">
        <Navbar/>
        <Home/>
        
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