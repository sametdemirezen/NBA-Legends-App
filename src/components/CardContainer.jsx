import PlayerCard from "./PlayerCard"
import {data} from "../helper/data"
const CardContainer = () => {
    
  return (
    <div>
        <p>CardContainer</p>
        {data.map((item)=> {
        <PlayerCard name = {item.name} img = {item.img} statistics = {item.statistics}/>
        })}
        
    </div>
  )
}

export default CardContainer