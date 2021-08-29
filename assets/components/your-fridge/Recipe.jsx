import { faDrumstickBite, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Recipe = ({details}) => {
    return (
        <article className="recipe">
            <FontAwesomeIcon className="recipe-favorite" icon={faStar} />
            <img src={details.image} alt={details.title} />
            <h3>{details.title}</h3>
            <section className="recipe-info">
                <div className="recipe-icon">
                    <FontAwesomeIcon icon={faHeart} />
                    <p>{details.likes}</p>
                </div>
                <div className="recipe-icon n1">
                    <FontAwesomeIcon icon={faDrumstickBite} />
                    <p>{details.missedIngredientCount}</p>
                </div>
                <div className="recipe-icon n2">
                    <FontAwesomeIcon icon={faDrumstickBite} />
                    <p>{details.usedIngredientCount}</p>
                </div>
            </section>
        </article>
        
    );
};

export default Recipe;
