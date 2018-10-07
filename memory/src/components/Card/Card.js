import React from 'react';
import "./Card.css"


const Card = props =>  {
   
 
        console.log(props); 
     
        return (
        
                <div className="card"
                key={props.id} 
                onClick={() => props.handleClick(props.id)}
                >
               
               <img className="card-img-top"style={props.styles} src={props.image} alt="Card img cap" />
          
          
            </div>
          );
    
}
 
export default Card;