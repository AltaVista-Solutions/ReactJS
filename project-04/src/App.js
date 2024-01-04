import logo from './logo.svg';
import './App.css';
import ComponentA from './Components/ContextAPI/ComponentA';
import { UserProvider } from './Components/ContextAPI/UserContext';
import Demo from './Components/HOC/Demo';
import ReduxDemo from './Components/ReactRedux/ReduxDemo';
import { Provider } from 'react-redux';
import CounterStore from './Components/ReactRedux/CounterStore';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value={"admin587"}>
          <ComponentA/>
      </UserProvider> */}
      {/* <Demo/> */}
      <Provider store={CounterStore}>
          <ReduxDemo/>
      </Provider>
      
        
    </div>
  );
}

export default App;
