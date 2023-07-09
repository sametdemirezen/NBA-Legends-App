
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
const PlayerCard = ({name, img, statistics }) => {
    //console.log(name);
    
    const [isVisible, setIsVisible] = useState(true);
  return (
    <Card className='bg-dark' style={{height : "300px"}} onClick={ () => (setIsVisible(!isVisible))
      
    } >
    {isVisible ? (
    <Card.Img variant="top" src={img} style={{height: "250px"}}/>
  ) : (
<Card.Body className="text-light m-auto mt-5 ">
  <p> <FontAwesomeIcon className='icons' icon={faBasketballBall}/> {statistics[0]}</p>
  <p><FontAwesomeIcon className='icons' icon={faBasketballBall}/>{statistics[1]}</p>
  <p><FontAwesomeIcon className='icons' icon={faBasketballBall}/>{statistics[2]}</p>
  <p><FontAwesomeIcon className='icons' icon={faBasketballBall}/>{statistics[3]}</p>
  
</Card.Body>
) }
<Card.Title className='text-light names'>{name}</Card.Title>
</Card>
  )
}

export default PlayerCard