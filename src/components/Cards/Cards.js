import React from 'react';

const Cards = ({results}) => {
    const display;
    console.log(results)

    if (results) {
       display = results.map((item) => {
           const {id} = item
            return(<div key={id} className="col-4">asldkjfslkdjl</div>)
       });
    } else {
       display =  "No characters found";
    }
    
    return (
            <>{display}</>
    )
};

export default Cards;
