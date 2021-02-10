import logo from './logo.svg';
import './App.css';



import { StopwatchContainer } from './components/StopwatchContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useState } from 'react';


function App() {

  const[visible,setVisible]=useState(true)
  const change =()=>{
    setVisible((val)=>!val)
  }



  return (
    <div className="App">
      <Provider store= {store}>
        {visible && <StopwatchContainer/> }
      
      </Provider>
      <button onClick={change}>btn</button>
    </div>
  );
}

export default App;
