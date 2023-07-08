import logo from "../assets/nba-logo.png"
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
const Header = () => {
  return (
    
<Container style={{ maxWidth: '500px', marginBottom : "20px" }}>
<Image src={logo} alt="nba" style={{ marginLeft: '160px', height: '75px', width: '150px', marginTop: '15px' }}fluid/>
        <h1 className="text-center text-warning">NBA Legends</h1>
</Container>

  )
}

export default Header