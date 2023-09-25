import React from 'react';



export class ClassComp extends React.Component{
    render() {
        return <p>this is the class component</p>;
    }
}

export class ClassComp1 extends React.Component{
    render() {
        return <p>I am another class</p>;
    }
}

// using constructor method
export class ClassComp2 extends React.Component { 
    constructor() {
        super();
        this.state = {
            color: "red",
            brand: 'Toyota'
        }
    }
    changeColor = () =>{ 
        this.setState({ color: 'blue' })
    }
    render() {
        return (
            <>
                <p>I have a <b>{this.state.color}</b> {this.state.brand} car</p>
                <button onClick={this.changeColor}>Click to change Color</button>
            </>
        )
    }
}

///lifecycle of components
    //Mounting stage
export class ClassComp3 extends React.Component { 
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            fcolor: "red"
        }
    }

    //setDerivedstateFromProps
    // static setDerivedstateFromProps(props, state) {
    //     return({fcolor: props.fcolor})
    // }
    
    //componentDidMount()
    componentDidMount() {
        setTimeout(() => {
            this.setState({fcolor: "violet"});
        },1000)
    }

    //render
    render() {
        return (
            <>
                <hr/>
                   <p>Updating Stage</p> 
                <p>I have a {this.state.fcolor} car</p>
            </>
        )
    }
}


//Updating stage
export class ClassComp4 extends React.Component{
    constructor() {
        super();
        this.state = {
            fcolor: "Black"
        }
    }
    //getDerivedSteateFromProps
    // static getDerivedStateFromProps(props, state) { 
    //     return ({fcolor: props.fcolor})
    // }
    changeColor =() => { 
        this.setState({fcolor: 'blue'})
    }


    //should Component Update
    shouldComponentUpdate = () => { 
        return false;
    }
    //render
    render() {
        return (
            <>
                <hr/>
                <p>Updating Stage</p> 
                <h1>{ this.state.fcolor}</h1>
                <button onClick = {this.changeColor}>Click here</button>
            </>
        )
    }

}