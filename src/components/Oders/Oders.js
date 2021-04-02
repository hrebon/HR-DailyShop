import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import './Oders.css';

const Oders = () => {
    const [oder, setOder] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log('oder', oder);

    useEffect(() => {
        fetch('https://obscure-wave-12433.herokuapp.com/oder?email='+loggedInUser.email,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => response.json())
        .then(data => setOder(data));
    },[])
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Your Oder Details</h1>
            <table>
                <tr className="head">
                    <th>User Email</th>
                    <th>Product Name</th>
                    <th>weight</th>
                    <th>Price</th>
                </tr>
            
            {
                oder.map(book => (
                    <tr>
                        <th>{book.email}</th>
                        <th>{book[0].name}</th>
                        <th>{book[0].weight}</th>
                        <th>{book[0].price}</th>
                    </tr>
                ))
            }
            </table>
        </div>
    );
};

export default Oders;