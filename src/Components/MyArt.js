import { useState, useEffect } from "react";
import { Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyArt() {
  const [myDrawing, setMyDrawing] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("myArt");
    console.log("data", JSON.stringify(data));
    if (data) {
      setMyDrawing(JSON.stringify(data));
    }
  }, []);

  return (
    <Row>
      <Card className="artCard">
        <Card.Img variant="top" src={myDrawing} alt="My art" />
      </Card>
    </Row>
  );
}

export default MyArt;
