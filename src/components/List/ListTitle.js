import React from 'react';
import "./index.css";

const ListItem = (props) => {
    return (
    <div>
        <div className="listTitle">
            {props.title}
        </div>
    </div>
    )
} 

export default ListItem;