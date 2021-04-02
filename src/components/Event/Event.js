import React from 'react';
import { useState } from 'react';
import './Event.css';
import { useHistory } from 'react-router';

const Event = ({event}) => {
    
    
    
    const history = useHistory();
    const handleCheckOut = (id) => {
        
        const url =`checkout/${id}`;
        console.log(url)
        history.push(url)
    
    }
    
    
    
    return (
        <div className="col-md-4">
            <img style={{height:'300px'}} src={event.imageURL} alt=""/>
            <h3>{event.name}</h3>
            <h5>{event.price}</h5>
            <button className="btn btn-success"onClick={ () =>handleCheckOut(event._id)} >Buy Now</button>
            
  

        </div>
    );
};

export default Event;