import React, { useState } from 'react';

const AutoComplete = (props) => {
    const [items, setItems] = useState([]);

    const sortRegex = (event) => {
        let sorted = [];
        if (event.target.value === '')
            return;
        const regex = new RegExp(`(${event.target.value})\\w*`, 'g');
        props.data.find((elem) => {
            if (elem.name.match(regex) && sorted.length <= 9)
                sorted.push(elem.name);
        });

        setItems(sorted);
    }

    return (
        <div className="auto-complete">
            <label>
                What's in your fridge ?
                <input type="text" onChange={(event) => sortRegex(event)} />
            </label>
            {items.map(item => (
                <p>{item}</p>
            ))}
        </div>
    ); 
}

export default AutoComplete;
