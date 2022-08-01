import React from "react";

function Break(props) {
    console.log(props.power)
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Break;
