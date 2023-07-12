import React from "react";

const Button = ({details}) =>{
// const Button = ({text,color}) =>{

    return (
        <div>
            <button style={{backgroundColor:details[2], color:details[1]}}>{details[0]}</button>
            <p>This is a {details[0]} fruit in {details[1]} color.</p>
        </div>
    )
}

export default Button;