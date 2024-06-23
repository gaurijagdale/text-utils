import Alert from './components/Alert';
import Home from './components/Home';
import React, { useState } from 'react';

function App() {

    const [mode,setmode]=useState('light');
    const [alert,setAlert]=useState(null);

    const showAlert=(msg)=>{
      setAlert({
        msg:msg,
        // type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
    }

    const toggleMode=()=>{
      if(mode==='light'){
        setmode('dark');  
        document.body.style.backgroundColor='DBlue';
        showAlert("Dark mode has been enabled");
        document.title="TextUtils-Dark Mode";
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='LBlue';
        showAlert("Light mode has been enabled");
        document.title="TextUtils-Light Mode";
      }
    }

  return (
    <>
      <Alert alert={alert}/>
     <Home mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
    </>
  );
}

export default App;
