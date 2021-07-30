import React from 'react';
import AutoCompleteIngredient from './AutoCompleteIngredient';
import ListIngredients from '../data/list-ingredients.json';

const Home = () => {
    return (
        <div className="home">
            <h1>Cooking Book</h1>
            <AutoCompleteIngredient data={ListIngredients} />
        </div>
    );
};

export default Home;
