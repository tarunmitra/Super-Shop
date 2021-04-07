import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';



const Product = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, price } = item;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    useEffect(() => {
        fetch('https://powerful-lake-13884.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    const handleCheckOut=()=>{
        const newCheckOut = {...loggedInUser, ...item}
       fetch('https://powerful-lake-13884.herokuapp.com/addCheckOut',{
           method: 'POST',
           headers: {'Content-type' : 'application/json'},
           body: JSON.stringify(newCheckOut)
       })
       .then(res => res.json())
       .then(data => {
           console.log(data)
       })

    }

    
    return (
        <div>
            <h3>CheckOut</h3>
            <div className="shadow p-3">
                <table class="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>1</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td>Total =</td>
                            <td></td>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </table>
           
           
            <div className="d-flex justify-content-end">
                <Link to="/placeOrder"><button className="btn btn-success" onClick={handleCheckOut}>CheckOut</button></Link>
            </div>
    
            </div>
        </div>
    );
};

export default Product;