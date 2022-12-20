import React, { useState, useEffect } from "react";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

import { AllItemsView } from "./AllItemsView";
import Form from './Form';

export const App = () => {
    const [items, setItems] = useState([]);
    const [add, setAdd] = useState(false);

    const fetchItems = async () => {
        const res = await fetch(`${apiURL}/item`);
        const data = await res.json();
        setItems(data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <main>
            <h1>Sauce Store</h1>
            <button onClick={() => setAdd(!add)}>Add Item</button>
            <h2>All things 🔥</h2>
            {add ? <Form add={add} setAdd={setAdd} /> : null }
            <AllItemsView items={items}/>
        </main>
    );
};
