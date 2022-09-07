import Card from '../card/card-component'
import './card-list.styles.css' // this is just designation for me

const CardList = ({ monsters } ) => (  //monsters is destructures props from CardList monsters = {filteredMonsters} which has been assigned to monsters
   <div className='card--list'>         
{monsters.map((monster) => {

          return (<Card monster = {monster}/>)
        })
        }
        </div>
    
        )

export default CardList;