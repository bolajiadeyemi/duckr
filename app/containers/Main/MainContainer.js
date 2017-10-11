import React from 'react';
import CreateClass from 'create-react-class';
import { Navigation } from 'components'
import { container, innerContainer } from './styles.css';

const MainContainer = CreateClass({
  render () {
    return (
     <div className={container}>
     <Navigation isAuthed={false}/>
     <div className={innerContainer}>
     {this.props.children}
     </div>
     </div>
      )
  },
})

export default MainContainer
