import React, { PureComponent } from 'react'

// for making a component pure we need to extens PureComponent class
export class PureComponentChild extends PureComponent {
  render() {
    console.log('Inside PureComponentChild render')
    return (
      <div>
        <h2>{this.props.name} |PureComponetChild</h2>
      </div>
    )
  }
}

export default PureComponentChild
