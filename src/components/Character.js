// Write your Character component here
import React from 'react';


const Character = (props) => {

    return (
        < div className='character'>
            <h1>{props.name}     {props.birth_year}</h1>
            
        </div >
    )
}

export default Character
// data.map((info) => (
//     <h3>Name: {info.name}     Birth Year:{info.birth_year}</h3>
// ))