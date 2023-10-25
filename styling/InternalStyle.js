import React from 'react';
import ReactDom from 'react-dom/client';


// ----------internal Styling-------
function InternalStyle() {
    const style = {
        backgroundColor: "yellow",
        color: "green", 
        fontFamily: "Helvetica"
    }


    return (
        <>
            <p style={style}>Hi to you all</p>
        </>
    )
}

export default InternalStyle;