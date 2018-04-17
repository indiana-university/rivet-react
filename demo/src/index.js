import React, {Component} from 'react'
import {render} from 'react-dom'

import {
    Alert,
    Button,
    Checkbox,
    File,
    Header,
    Input,
    RadioButton,
    SegmentedButtons
} from '../../src/components'

class Demo extends Component {
    render() {
        return [
            <Header />
            ,<div className="rvt-container rvt-container--freshman m-top-md">
                <h1>Rivet 1.0.0 React Components Demo</h1>

                <Alert className="m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Base</Alert>
                <Alert error className="m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Error</Alert>
                <Alert info className="m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Info</Alert>
                <Alert success className="m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Success</Alert>

                <Button onClick={function () {
                    console.log("hello")
                }} className="button m-top-md">Hello</Button>
                <Button onClick={function () {
                    console.log("world")
                }} className="button m-left-md button--secondary m-top-lg">World</Button>


                <div className="m-top-md">
                    <SegmentedButtons label="Numbers" fit>
                        <Button onClick={function () {
                            console.log("one")
                        }} className="button button--secondary">One</Button>
                        <Button onClick={function () {
                            console.log("two")
                        }} className="button button--secondary">Two</Button>
                        <Button onClick={function () {
                            console.log("three")
                        }} className="button button--secondary">Three</Button>
                    </SegmentedButtons>
                </div>

                <form className="m-top-sm">
                    <fieldset>
                        <legend className="sr-only">Checkboxes inline</legend>
                        <ul className="rvt-inline-list">
                            <li>
                                <Checkbox name="numbers" label="One" />
                            </li>
                            <li>
                                <Checkbox name="numbers" label="Two" />
                            </li>
                        </ul>
                    </fieldset>
                </form>


                <form className="m-top-sm">
                    <fieldset>
                        <legend className="sr-only">Radio buttons inline</legend>
                        <ul className="rvt-inline-list">
                            <li>
                                <RadioButton name="number" label="One" />
                            </li>
                            <li>
                                <RadioButton name="number" label="Two" />
                            </li>
                        </ul>
                    </fieldset>
                </form>




                <form className="m-top-sm">
                    <fieldset>
                        <legend className="sr-only">Mixed inputs inline</legend>
                        <ul className="rvt-inline-list">
                            <li>
                                <Input name="number" label="One" />
                            </li>
                            <li>
                                <Input name="numbers" label="Two" />
                            </li>
                        </ul>
                    </fieldset>
                </form>

                <label for="select-demo">Select input:</label>
                <select id="select-demo">
                    <option>Choose an option...</option>
                    <option value="Option One">Option One</option>
                    <option value="Option One">Option Two</option>
                    <option value="Option One">Option Three</option>
                    <option value="Option One">Option Four</option>
                </select>



                <div className="m-top-md">
                    <File name="profile" />
                </div>

            </div>
        ]
    }
}

render(<Demo/>, document.querySelector('#demo'))
