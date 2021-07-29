import React, { useState } from 'react';

const AutoComplete = (props) => {
    const [items, setItems] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    const sortRegex = (e) => {
        const regex = new RegExp(`(${e.target.value})\\w*`, 'g');
        let sorted = [];
        
        if (/^ *$/.test(e.target.value))
            setItems([]);
        else {
            props.data.find((elem) => {
                if (elem.name.match(regex) && sorted.length <= 9)
                    sorted.push(elem);
            });
    
            setItems(sorted);
        }
    };

    const handleClick = (e, name) => {
        e.preventDefault();
        setIngredients(oldArray => [...oldArray, name]);
    }

    return (
        <div className="auto-complete">
            <h2>Search ingredients</h2>
            <input type="text" onChange={(e) => sortRegex(e)} />
            <ul>
                {items.map(item => (
                    <li key={item.id}><button onClick={(e) => handleClick(e, item.name)}>{item.name}</button></li>
                ))}
            </ul>
            <h2>What's in your fridge ?</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
    ); 
};

export default AutoComplete;
