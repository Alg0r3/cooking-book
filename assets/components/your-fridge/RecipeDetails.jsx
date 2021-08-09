import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxios from './useAxios';

const RecipeDetails = () => {
    const [config, setConfig] = useState({});
    const {data, isLoading, error} = useAxios(config);
    const {state} = useLocation();
    const handleClick = (event) => {
        event.preventDefault();
        setConfig({
            url: `https://localhost:8000/api/recipes/${state}`,
            method: 'post'
        });
    };

    console.log(data);

    return (
        <div className="recipe-details">
            <button onClick={event => handleClick(event)}>Click me !</button>
            {error && <div className="error">{error}</div>}
            {isLoading ? <div className="loading">Loading...</div> : <p>Not loading</p>}   
        </div>
    );
};

export default RecipeDetails;
