import React from 'react';


export default function CheeseList(props) {
    console.log(props.cheeses);
    let cheeses = props.cheeses.map(cheese => {
        return <li>{cheese}</li>;
    })
    console.log(cheeses);
    
    return (
        <ul>
            {cheeses}
        </ul>
    );
};