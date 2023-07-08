import logo from "../assets/nba-logo.png"
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
const Header = () => {
  return (
    
<Container style={{ maxWidth: '500px' }}>
<Image src={logo} alt="nba" style={{ marginLeft: '160px', height: '75px', width: '150px', marginTop: '15px' }}fluid/>
        <h1 className="text-center">NBA Legends</h1>
        <Form.Control type="text" placeholder="Search Player..." />

</Container>

  )
}

export default Header