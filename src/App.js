import logo from './logo.svg';
import './App.css';



import { StopwatchContainer } from './components/StopwatchContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {

  return (
    <div className="App">
      <Provider store= {store}>
      <StopwatchContainer/>
      </Provider>
    </div>
  );
}

export default App;
