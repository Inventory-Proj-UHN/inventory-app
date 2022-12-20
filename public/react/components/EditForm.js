import React, {useState} from 'react';
import apiURL from "../api";

export function EditForm({itemData, fetchItems, toggleEdit, setToggleEdit, setItemData, setItems, items}) {
    const [editItem, setEditItem] = useState({title: itemData.title, description: itemData.description, price: itemData.price, category: itemData.category, image: itemData.image})
    const id = itemData.id
    // console.log(id)
    // console.log(editItem)
    const handleTitleChange = (e) => {
        
            setEditItem({...editItem, title: e.target.value})
        
       
        
    }
    const handleDescriptionChange = (e) => {
       
            setEditItem({...editItem, description: e.target.value})
        
    }
    const handlePriceChange = (e) => {
       
            setEditItem({...editItem, price: e.target.value})
    
    }
    const handleCategoryChange = (e) => {
        
            setEditItem({...editItem, category: e.target.value})
    }
    const handleImageChange = (e) => {
        
            setEditItem({...editItem, image: e.target.value})
        
    }
console.log(editItem)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id)
        const res = await fetch(`${apiURL}/item/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editItem)
        });
        if (res.status === 200) {
            setItemData(editItem)
            setToggleEdit(!toggleEdit);
            
            // setItemData(null);

        }
    }

    return (
        <>
             <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title"
                 onChange={handleTitleChange} ></input>
                <br/>
                <input type="text" name="description" placeholder="description"
                 onChange={handleDescriptionChange} ></input>
                <br/>
                <input type="text" name= "price"  placeholder='Price'
                onChange = {handlePriceChange}></input>
                <br/>
                <input type="category" name="category" placeholder='Category'
                 onChange = {handleCategoryChange} ></input>
                <br/>
                <input type="text" name="image" placeholder='Image'
                 onChange = {handleImageChange}></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
