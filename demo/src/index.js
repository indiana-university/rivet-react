import React, {Component} from 'react'
import {render} from 'react-dom'

import { Button } from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>rivet-react-nwb Demo</h1>
      <Button>Hello</Button>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
