import logo from './logo.svg';
import './App.css';
import Message from './Components/01_FunctionalComponents/Message';
import Hello from './Components/01_FunctionalComponents/Hello';
import Greet from './Components/02_ClassComponents/Greet';
import Product from './Components/03_Props/Product';
import Employee from './Components/03_Props/Employee';
import StateDemo from './Components/04_State/StateDemo';
import StateDemo1 from './Components/04_State/StateDemo1';

function App() {
  return (
    <div>
      {/* <Message/>
      <hr/>
      <Hello/>
      <hr/>
      <Greet/> */}
      {/* <Product id="1" name="Iphone 15" price="78900">
        Category:Electronics
      </Product>

      <hr/>

      <Employee id="10852" name="John" designation="Developer">
        Location:Hyderbad
      </Employee> */}

      {/* <StateDemo/> */}
      <StateDemo1/>
    </div>
  );
}

export default App;
