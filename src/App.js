import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/interface/Navbar";
import "./components/styles/app.css";
import BackgroundParticles from "./components/interface/BackgroundParticles";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BackgroundParticles />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
