import React, { useState } from 'react';
import Fridge from './Fridge';
import ListIngredients from '../data/list-ingredients.json';
import axios from 'axios';

const Form = () => {
    const [fridge, setFridge] = useState([]);
    
    const handleCallback = (childData) => {
        setFridge(childData);
        console.log(childData);
    };
    
    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <Fridge food={ListIngredients} parentCallback={handleCallback} />
            <label htmlFor="number-recipe">Number of recipes displayed :</label>
            <input type="number" id="number-recipe" min="5" max="25" defaultValue="10" />
            <label htmlFor="minmax-ingredient">Would you rather maximize the number of ingredients used or minimize the number of missing ingredients ?</label>
            <select id="minmax-ingredient">
                <option value="1">Maximize</option>
                <option value="2">Minimize</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
