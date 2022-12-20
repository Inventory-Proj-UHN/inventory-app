import React from 'react';
import apiURL from "../api";

export function SingleItemView({itemData, setItemData, fetchItems}) {


    const handleClick = () => {
        setItemData(null);
    }

    const fetchDelete = async (id) => {
        
        const res = await fetch(`${apiURL}/item/${id}`, {
            method: "DELETE"
        });
        const data = await res.json();
        fetchItems();
        setItemData(null);
    }

    const handleDelete = (e) => {
        
        fetchDelete(e.target.value)
    }


    return (
        <>
            <h1>{itemData.title}</h1>
            <p><b>Category:</b> {itemData.category}</p>
            <p><b>Price:</b> {itemData.price}</p>
            <p><b>Description:</b> {itemData.description}</p>
            <img id="item-image" src={itemData.image}/>
            <br></br>
            <button onClick={handleDelete} value={itemData.id}>Delete</button>
            <button onClick={handleClick}>Back to Item List</button>
        </>
    )
}
