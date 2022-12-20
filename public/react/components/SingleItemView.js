import React, {useState} from 'react';
import apiURL from "../api";
import { EditForm } from './EditForm';

export function SingleItemView({itemData, setItemData, fetchItems, setItems, items}) {
    const [toggleEdit, setToggleEdit] = useState(false);


    const handleBackToHomeClick = () => {
        setItemData(null);
        fetchItems()
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

    const handleEditClick = () => {
        setToggleEdit(!toggleEdit)
    }

    

    return (
        <>
            <button onClick={handleEditClick} >Edit</button>
            { toggleEdit 
                ? 
               <EditForm setToggleEdit={setToggleEdit} toggleEdit={toggleEdit} itemData={itemData} fetchItems={fetchItems} setItemData={setItemData} setItems={setItems}/>
            :
            null
            }
            <h1>{itemData.title}</h1>
            <p><b>Category:</b> {itemData.category}</p>
            <p><b>Price:</b> {itemData.price}</p>
            <p><b>Description:</b> {itemData.description}</p>
            <img id="item-image" src={itemData.image}/>
            <br></br>
            <button onClick={handleDelete} value={itemData.id}>Delete</button>
            <button onClick={handleBackToHomeClick}>Back to Item List</button>
        </>
    )
}
