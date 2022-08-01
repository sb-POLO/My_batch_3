import React from 'react'

function Data({ props }) {
    return (
        <div className='Data'>
            {console.log(props)}
            <p>Name: {props.Name}</p>
            <p>Age: {props.Age}</p>
            <p>Gender: {props.Gender}</p>
        </div>
    )
}

export default Data

// let props = {
//     name: "Sameera",
//     age: "24",
//     gender: "Female"
// }