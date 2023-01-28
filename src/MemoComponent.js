import React from 'react'

const MemoComponent = (props) => {
    console.log('Inside Memo ComponentChild render')
  return (
    <div>
      <h2>{props.name} | Memo component child</h2>
    </div>
  )
}

export default React.memo(MemoComponent);

// React.memo() is a higher order component which takes a component as input and returns a ne w Component that behaves same like Pure Components what we have in class based components
// So basically it memoizes the component which is passed in it, So this new component will now do the shallow comparison for state and props
// And if the value of state or props does not change then it will not re-render.
