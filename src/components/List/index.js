import React, { Component, useState } from 'react';
import "./index.css";
import ListTitle from './ListTitle';
import ListItem from './ListItem';

const List = () => {
    return <div>
            <div className="listBlock">
                <h2>我的台灣旅遊清單</h2>
                <ListTitle/>
                <ListItem/>
            </div>
    </div>
}

export default List;