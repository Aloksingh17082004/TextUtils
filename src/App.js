
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
// states for dark mode
  const [mode,setmode]=useState('light')
  const [textclr,settextclr]=useState('dark')
  const [text,settext]=useState('Enable DarkMode')

//Dark mode function 

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      settextclr('light')
      settext('Disable DarkMode')
      document.body.style.backgroundColor="	#282828"
      showAlert("DarkMode has been enabled","success") 
    }
    else{
      setmode('light')
      settextclr('dark')
      settext('Enable DarkMode')
      document.body.style.backgroundColor="white"
      showAlert("DarkMode has been disabled","success") 
    }
  }

  // states for Alert
  const [alert, setalert] = useState(null)  
  const showAlert=(message,type)=>{
      setalert(
        {msg:message,
      type:type})

      setTimeout(() => {
        setalert(null)
      }, 1500);
  }


  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} textclr={textclr}  text={text}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Form showAlert={showAlert}  heading='Enter the text to be analysed' mode={mode}/>
   
    {/* <BrowserRouter>
     <Routes>
       <Route exact path='/' element={<Form showAlert={showAlert}  heading='Enter the text to be analysed' mode={mode}/>}></Route>
       <Route exact path='/about' element={<About/>}></Route>
     </Routes>
    </BrowserRouter> */}
    </div>
   </>
  
  );
}

export default App;
