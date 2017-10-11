import React from 'react';
import ReactDOM from 'react-dom';
import CreateClass from 'create-react-class';

const Main = CreateClass({
  render(){
    return(
      <p>Hello world!</p>
      )
  }
});

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
  )

