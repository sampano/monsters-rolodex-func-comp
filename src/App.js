import { useState, useEffect } from 'react'; //import useState Hook

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { render } from '@testing-library/react';

const App = () => {

  const [searchField, setSearchField] = useState(''); //useState give us back to arr value [value, setValue]
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setfilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users));
      }, [])// any of the value inside of this arr change the useEffect callback func run )
  
    useEffect(() => {

    const newFilteredMonsters = monsters.filter((monster) => { //this code filtered out monster array and will only runs whenever the monsters and searchField value is updated
      return monster.name.toLocaleLowerCase().includes(searchField); 
    });
    setfilteredMonsters(newFilteredMonsters);

  },[monsters, searchField])// filter new monster whenever the monsters and searchField value is updated
  
  const onSearchChange = (event) => {
  
  //useEffect run the callback once during mounting and it prevent infinite re-rendering
 
    const searchFieldString = event.target.value.toLocaleLowerCase(); //provides value to searchField vie setSearchField everytime user types in the search box
      setSearchField(searchFieldString)
    
    } // this is anonymous function inside method onSearchChange which will initialize once. this is for optimization as well

  
    return (
      <div className='App'>
        <h1 className='app--title'>Monster Rolodex</h1>


        <SearchBox 
        className ='monsters--search--box'
        placeholder ='search monster'
        onChangeHandler = {onSearchChange}/>


        <CardList monsters = {filteredMonsters}/*this code will provide the list of filteredMonsters to Cardlist component*//> 
        
      </div>
    )


}

export default App;
