import React from 'react';
import './dish.css';


const Dish=(props)=>{
    function handleClick(){
        console.log("Details like price, taste, gredients");
        
    }
    return(
        <div className="dish_card" onClick={handleClick}>
            <h3>{props.dish.name}</h3>
            <p>{props.dish.desc}</p>
        </div>
    )
}

export default Dish;