import React, { useState } from "react";
import api from '../api';

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleForm = async (event) => {
    event.preventDefault();
    const item = {
    title: title,
    description: description,
    price: price,
    category: category,
    image: image,
    }
  
    const res =  await fetch(`${api}/item`, {
    method: "POST",
    headers: {
            'Content-Type': 'application/json'
             },
    body: JSON.stringify(
    item
    )
    });
    const data = await res.json();
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
    props.setAdd(!props.add);
    window.location.reload(false);
  
   }


    return (
        <>
            <form onSubmit={handleForm}>
                <input type="text" name="title" placeholder="Title"
                value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                <br/>
                <input type="text" name="description" placeholder="description"
                value={description} onChange={(e) => setDescription(e.target.value)} ></input>
                <br/>
                <input type="text" name= "price"  placeholder='Price'
                 value={price} onChange = {(e)=> setPrice(e.target.value)}></input>
                <br/>
                <input type="category" name="category" placeholder='Category'
                value={category} onChange = {(e)=> setCategory(e.target.value)} ></input>
                <br/>
                <input type="text" name="image" placeholder='Image'
                value={image} onChange = {(e)=> setImage(e.target.value)}></input>
                <br/>
                <button type="submit">Submit</button>


            </form>
        </>
    )
}


export default Form;