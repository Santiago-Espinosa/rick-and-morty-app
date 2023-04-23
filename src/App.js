import React, { useState , useEffect } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Logo from './logo.png';
import Navbar from './components/Navbar/Navbar';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App(){
  return(
    <Router>
     <div className='App'>
     <Navbar/>
     </div>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:id" element={<CardDetails />}/>
      <Route path="/episodes" element={<Episodes />}/>
      <Route path="/episodes/:id" element={<CardDetails />}/>
      <Route path="/location" element={<Location />}/>
      <Route path="/location/:id" element={<CardDetails />}/>
     </Routes>
    </Router>
  )
}

const Home = () => {

  let [PageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${PageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
  useEffect(()=>{
    (async function () {
      let data = await fetch(api).then((res)=> res.json());
      updateFetchedData(data);
    })();
  }, [api])


  return (
    <div className="App">
  
      <figure className='col-lg-12 col-12 mb-5 d-flex justify-content-center '>
        <img className='img' src={Logo} alt="Rick and Morty"></img>
      </figure>
       {/* <h1 className='text-center mb-4'>Characters</h1> */}
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
            <Filters setSpecies={setSpecies} setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} PageNumber={PageNumber} setPageNumber={setPageNumber}/>
      <Footer />
    </div>
  );
}

export default App;
