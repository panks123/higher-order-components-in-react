import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Parent from './Parent';


function App() {
  return (
    <div className="App">
      {/*Suppose there is a requirement of creating a button and we need to count how many times the button was clicked*/}
      {/* <ClickCounter/> */}

      {/*Now suppose another requirement has come which says there should be a heading which keeps track of how many times the heading was mouseoverd*/}
      {/* <HoverCounter/> */}

      {/* So we can see that both components has same functionality, but we are not follwing DRY principle, We are repeating the functionality (Not reusing)
        Suppose some another functionality comes as requirement like whenever a key is pressed in an input show that count - So same functionality we'll have to repeat again
      */}

      {/* To solve this i.e. to reuse the same functionality and Not repeating it we have Something called 'Higher Order Components' - HOC */}
      {/* In simple words, HOC implements a common logic, whenever a component is passed to the HOC, it enhances the
          original component with the common logic and return a new Component

          NewEnhancedComponent  = HigherOrderComponent(OriginalComponent)


      */}

      <ClickCounter/>
      <HoverCounter/>

      <hr/>

      {/* *******************Pure components*********************/}
      <Parent/>
    </div>
  );
}

export default App;
