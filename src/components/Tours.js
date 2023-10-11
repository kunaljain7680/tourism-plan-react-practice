import Card from './Card';

// jab bhi ap kisi list pe map function chla rahe hn to apko hmesha ek key pass krni chahie if no unique indentifier pass index(not a good practice) 

// as 2 props passed tours and removeTour props function

function Tours({tours,removeTour}){

   
    return(
        <div className="container">
            <div>
                <h2 className="title">Plan With Kunal</h2>
            </div>

            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}


// either use 7 times card component
// or simply use map function

// props.map ((tour)) we have done that props me jo data aya hai usme har ek single tour vo map krdiya hai with a card component i.e har ek tour ki vlaue ke lie 1 card return honge

// {...tour } pure obj ki deep copy


export default Tours