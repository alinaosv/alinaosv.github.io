import React from 'react';
import Header from './blocks/header/index';
import Footer from './blocks/footer/index';
import About from './pages/about';

function App() {
  return (
    <div className="layout">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
