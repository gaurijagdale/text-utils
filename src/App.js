import Alert from './components/Alert';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Base from './components/Base';
import FontConv from './components/FontConv';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg) => {
    setAlert({
      msg: msg,
      // type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'DBlue';
      // showAlert("Dark mode has been enabled");
      document.title = "TextUtils-Dark Mode";
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'LBlue';
      document.title = "TextUtils-Light Mode";
    }
  }

  return (
    <>
    <BrowserRouter>
      <Nav mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/Text-Converter" element={<Home mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
          <Route path="/Font-Changer" element={<FontConv />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
