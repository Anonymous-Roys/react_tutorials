import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Daves"
      }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Daves"
            });
        },3000);
    }
  render() {
      console.log("parent component rendered");
      return (
        <div>
            I am the Parent Component
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp