import React from 'react';
import { useParams } from 'react-router-dom';

const Numbers = (props) => {
    const { input } = useParams();

    return (
        isNaN(+ input) ?
        <h1 style={{textAlign : "center"}}>The word is: { input }</h1>:
        <h1 style={{textAlign : "center"}}>The number is: { input }</h1>
    );
}

export default Numbers;