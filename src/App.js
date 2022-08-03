import React, { useState } from "react";
import Landing from "./components/Landing";
import { BrowserRouter as Router,  
  Route,Routes,} from "react-router-dom";
import SignupForm from "./components/SignupForm"
import Intro from "./components/Intro";
import LoginForm from "./components/LoginForm";
import OrderDetails from "./components/OrderDetails";



function App() {

    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/landing" element={<Landing/>} />
          
            
          
        </Routes>
      </Router>
      </>
  );
}

export default App;
