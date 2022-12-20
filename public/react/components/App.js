import React, { useState, useEffect } from "react";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

import { AllItemsView } from "./AllItemsView";
import { SingleItemView } from "./SingleItemView";


export const App = () => {
    const [items, setItems] = useState([]);
    const [itemData, setItemData] = useState(null);

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
            <h1>Inventory App</h1>
            <h2>All things 🔥</h2>
            {itemData ? <SingleItemView fetchItems={fetchItems} setItemData={setItemData} itemData={itemData} /> : <AllItemsView setItemData={setItemData} items={items} />}
            
        </main>
    );
};
