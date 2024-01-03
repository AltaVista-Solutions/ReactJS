import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Add from './Components/Add'
import Edit from './Components/Edit'
import Delete from './Components/Delete'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          <Route path='/delete/:id' element={<Delete/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
