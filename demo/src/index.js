import React, {Component} from 'react'
import {render} from 'react-dom'

import {
    Alert,
    Button,
    Checkbox,
    File,
    Footer,
    Header,
    Input,
    List,
    Modal,
    RadioButton,
    Section,
    SegmentedButtons,
    Table,
    TableRow
} from '../../src'

class Demo extends Component {
    render() {
        return [
            <Header avatar="JL" user="jolamar" logout={()=>console.log('logged out')} />
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
                        }} secondary>One</Button>
                        <Button onClick={function () {
                            console.log("two")
                        }} secondary>Two</Button>
                        <Button onClick={function () {
                            console.log("three")
                        }} secondary>Three</Button>
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

                <label htmlFor="select-demo">Select input:</label>
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

            </div>,

            <Section margin='sm'>


                <h1>Spacing and Type Scale</h1>
                <Section margin={{bottom: 'lg'}}>
                    <Section style={{border: '1px solid black'}} margin='xxs' ts={12}>XXS Margin Twelve</Section>
                    <Section style={{border: '1px solid black'}} padding='xxl' ts={52}>XXL Padded Fifty Two</Section>
                </Section>

                <h1>Buttons</h1>
                <Section margin={{bottom: 'lg'}}>
                    <SegmentedButtons margin='xxs'>
                        <Button onClick={() => { window.alert('Primary Button Click') }}>Primary</Button>
                        <Button success onClick={() => { window.alert('Success Button Click') }}>Success</Button>
                        <Button danger onClick={() => { window.alert('Danger Button Click') }}>Danger</Button>
                        <Button /* no onClick means disabled */>Disabled</Button>
                    </SegmentedButtons>
                    <br />
                    <SegmentedButtons margin='xxs'>
                        <Button secondary onClick={() => { window.alert('Secondary Button Click') }}>Primary</Button>
                        <Button secondary success onClick={() => { window.alert('Secondary Success Button Click') }}>Success</Button>
                        <Button secondary danger onClick={() => { window.alert('Secondary Danger Button Click') }}>Danger</Button>
                        <Button /* no onClick means disabled */>Disabled</Button>
                    </SegmentedButtons>
                    <br />
                    <SegmentedButtons margin='xxs'>
                        <Button small onClick={() => { window.alert('Small Button Click') }}>Small</Button>
                        <Button small success onClick={() => { window.alert('Small Success Button Click') }}>Success</Button>
                        <Button small danger onClick={() => { window.alert('Small Danger Button Click') }}>Danger</Button>
                        <Button small secondary onClick={() => { window.alert('Small Secondary Button Click') }}>Primary</Button>
                        <Button small secondary success onClick={() => { window.alert('Small Secondary Success Button Click') }}>Success</Button>
                        <Button small secondary danger onClick={() => { window.alert('Small Secondary Danger Button Click') }}>Danger</Button>
                    </SegmentedButtons>
                </Section>

                <h1>Alerts</h1>
                <Section margin={{bottom: 'lg'}}>
                    <Alert margin={{bottom: 'xs'}}>This warning has no title!</Alert>
                    <Alert margin={{bottom: 'xs'}} info title='Info'>A nice message for you!</Alert>
                    <Alert margin={{bottom: 'xs'}} success title='Success!'>A great success for you!</Alert>
                    <Alert margin={{bottom: 'xs'}} error title='Error'
                           clickDismiss={() => window.alert('You click dismiss error?!?')}>A friendly error for you!</Alert>
                </Section>

                <h1>Lists</h1>
                <Section margin={{bottom: 'lg'}}>
                    <List children={['some', 'unordered', 'stuff']} />
                    <List ordered children={['some', 'ordered', 'stuff']} />
                    <List plain children={['this', 'list', 'is', 'plain']} />
                    <List inline children={['this', 'list', 'is', 'inline']} />
                    <List inline>
                        <Button>This</Button>
                        <Button>is</Button>
                        <Button>inline</Button>
                        <Button>list</Button>
                        <Button onClick={() => window.alert('you click "of"!')}>of</Button>
                        <Button>buttons</Button>
                    </List>
                </Section>

                <h1>Tables</h1>
                <h2>Default</h2>
                <Table margin={{bottom: 'md'}}>
                    <thead>
                    <TableRow header children={['Some', 'Header', 'Labels']} />
                    </thead>
                    <tbody>
                    <TableRow children={['A', 'Data', 'Row']} />
                    <TableRow children={['Another', 'Data', 'Row']} />
                    </tbody>
                </Table>

                <h2>Plain</h2>
                <Table plain margin={{bottom: 'md'}}>
                    <thead>
                    <TableRow header children={['Some', 'Header', 'Labels']} />
                    </thead>
                    <tbody>
                    <TableRow children={['A', 'Data', 'Row']} />
                    <TableRow children={['Another', 'Data', 'Row']} />
                    </tbody>
                </Table>

                <h2>Stripey</h2>
                <Table stripes margin={{bottom: 'md'}}>
                    <thead>
                    <TableRow header children={['Some', 'Header', 'Labels']} />
                    </thead>
                    <tbody>
                    <TableRow children={['A', 'Data', 'Row']} />
                    <TableRow children={['Another', 'Data', 'Row']} />
                    </tbody>
                </Table>

            </Section>,
            <Footer />
        ]
    }
}

render(<Demo/>, document.querySelector('#demo'))
