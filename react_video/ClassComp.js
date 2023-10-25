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


//Updating
export class ClassComp5 extends React.Component{
    constructor(props) { 
        super(props);
        this.state = { favoritecolor: "black" };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "red" });
        },1000)
    }
    //getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    }

    //componentDidUpdate
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }

    render() {
        return (
            <>
                <h1>My favourite color is {this.state.favoritecolor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </>
        )
    }
}


//Unmounting
export class ClassComp6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = { show: true}
    }
    delHeader = () => {
        this.setState({ show: false });

    }

    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <>
                {myheader}
                <button onClick={this.delHeader}>Delete Header</button>
            </>
        );
    }
}

class Child extends React.Component{
    componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
        
    }
    render() {
        return (
            <>
                <h2>Hello world</h2>
            </>
        )
    }
}