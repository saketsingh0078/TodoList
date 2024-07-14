import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/Signup";
import Circle from "./components/Circle";

function App() {
  return (
    <div>
      <Signup />
      <div className="relative w-screen h-screen">
        <Circle />
      </div>
    </div>
  );
}

export default App;
