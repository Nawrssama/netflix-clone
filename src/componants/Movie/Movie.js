import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ModalMovie from '../ModalMovie/ModalMovie';
import { useState } from 'react';




function Movie(props) {

  const [showFlag, setShowFlag] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const handleShow = (item) => {
    console.log(item);
    setClickedMovie(item);
    setShowFlag(true);
  }

  const handleclose = () => {
    setShowFlag(false);
  }


  return (
    <div >

      <Col>
        <Card style={{ width: '18rem' }} className="card">
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.a.poster_path}`} />
          <Card.Body>
            <Card.Title>{props.a.title}</Card.Title>
            <Card.Text>
              <p>{props.a.release_date}</p>

            </Card.Text>
            <Button variant="primary" onClick={() => {
              handleShow(props.a)
            }}>add to favorite</Button>
          </Card.Body>
        </Card>
      </Col>
      <ModalMovie showFlag={showFlag} handleclose={handleclose} clickedMovie={clickedMovie} />
    </div>
  )
}

export default Movie;