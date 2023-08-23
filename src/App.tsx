import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";
import { Counter } from "./components/counter/counter";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/MuiMode";
import { CounterTwo } from "./components/counter-two/CounterTwo";

function App() {
  return (
    
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["HTML", "CSS"]} /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
      </div>
    </AppProviders>
  );
}

export default App;
