import React from 'react'
import Hero from './components/Body/Hero';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-[#1e1e1e]">
      <Header />
      <Hero/>
      <Footer />
    </div>
  );
}

export default App;
