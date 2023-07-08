import PlayerCard from "./PlayerCard"
import {data} from "../helper/data"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const CardContainer = () => {
    //console.log(data);
  
  return (
      <>
      <Form.Control style={{marginBottom : "40px"}} type="text" placeholder="Search Player..."/>
      <Row className="g-5">
        
        {data.map((item,i) => (
          <Col key= {i} xs={6} lg={3} md = {4}>
        <PlayerCard  name = {item.name} img = {item.img} statistics={item.statistics}/>
        </Col>)  
        
        )}
        
        </Row>

        </>
  )
}

export default CardContainer