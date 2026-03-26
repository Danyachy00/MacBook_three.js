import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";

const App = () => {
  return (
      <main>
          <NavBar />
          <Hero/>
          <ProductViewer/>
      </main>
  );
};

export default App;