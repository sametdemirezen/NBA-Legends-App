import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const PlayerCard = ({name, img, statistics}) => {
    console.log(name);
  return (
    <Container>
      <Row>
        <Col>
        <Image src = {img}></Image>
        </Col>
      </Row>
    </Container>
  )
}

export default PlayerCard