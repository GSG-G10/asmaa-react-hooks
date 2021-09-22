import { Row, Col, Card, Spinner } from "react-bootstrap";
import { imageUrl } from "../utils/getArtworks";

function ArtCard ({ results, loading}) {
  
  if (loading) {
    return (
      <Row>
        <Spinner className="spin" animation="border" role="status">
          <span className="loading">Loading...</span>
        </Spinner>
      </Row>
    );
  }

  if (!(results && results.length)) {
    return null;
  }

  return (
    <Row>
      {results.map((result) => (
        <Col xs={12} md={4} lg={3} key={result.id}>
          <Card>
            <Card.Img
              variant="top"
              src={imageUrl(result.image_id, 250)}
              alt={result.thumbnail?.alt_text}
            />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ArtCard;
