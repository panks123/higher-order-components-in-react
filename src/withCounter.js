import React from "react";

const UpdatedComponent = (OriginalComponent)=>{
    // We will enhance the OriginalComponent in the NewComponent
    class NewComponent extends React.Component{

        /* ******************Common functionality we need to share ********************** */
        /* here we need to share a counter state and a method to setCounter as a common functionality*/

        constructor(props) {
            super(props)
            this.state = { count: 0 }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        /*********************************************************** */

        render(){
            return <OriginalComponent count={this.state.count} incrementCount = {this.incrementCount}/> // We need to pass the state and incrementCount from here  So that the Original Components can make use of these
        }
    }

    return NewComponent
}

export default UpdatedComponent;