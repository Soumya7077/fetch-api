
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Modal } from './components/modal/modal';
import { FetchData } from './components/tabular/tabular';

function App() {
  return (
    <div className="App">
      <h1 className='text-white bg-dark text-center m-2 p-2'>Employee Grid</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FetchData/>}></Route>          
          <Route path='/:id' element = {<Modal/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
