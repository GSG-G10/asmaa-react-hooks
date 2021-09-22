import { useState, useEffect } from "react";
import "./App.css";

import { Container } from "react-bootstrap";
import ArtCard from "./Components/ArtCard";
import { getArtworks } from "./utils/getArtworks";

function App() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArtworks()
      .then((searchResults) => {
        if (searchResults && searchResults.data) {
          setResults(searchResults.data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <header></header>
      <Container fluid>
        {error ? (
          <p>Unable to retrieve results.</p>
        ) : (
          <ArtCard results={results} loading={loading} />
        )}
      </Container>
    </div>
  );
}

export default App;
