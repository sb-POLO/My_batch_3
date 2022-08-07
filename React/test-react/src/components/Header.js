import React from 'react';

function Header(props) {
    console.log(props);
    return (
        <p>{props.arr[0].name}</p>
    );
}

export default Header;