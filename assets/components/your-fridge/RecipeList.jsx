import React from 'react';

const RecipeList = (props) => {
    return (
        <div className="recipe-list">
            {props.recipes.map(recipe => {
                return <div key={recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} />
                </div>
            })}
        </div>
    );
};

export default RecipeList;