import React from 'react';

const Recipe = ({details}) => {
    return (
        <article className="recipe">
            <img src={details.image} alt={details.title} />
            <h1>{details.title}</h1>
            Like: {details.likes}<br/>
            Missing Ingredients: {details.missedIngredientCount}<br/>
            Used ingredients :{details.usedIngredientCount}<br/>
        </article>
        
    );
};

export default Recipe;
