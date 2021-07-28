import React, { useState } from 'react';

const INGREDIENTS = [
    {'name': 'egg', 'id': 1},
    {'name': 'bread', 'id': 2},
    {'name': 'chicken', 'id': 3},
    {'name': 'olive oil', 'id': 4},
    {'name': 'onion', 'id': 5},
    {'name': 'garlic', 'id': 6},
    {'name': 'tomato', 'id': 7}, 
    {'name': 'pasta', 'id': 8},
    {'name': 'milk', 'id': 9},
    {'name': 'cheese', 'id': 10},
];

const AutoComplete = () => {
    const testRegex = (event) => {
        let items = [];
        if (event.target.value === '')
            return;
        const regex = new RegExp(`(${event.target.value})\\w*`, 'g');
        const found = INGREDIENTS.find((elem) => {
            if (elem.name.match(regex))
                items.push(elem.name);
        });

        console.log(items);
    }

    return (
        <form className="auto-complete">
            <label>
                What's in your fridge ?
                <input type="text" onChange={(event) => testRegex(event)} />
            </label>
        </form>
    ); 
}

export default AutoComplete;
