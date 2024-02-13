import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const user = {
    name: "Umesh Patil",
    pass: 123,
  };
  return (
    <>
      <h1 className="bg-violet-400 text-black p-4 rounded-xl mb-4">
        Hello Umesh!!!
      </h1>
      <Card username="Umesh-Patil" btnText="Click me" />
      {/* <Card username="Sachin-Patil" btnText="Visit me" /> */}
      <Card username="Sachin-Patil" />
    </>
  );
}

export default App;
