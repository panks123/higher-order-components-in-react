import React, { Component } from 'react'
import MemoComponent from './MemoComponent'
import PureComponentChild from './PureComponentChild'
import RegularComponentChild from './RegularComponentChild'

class Parent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            name: "Pankaj"
        }
    }
    componentDidMount()
    {
        // So here we are setting the state name with same value
        // Due to this PureComponentChild will not render again
        // Only the RegularComponetChild will re-render

        // This is because PureComponetChild implements shouldComponentUpdate lifecycle method with shallow props and state comparison
        // Means if the state or props of the pure component will render only if the value of state and props changes
        // If the value of state and props does not change then the Pure Componet will not re-render
        // However,
        //  the Regulare componet does not implement shouldComponentUpdate, So they re-render even if the props/state's value does not change
        setInterval(() => {
            this.setState({name: "Pankaj"})
        }, 2000);
    }
  render() {
    console.log('Inside Parent render ')
    return (
      <div>
        <h2>Parent Component</h2>
        <RegularComponentChild name = {this.state.name}/>
        <PureComponentChild name = {this.state.name}/>
        <MemoComponent name = {this.state.name}/>
      </div>
    )
  }
}

export default Parent
