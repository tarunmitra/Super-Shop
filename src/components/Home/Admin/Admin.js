import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import DeleteProduct from '../../DeleteProduct/DeleteProduct';
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    console.log(imageURL)


    const onSubmit = (data) => {
        const productData = {
            name: data.name,
            price: data.price,
            wight: data.wight,
            imageURL: imageURL,
        };

        console.log(productData);

        const url = `https://powerful-lake-13884.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(productData),
        }).then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'a6aa56ca2cd37bac20ea53136c079f0c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    };
    return (
        <div className="row">
            <div className="col-md-6 shadow p-2   mt-3">
                <DeleteProduct></DeleteProduct>
            </div>
            <div className="col-md-6 shadow p-3 mt-3">
                <h3 className="text-success">Add product:</h3>
                <hr/>
                <form onSubmit={handleSubmit(onSubmit)}>

                   <label>Product Name:</label><br/>
                   <input name="name" defaultValue="new product name" ref={register} />
                   <br/>
                    
                   <label>Set price:</label><br/>
                   <input name="price" defaultValue="set product price" ref={register} />
                   <br/>

                   <label>Product Image:</label><br/>
                   <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                   <br/>
                   
                   <input type="submit" className="btn-style mt-3" />
                </form>
            </div>
        </div>
    );
};

export default Admin;