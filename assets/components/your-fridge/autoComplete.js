export const autoComplete = (event, array) => {
    const regex = new RegExp(`(${event.target.value})\\w*`, 'g');
    let sorted = [];
    
    if (/^ *$/.test(event.target.value))
        return sorted;
    else {
        array.find((elem) => {
            if (elem.match(regex) && sorted.length <= 9)
                sorted.push(elem);
        });
        return sorted;
    }
};
