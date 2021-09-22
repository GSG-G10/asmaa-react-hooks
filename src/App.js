import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Container } from "react-bootstrap";
import ArtCard from "./Components/ArtCard";
import { getArtworks } from "./utils/getArtworks";
import ArtworkNavbar from "./Components/ArtworkNavbar";
import Landing from "./Components/Landing";
import { CanvasSpace } from "./Components/CanvasSpace";

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
    <Router>
      <ArtworkNavbar />

      <Switch>
        <Route exact path="/">
          <Landing />
          <Container>
            {error ? (
              <p>Unable to retrieve results.</p>
            ) : (
              <ArtCard results={results} loading={loading} />
            )}
          </Container>
        </Route>
        <Route exact path="/draw">
            <CanvasSpace />
        </Route>
        <Route exact path="/myart">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
