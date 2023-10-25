import React from 'react';
import ReactDOM from 'react-dom/client';




function shoot() { 
        alert('Great shot');
}
function shoot1(a) { 
        alert(a);
}
//Event handlers
function shoot2(a, b) { 
        alert(b.type);
}

// ------------conditionals-----------------

    
function Conditions(props) {
    const MadeGoal =() => <h1>Made Goal</h1>;

    const MissedGoal = () => <h1>Missed Goal</h1>;


    const isGoal = props.isGoal;

    if (isGoal) {
        return <MadeGoal />;
    } else {
        return <MissedGoal />;
    }
            // OR
    // return isGoal? <MadeGoal />: <MissedGoal />;

}

function Garage(props) { 
    const cars = props.cars;
    return (
        <>
            <h1>Garage</h1>
            {cars.length > 0 && 
                <h2>
                    You have {cars.length} cars in your garage.
                </h2>
            }
        </>
    )
}
const cars = [];
// --------------------</Conditionals>--------------------


//---------------------<Lists>---------------------



function MapFunction() {
    const names = ["David", "John", "Nat"];
    return (
        <ul>
            {names.map((name) => <li>I am a { name}</li>)}
        </ul>
    )
}


            // ----------keys
function Car(props) {
    return <li>I am a { props.name }</li>
 }      

function MapFunction2() {
    const names = [
        { id: 1, name: "David" },
        { id: 2, name: "John" },
        { id: 3, name: "Nat" }
    ];

    return (
        <ul>
            {names.map((person) => <Car key={ person.id } name={ person.name }/>)}
        </ul>
    )
}

//---------------------</Lists>--------------------


function FunctionalComp1(props) {
    
    return (
        <p>It is a { props.color } { props.brand } { props.name.type }</p>
    )
}

function FunctionalComp() {
    const color = "red";
    const carInfo = {
        color: "yellow",
        type: "Ford"
    };

    return (
        <div align = "center" border="1px solid black">
            <p>This is a Functional Component</p>
            <button onClick={shoot}>Shoot</button>
            <button onClick={() => shoot1("Goal")}>Shoot With Parameter</button>
            <button onClick={(event) => shoot2("Goal", event)}>Shoot With Event</button>
            
            <Conditions isGoal={true} />
            <Garage cars={cars} />
            <FunctionalComp1 brand="Mustang" color={color} name={carInfo} />
            <MapFunction/>
            <MapFunction2/>
        </div>
    )
}



export default FunctionalComp;

