import React from 'react'
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import s from './Filters.module.scss';

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear=()=>{
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className='col-lg-3 col-12 mb-5 text-light bg-dark bg-primary'>
      <div className="text-light bg-dark">

      <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
      <div onClick={clear} style={{cursor: "pointer"}} className={`${s.net} text-center text-decoration-underline mb-4`}>Clear Filters</div>

      <div className={`${s.fil} accordion bg-primary`} id="accordionExample">
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
      <Gender setGender={setGender} setPageNumber={setPageNumber}/>

      </div>

      </div>
    </div>
    
  )
}

export default Filters;