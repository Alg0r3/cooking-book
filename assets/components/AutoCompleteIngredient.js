import React, { useState } from 'react';

const AutoCompleteIngredient = (props) => {
    const [ingredients, setIngredients] = useState([]);
    const [fridge, setFridge] = useState([]);

    const sortRegex = (e) => {
        const regex = new RegExp(`(${e.target.value})\\w*`, 'g');
        let sorted = [];
        
        if (/^ *$/.test(e.target.value))
            setIngredients([]);
        else {
            props.data.find((elem) => {
                if (elem.name.match(regex) && sorted.length <= 9)
                    sorted.push(elem);
            });
    
            setIngredients(sorted);
        }
    };

    const fillFridge = (e, ingredient) => {
        e.preventDefault();
        const found = fridge.find(elem => elem.id == ingredient.id)
        
        if (!found)
            setFridge(oldArr => [...oldArr, ingredient]);
    };

    const emptyFridge = (e, id) => {
        e.preventDefault();
        const newArr = fridge.filter(elem => elem.id != id);

        setFridge(newArr);
    };

    return (
        <div className="auto-complete">
            <h2>Search ingredients</h2>
            <input type="text" onChange={(e) => sortRegex(e)} />
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.id}>
                        <button onClick={(e) => fillFridge(e, ingredient)}>{ingredient.name}</button>
                    </li>
                ))}
            </ul>
            <h2>What's in your fridge ?</h2>
            <ul>
                {fridge.map(elem => (
                    <li key={elem.id}>
                        {elem.name}
                        <button onClick={(e) => emptyFridge(e, elem.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    ); 
};

export default AutoCompleteIngredient;
