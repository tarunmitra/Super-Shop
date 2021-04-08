import React from 'react';

const Placed = (props) => {
    console.log(props.order)
    const {Name, name, price, date, email} = props.order
    return (
        <div className="d-flex justify-content-center">
            <div className="m-3 p-3 shadow w-75 rounded text-center">
            <h2 className="text-success">Welcome: {Name}</h2>
            <h3>Email: {email}</h3>
            <h4 className="text-success">Your order submitted successfully</h4>
            <h5>You have ordered: {name}</h5>
            <h5>Order date: {date}</h5>
            <h4>Your total price: ${price}</h4>
            <h4>Thanks for your order. Stay touched with us.</h4>
            </div>
        </div>
    );
};

export default Placed;