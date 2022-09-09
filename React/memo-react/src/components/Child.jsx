import React from 'react'
import { useEffect, memo } from 'react'


function Child(props) {
    return (
        <>
            {console.log("Child rerendered")}
            <div className='child'>Child
                <button onClick={props.football}>Func</button>
            </div>
        </>
    )
}

export default memo(Child);