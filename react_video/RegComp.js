import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
      console.log("regular component rendered");
      return (   
        <div>I am the regular Component { this.props.name }</div>
    )
  }
}

export default RegComp