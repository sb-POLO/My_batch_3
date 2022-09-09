import React from 'react'

function ChildHOC(WrappedComponent) {
    function WrappingComponent(props) {
        return (
            <>
                {props.flag && < WrappedComponent />}
            </>
        )
    }
    return WrappingComponent;
}

export default ChildHOC