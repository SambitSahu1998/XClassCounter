import React,{Component} from 'react';
import Counter from './component/Counter';

class App extends Component{
  render(){
    return(
      <div style={{padding:"16px"}}>
        <Counter />
      </div>
    )
  }
}

export default App;
