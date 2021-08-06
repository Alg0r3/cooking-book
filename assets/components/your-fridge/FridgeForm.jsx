import React, { useState } from 'react';
import FridgeContent from './FridgeContent';
import { postRequest } from './httpRequest';

const FridgeForm = () => {
    const [fridge, setFridge] = useState([]);
    const [recipes, setRecipes] = useState();
    const [state, setState] = React.useState({
        numRecipe: 10,
        ranking: 2
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            ingredients: fridge,
            number: state.numRecipe,
            ranking: state.ranking
        }        
        const result = postRequest('https://localhost:8000/api/data', data);
        setRecipes(result);
    };

    const handleChange = (event) => {
        event.preventDefault();
        setState({
            ...state,
            [event.target.name]: event.target.value 
        });
    };

    const handleCallback = (childData) => {
        setFridge(childData);
    };

    return (
        <div className="form">
            <FridgeContent parentCallback={handleCallback} />
            <form onSubmit={(event) => handleSubmit(event)}>
                <label htmlFor="number-recipe">Number of recipes displayed :</label>
                <input type="number" id="number-recipe" name="numRecipe" min="5" max="25" value={state.numRecipe} onChange={handleChange} />
                <label htmlFor="minmax-ingredient">Would you rather maximize the number of ingredients used or minimize the number of missing ingredients ?</label>
                <select id="minmax-ingredient" name="ranking" value={state.ranking} onChange={handleChange}>
                    <option value="1">Maximize</option>
                    <option value="2">Minimize</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FridgeForm;
