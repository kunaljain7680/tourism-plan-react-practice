import React, { useState } from "react";
import data from './data';
import Tours from './components/Tours';

const App = () => {

  // now tours has all the data.js content

  const [tours,setTours]=useState(data);

  // id k through tour remove

  // filter thouse tours whose id equal to tours and consider whose not 
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!=id);
    setTours(newTours);

  }

  function tourHandler(){
    setTours(data);
  }
  
  if(tours.length===0){
    return (

      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={tourHandler}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>


      <Tours tours={tours} removeTour={removeTour}>

      </Tours>

    </div>
  )

};

export default App;
