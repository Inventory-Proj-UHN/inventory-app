import React, { useState, useEffect } from "react";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

import { AllItemsView } from "./AllItemsView";

export const App = () => {
    const [items, setItems] = useState([]);

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
            <h2>All things 🔥</h2>
            <AllItemsView items={items} />
        </main>
    );
};
