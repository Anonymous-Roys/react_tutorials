import React from 'react';
import ReactDOM from 'react-dom/client';



function FunctionalComp1(props) {
    
    return (
        <p>It is a { props.color } { props.brand } { props.name.type }</p>
    )
}
function shoot() { 
        alert('Great shot');
}
function shoot1(a) { 
        alert(a);
}

function FunctionalComp() {
    const color = "red";
    const carInfo = {
        color: "yellow",
        type: "Ford"
    };;
    return (
        <div align = "center">
            <p>This is a Functional Component</p>
            <FunctionalComp1 brand="Mustang" color={color} name={carInfo} />
            <button onClick={shoot}>Shoot</button>
            <button onClick={() => shoot1("Goal")}>Shoot With Parameter</button>
        </div>
    )
}



export default FunctionalComp;

