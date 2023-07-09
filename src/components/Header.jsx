import logo from "../assets/nba-logo.png"
import Image from 'react-bootstrap/Image';
const Header = () => {
  return (
  <div >
    <div className="d-flex justify-content-center align-items-center mb-3 p-3" >
<Image className="" src={logo} alt="nba" style={{ height: '75px', width: '150px',}}/>
        
</div>
    <h1 className="text-center text-success">NBA Legends</h1>
  </div>
  )
}

export default Header