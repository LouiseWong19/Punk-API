import './App.scss';
import data from "./data/data";
import {useState,useEffect} from 'react';
import Main from './containers/Main/Main';
import NavBar from './containers/NavBar/NavBar';



const App = () => {
  // // const {beerArray}
  const [beerDetail,setBeerDetail] = useState([]);

  useEffect(() => {
    const URL = `https://api.punkapi.com/v2/beers`;
    fetch(URL).then(response =>response.json()).then(item =>{
        console.log(item);
        setBeerDetail(item);
      });
  }, []);

  return (
    <div className="App">
      <nav className="nav">
        <h1>Search</h1>
      </nav>
      <main className='mainSection'>
        <section className='mainSection__nav-bar'>
          <NavBar />
        </section>
        <section className="mainSection__main">
          <Main beerArray ={beerDetail}/>
        </section>
      </main>
    </div>
  );
}

export default App;
