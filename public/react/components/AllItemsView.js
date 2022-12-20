import React from "react";

import { Item } from "./Item";

export const AllItemsView = ({ items, setItemData }) => {
    return (
        <div>
            {items.map((item, idx) => (
                <Item key={idx} setItemData={setItemData} item={item} />
            ))}
        </div>
    );
};
