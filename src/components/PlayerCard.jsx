
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
const PlayerCard = ({name, img, statistics }) => {
    //console.log(name);
    
    const [isVisible, setIsVisible] = useState(true);
  return (
    <Card style={{height : "300px"}} onClick={ () => (setIsVisible(!isVisible))
      
    } >
    {isVisible ? (
    <Card.Img variant="top" src={img} style={{height: "250px"}}/>
  ) : (
<Card.Body>
  <p>{statistics[0]}</p>
  <p>{statistics[1]}</p>
  <p>{statistics[2]}</p>
  <p>{statistics[3]}</p>
  
</Card.Body>
) }
<Card.Title>{name}</Card.Title>
</Card>
  )
}

export default PlayerCard