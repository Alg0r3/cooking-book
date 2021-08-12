import React from 'react';
import { useHistory } from 'react-router-dom';
import Recipe from './Recipe';

const RecipeList = (props) => {
    const history = useHistory();

    const handleClick = (event, id) => {
        event.preventDefault();
        history.push(`/recipes/${id}`, id);
    };

    return (
        <section className="recipe-list">
            {props.recipes.map(recipe => {
                return <Recipe key={recipe.id} details={recipe} onClick={event => handleClick(event, recipe.id)} />
            })}
        </section>
    );
};

export default RecipeList;
