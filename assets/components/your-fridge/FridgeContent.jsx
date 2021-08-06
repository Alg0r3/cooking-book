import React, { useState } from 'react';
import { autoComplete } from './autoComplete';
import ListIngredients from '../../data/list-ingredients.json';

const FridgeContent = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const [fridge, setFridge] = useState([]);
    const listIngredients = [...new Set(ListIngredients.map(elem => elem.name))];
    
    const sort = (event) => setIngredients(autoComplete(event, listIngredients));

    const fillFridge = (event, ingredient) => {
        event.preventDefault();
        const found = fridge.find(elem => elem == ingredient)
        if (!found)
            setFridge(oldArr => [...oldArr, ingredient]);
    };

    const emptyFridge = (event, ingredient) => {
        event.preventDefault();
        const newArr = fridge.filter(elem => elem != ingredient);
        setFridge(newArr);
    };

    const handleValidate = (event) => {
        event.preventDefault();
        props.parentCallback(fridge);
    }

    return (
        <div className="fridge-content">
            <h2>List of ingredients :</h2>
            <input type="search" onChange={(e) => sort(e)} />
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient}>
                        <button onClick={(event) => fillFridge(event, ingredient)}>{ingredient}</button>
                    </li>
                ))}
            </ul>
            <h2>What's in your fridge ?</h2>
            <ul>
                {fridge.map(ingredient => (
                    <li key={ingredient}>
                        {ingredient}
                        <button onClick={(event) => emptyFridge(event, ingredient)}>x</button>
                    </li>
                ))}
            </ul>
            <button onClick={(e) => handleValidate(e)}>Validate</button>
        </div>
    ); 
};

export default FridgeContent;
