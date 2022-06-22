import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Transcript from './components/Transcript';
import { getTrascript } from './services/api.service';
import { formatTranscriptContent } from './services/formatter.service';
import { Alert, Spinner } from 'react-bootstrap';

function App() {
  const [transcript, setTranscript] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <NavBar />
      {error && <Alert variant="danger" onClose={() => setError(null)} dismissible>
        <Alert.Heading>{error}</Alert.Heading>
      </Alert>}
      <SearchForm
        onSubmit={
          async (symbol, year, quarter) => {
            setLoading(true);
            const content = await getTrascript(symbol, year, quarter);
            if (!content?.length) {
              setTranscript(null);
              setError('No Data Found');
            } else {
              setTranscript(formatTranscriptContent(content));
              setError(null);
            }
            setLoading(false);
          }
        } />
      {loading && <Spinner className="mt-5" animation="grow" />}
      {!loading && transcript && <Transcript transcript={transcript} />}
    </div>
  );
}

export default App;
