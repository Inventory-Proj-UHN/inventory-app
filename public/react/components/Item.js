import React from "react";

export const Item = ({ item }) => {
    const title = item.title;

    return (
        <div style={{ margin: "20px 10px" }}>
            <h3>Title: {title}</h3>
        </div>
    );
};
