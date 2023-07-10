import PlayerCard from "./PlayerCard"
import {data} from "../helper/data"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
const CardContainer = () => {
    //console.log(data);
    const [filteredData, setFilteredData] = useState(data);
    const [searchTerm, setSearchTerm] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const getPlayers = (event) => {
      setSearchTerm(event.target.value);
      if (filteredData.length === 0){
        setIsEmpty(true);
      }
    };
  
    useEffect(() => {
      const results = data.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    }, [searchTerm]);
  
  return (
    <div>
      <Form.Control style={{marginBottom : "40px", maxWidth: "500px", margin : "auto"}} type="text" placeholder="Search Player..." onChange={getPlayers}/>
      <div className="d-flex justify-content-center mt-5 row-container" >
      <Row className="g-3 p-3 container">
      { isEmpty ? <h4 className="text-warning">There is no results!!!</h4>
       : filteredData.map((item, i) => (
        <Col className="cols" key={i} xs={6} lg={3} md={4}>
          <PlayerCard name={item.name} img={item.img} statistics={item.statistics} />
        </Col>)
      )}

        
        </Row>

        </div>
    </div>
      
  )
}

export default CardContainer