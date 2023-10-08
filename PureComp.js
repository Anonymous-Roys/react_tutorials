import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("pure component rendered");
    return (
      <div>
        
        I am a pure component { this.props.name}
      </div>
    )
  }
}

export default PureComp
