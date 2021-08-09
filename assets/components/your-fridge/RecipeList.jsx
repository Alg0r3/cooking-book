import React from 'react';
import { useHistory } from 'react-router-dom';

const RecipeList = (props) => {
    const history = useHistory();

    const handleClick = (event, id) => {
        event.preventDefault();
        history.push(`/recipes/${id}`, id);
    };

    return (
        <div className="recipe-list">
            {props.recipes.map(recipe => {
                return <div key={recipe.id} onClick={event => handleClick(event, recipe.id)}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} />
                </div>
            })}
        </div>
    );
};

export default RecipeList;
