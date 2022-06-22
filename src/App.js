import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Transcript from './components/Transcript';
import { getTrascript } from './services/api.service';

function App() {
  const [transcript, setTranscript] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <SearchForm
        onSubmit={
          async (symbol, year, quarter) => setTranscript(await getTrascript(symbol, year, quarter))
        } />
      <Transcript transcript={transcript} />
    </div>
  );
}

export default App;
