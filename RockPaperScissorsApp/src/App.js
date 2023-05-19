import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <h1>Header</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
