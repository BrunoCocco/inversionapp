import Header from './components/Header';
import Botones from './components/Botones';
import Main from './components/Main';
import Footer from './components/Footer';
import "./App.css";
import { useState } from 'react';

function App() {
  const [vista, setVista] = useState("");

  return (
    <>

    <Header />
    
    <Botones  setVista={setVista} />

    <Main vista={vista} setVista={setVista} />


    <Footer/>

    </>
  );
}

export default App;
