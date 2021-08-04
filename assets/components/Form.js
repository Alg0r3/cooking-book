import React, { useState } from 'react';
import Fridge from './Fridge';
import ListIngredients from '../data/list-ingredients.json';
import axios from 'axios';

const Form = () => {
    const [fridge, setFridge] = useState([]);
    const [numRecipe, setNumRecipe] = useState(10);
    const [ranking, setRanking] = useState(2);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            url: 'https://localhost:8000/api/data',
            method: 'post',
            data: {
                ingredients: fridge,
                number: numRecipe,
                ranking: ranking
            },
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    const handleNumRecipe = (e) => {
        e.preventDefault();

        setNumRecipe(e.target.value);
    };

    const handleRanking = (e) => {
        e.preventDefault();

        setRanking(e.target.value);
    };

    const handleCallback = (childData) => {
        let array = [];
        
        for (const elem of childData) {
            array.push(elem.name);
        }

        setFridge(array);
    };

    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="number-recipe">Number of recipes displayed :</label>
            <input type="number" id="number-recipe" min="5" max="25" value={numRecipe} onChange={handleNumRecipe} />
            <label htmlFor="minmax-ingredient">Would you rather maximize the number of ingredients used or minimize the number of missing ingredients ?</label>
            <select id="minmax-ingredient" value={ranking} onChange={handleRanking}>
                <option value="1">Maximize</option>
                <option value="2">Minimize</option>
            </select>
            <Fridge food={ListIngredients} parentCallback={handleCallback} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
