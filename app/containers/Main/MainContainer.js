import React from 'react';
import CreateClass from 'create-react-class';

const MainContainer = CreateClass({
  render () {
    return (
     <div>
     {this.props.children}
     </div>
      )
  },
})

export default MainContainer
