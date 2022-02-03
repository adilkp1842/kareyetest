import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen/SignUpScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </>
  );
}

export default App;
