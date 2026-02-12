import React from "react";
import Navbar from "./Components/NavbarComponents";
import CounterApp from "./CounterApp";
import InfoCard from "./infocard";
import ToDo from "./ToDo";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* <CounterApp /> */}
        <ToDo />
      </main>
    </>
  );
}

export default App;
