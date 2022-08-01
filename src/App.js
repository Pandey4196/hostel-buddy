import React, { useState } from "react";
import Landing from "./components/Landing";
import { BrowserRouter as Router,  
  Route,} from "react-router-dom";
import SignupForm from "./components/SignupForm"
import Intro from "./components/Intro";
import LoginForm from "./components/LoginForm";
import OrderDetails from "./components/OrderDetails";

function App() {

    return (
      <>
        <SignupForm />
      </>
  );
}

export default App;
