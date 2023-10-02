import React, { Component } from 'react'

export class InlineStyle extends Component {
  render() {
    return (
        <div>
            <h2 style = {{backgroundColor:"red", textAlign:"center"}}>This is my nav bar</h2>
      </div>
    )
  }
}

export default InlineStyle