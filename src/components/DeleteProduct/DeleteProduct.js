import React, { useEffect, useState } from 'react';

const DeleteProduct = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('https://powerful-lake-13884.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [items])

    const handleDelete = (id) => {
        fetch(`https://powerful-lake-13884.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', result)
            })
    }

    return (
        <div>
            <h3 className="text-primary">Mange products:</h3>
            <hr/>
            {
                items.map(product => <h5>{product.name} <button className="btn btn-danger" onClick={() => handleDelete(product._id)} > Delete</button></h5>)
            }
        </div>
    );
};

export default DeleteProduct;