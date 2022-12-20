import React from "react";
import apiURL from "../api";

export const Item = ({ item, setItemData }) => {
    const title = item.title;

    const getItem = async (id) => {
        const res = await fetch(`${apiURL}/item/${id}`);
        const data = await res.json();
        setItemData(data);
    }

    const handleClick = (e) => {
        getItem(e.target.value)
    }

    return (
        <div style={{ margin: "20px 10px" }}>
            {/* <h3 onClick={handleClick}>Title: {title}</h3> */}
            <button id="sp-button" onClick={handleClick} value={item.id} >Title: {title}</button>
        </div>
    );
};
