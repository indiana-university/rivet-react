import React, {Component} from 'react'
import {render} from 'react-dom'

import { Alert, Button } from '../../src/components'

class Demo extends Component {
  render() {
    return <div className="rvt-container rvt-container--freshman m-top-md">
      <h1>Rivet 1.0.0 React Components Demo</h1>

      <Alert className="m-top-md" clickDismiss={function(){console.log('dismissed alert')}}>Base</Alert>
      <Alert error className="m-top-md" clickDismiss={function(){console.log('dismissed alert')}}>Error</Alert>
      <Alert info className="m-top-md" clickDismiss={function(){console.log('dismissed alert')}}>Info</Alert>
      <Alert success className="m-top-md" clickDismiss={function(){console.log('dismissed alert')}}>Success</Alert>

      <Button onClick={function(){console.log("hello")}} className="button m-top-md">Hello</Button>
      <Button onClick={function(){console.log("world")}} className="button m-left-md button--secondary m-top-lg">World</Button>


    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
