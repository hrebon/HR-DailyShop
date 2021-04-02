import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://obscure-wave-12433.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data));
    },[])
    return (
        <div className='row'>
            {
                events.length === 0 && <CircularProgress style={{position: 'relative', left: '500px', top: '200px'}} />
            }
            {
                events.map(event => <Event event={event}></Event>)
            }
            
        </div>
    );
};

export default Home;