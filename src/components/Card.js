// ye array of id image can be replaced by props variable and access it with props.id
import {useState} from 'react';

// as removeTour function also passed as a props function

function Card({ id, image, info, price, name,removeTour}) {

    // readmore initially setup with false

    // also when we click pn read more there is toggle between readMore and show less function on ui so use useState

    const[readmore,setReadmore]=useState(false);

    // if readmore is true then show all info else show 200 chars
    const description =readmore?info:`${info.substring(0,200)}....`;

    function readmoreHandler(){

        setReadmore(!readmore);  // it tooggles readmore to true if false and vice-versa

    }

    function removeHandler(){
        removeTour(id);
    }

  return (
    <div className="card">

        <img src={image} className="image" alt=""></img>

        <div className="tour-info">
            <div className="tour-details">

                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>

            </div>

            <div className="description">

                {description}

                {/* as onclick span changes so add listener */}

                <span className="read-more" onClick={readmoreHandler}>

                    {readmore?`show-less`:`read-more`}
                </span>
            
            </div>

        </div>
        
        {/* on click pe remove Tour wala function called on this id */}
        <button className="btn-red" onClick={removeHandler}>Not Interested</button>

    </div>
  );  
}

// removeTours added in App.js as here only at at time one object's info is passed and in App.js we have all the data and we have to re render the ui with useState and it is in App.js how can the Card.js call it so we have to use concept of lifting up here i.e parent passes it as props function and it called it using onClick prop and calling removeHandler function 

export default Card;
