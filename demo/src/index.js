import React, {Component} from 'react'
import {render} from 'react-dom'

import { Alert, Button } from '../../src/components'

class Demo extends Component {
  render() {
    return <div>
      <h1>rivet-react-nwb Demo</h1>
      <Button>Hello</Button>
      <Alert>ALERT!</Alert>'
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
