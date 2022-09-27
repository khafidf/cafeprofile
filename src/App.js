import React from 'react';
import './App.css';
import { Navbar, Profile, Slider, Place, Map, Footer } from './components'

function App() {
  return (
    <div>
        <Navbar />
        <Profile />
        <Slider />
        <Place />
        <Map />
        <Footer />
    </div>
  );
}

export default App;