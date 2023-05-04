import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogue from './components/Catalogue';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/show/:id" element={<Summary />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
