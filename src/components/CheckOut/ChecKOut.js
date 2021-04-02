import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Button from '@material-ui/core/Button';
import { userContext } from '../../App';
import { useContext } from 'react';




const ChecKOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
 

    const {id} = useParams();
    const [info,setInfo] = useState([])
    useEffect(()=>{
        const url =`https://obscure-wave-12433.herokuapp.com/checkout/${id}`;
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => setInfo(data))
    },[id])

    const handleCheckOut = () => {
        let newCheckOut = {...loggedInUser, ...info}
        fetch('https://obscure-wave-12433.herokuapp.com/addOder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCheckOut)
        })
        alert('oder confirm. Go to oders page!!')
        
    }


    return (
        <div>
            <h1>checkout</h1>
            <table>
                <tr className="head">
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            {
                info.map(infos => (
                    <tr>
                        <th>{infos.name}</th>
                        <th>1</th>
                        <th>{infos.price}</th>
                    </tr>
                ))
            }
            </table>
            <Button style={{marginTop: '15px', marginLeft: '1000px'}} onClick={handleCheckOut} variant="contained" color="primary">
            Checkout
            </Button>
        </div>
    );
};

export default ChecKOut;