import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/Signup";
import Circle from "./components/Circle";
import { Accordian } from "./components/Accordian";
import appStore from "../utility/appStore";
import { Provider, useSelector } from "react-redux";
import { Body } from "./components/Body";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
