import React from 'react';
import { useParams } from 'react-router-dom';

const Words = (props) => {
    const { word, color1, color2 } = useParams();

    return (
        <h1 style={{textAlign : "center",color: color1, background : color2}}>The Word is: { word }</h1>
    )
}
export default Words;
