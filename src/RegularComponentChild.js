import React, { Component } from 'react'

export class RegularComponentChild extends Component {
  render() {
    console.log('Inside Regular ComponentChild render')
    return (
      <div>
        <h2>{this.props.name} | Regular component child</h2>
      </div>
    )
  }
}

export default RegularComponentChild
