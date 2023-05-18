import "./App.css";
import React from "react";
import Main from "./layouts/Main";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import './styles/index.scss'
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
