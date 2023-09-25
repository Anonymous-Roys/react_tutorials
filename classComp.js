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
export class ClassComp3 extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            fcolor: "red"
        }
    }
    
    // static getDerivedStateFromProps(props, state) { 
    //     return ({ fcolor :props.color })
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState({fcolor: "violet"});
        },1000)
    }
    render() {
        return (
            <>
                <p>I have a {this.state.fcolor} car</p>
            </>
        )
    }
}


