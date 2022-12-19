import React from "react";

import { Item } from "./Item";

export const AllItemsView = ({ items }) => {
    return (
        <div>
            {items.map((item, idx) => (
                <Item key={idx} item={item} />
            ))}
        </div>
    );
};
