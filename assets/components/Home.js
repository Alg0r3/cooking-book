import React from 'react';
import AutoComplete from './AutoComplete';
import ListIngredients from '../data/list-ingredients.json';

const Home = () => {
    return (
        <div className="home">
            <AutoComplete data={ListIngredients} />
        </div>
    );
};

export default Home;
