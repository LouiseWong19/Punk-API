import './App.scss';
import {useState,useEffect} from 'react';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';



const App = () => {
  const [beerDetail,setBeerDetail] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  // FETCH BEER DATA 
  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers`;
    fetch(URL).then(response =>response.json()).then(item =>{
        console.log(item);
        setBeerDetail(item);
      });
  }, []);


  const handleInput = event =>{
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  const filteredBeer = beerDetail.filter(beer =>{
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm)
  })


  return (
    <div className="App">
      <nav className="nav">
        <h1 className='nav__logo'>BrewDog</h1>
      </nav>
      <main className='mainSection'>
        <section className='mainSection__nav-bar'>
          <NavBar searchTerm={searchTerm} handleInput={handleInput}/>
        </section>
        <section className="mainSection__main">
          <Main beerArray ={filteredBeer}/>
        </section>
      </main>
    </div>
  );
}

export default App;
