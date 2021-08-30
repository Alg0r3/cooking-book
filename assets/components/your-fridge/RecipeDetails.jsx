import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAxios from './useAxios';

const RecipeDetails = () => {
    const [config, setConfig] = useState({});
    const {data, isLoading, error} = useAxios(config);
    const {state} = useLocation();
    
    useEffect(() => {
        setConfig({
            url: `https://localhost:8000/api/recipes/${state}`,
            method: 'post'
        });

        return () => {
            // cleanup !
        }
    }, []);

    return (
        <div className="recipe-details">
            {error && <div className="error">{error}</div>}
            {isLoading ? <div className="loading">Loading...</div> : 
                <>
                    <h3>{data.title}</h3>
                    <img src={data.image} alt={data.title} />
                    <p>Total time : {data.readyInMinutes}min</p>
                    <p>Servings : {data.servings}</p>
                    <p>Summary : {data.summary}</p>
                </>
            }   
        </div>
    );
};

export default RecipeDetails;
