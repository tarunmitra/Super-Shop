import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Placed from '../Placed/Placed';


const PlaceOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://powerful-lake-13884.herokuapp.com/checkOut?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    })
    return (
        <div>
            {
                orders.map(order => <Placed order={order} key={order._id}></Placed> )
            }
        </div>
    );
};

export default PlaceOrder;