import React, { useState, useEffect } from "react";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

import { AllItemsView } from "./AllItemsView";
import { SingleItemView } from "./SingleItemView";
import Form from './Form';



export const App = () => {
    const [items, setItems] = useState([]);
    const [add, setAdd] = useState(false);
    const [itemData, setItemData] = useState(null);

    const fetchItems = async () => {
        const res = await fetch(`${apiURL}/item`);
        const data = await res.json();
        setItems(data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const renderPages = () => {
        if(add) {
            return <Form add={add} setAdd={setAdd} />
        } else if (itemData) {
            return <SingleItemView fetchItems={fetchItems} setItemData={setItemData} itemData={itemData} setItems={setItems} items={items}/> 
        } else {
            return <AllItemsView setItemData={setItemData} items={items} />
        }
    }

    return (
        <main>
            <h1>Inventory App</h1>
            <h2>All things 🔥</h2>

            {!add ?  <button onClick={() => setAdd(!add)}>Add Item</button> :  <button onClick={() => setAdd(!add)}>Go Back</button> }
           
            
            {renderPages()}
            

        </main>
    );
};
