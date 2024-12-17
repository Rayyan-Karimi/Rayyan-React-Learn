import React from 'react';

function ButtonChild(props) {
    function handleClick() {
        props.onButtonClick('Hello from child.')
    }
    return <button onClick={handleClick}>Click button from Child</button>
}

export default ButtonChild;