import { useState } from 'react';
import './App.css';
import ArtCard from './Components/ArtCard';

function App() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <ArtCard results={results} loading={loading}/>
    </div>
  );
}

export default App;
