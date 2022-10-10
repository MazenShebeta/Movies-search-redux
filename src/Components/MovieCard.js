import react from 'react'
import Card from 'react-bootstrap/Card';

const MovieCard = (title, description, url) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {description} </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default MovieCard;