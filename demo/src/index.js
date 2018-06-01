import React, {Component} from 'react'
import {render} from 'react-dom'

import 'rivet-uits/css/rivet.min.css'

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


/**
 * The Rivet Header supports several different configurations depending on the structure of the application.
 * Below are a series of test Headers that variously include/exclude:
 *    a logged-in user
 *    app navigation elements,
 *    user task elements (only with logged-in user).
 * See also: https://rivet.uits.iu.edu/components/navigation/header/
 */

const appNav = [
    { label: "Nav 1", onClick: ()=>console.log("Nav 1 clicked") },
    { label: "Nav 2", href: "#nav2", subnav: [
        { label: "Item 1", href: "#item1" },
        { label: "Item 2", href: "#item2" },
        { label: "Item 3", href: "#item3" }
    ]},
    { label: "Nav 3", onClick: ()=>console.log("Nav 3 clicked"), subnav: [
        { label: "Item 1", onClick: ()=>console.log("Item 1 clicked") },
        { label: "Item 2", onClick: ()=>console.log("Item 2 clicked") },
        { label: "Item 3", onClick: ()=>console.log("Item 3 clicked") }
    ]}
]

const userNav = [
    {label: "Task 1", onClick: () => console.log("Task 1 clicked")},
    {label: "Task 2", onClick: () => console.log("Task 2 clicked")},
    {label: "Task 3", onClick: () => console.log("Task 3 clicked")},
]

//const header = <Header key={1} />
//const header = <Header key={1} nav={appNav} />
//const header = <Header key={1} avatar="JL" user="jolamar" logout={()=>console.log('logged out')} />
//const header = <Header key={1} avatar="JL" user="jolamar" nav={appNav} logout={()=>console.log('logged out')} />
//const header = <Header key={1} avatar="JL" user="jolamar" userNav={userNav} logout={()=>console.log('logged out')} />
const header = <Header key={1} avatar="JL" user="jolamar" nav={appNav} userNav={userNav}
                       logout={() => console.log('logged out')}/>

class Demo extends Component {
    render() {
        return [
            header
            , <div key={2} className="rvt-container rvt-container--freshman rvt-m-top-md">
                <h1>Rivet 1.0.0 React Components Demo</h1>

                <Alert className="rvt-m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Base</Alert>
                <Alert error className="rvt-m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Error</Alert>
                <Alert info className="rvt-m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Info</Alert>
                <Alert success className="rvt-m-top-md" clickDismiss={function () {
                    console.log('dismissed alert')
                }}>Success</Alert>

                <Button onClick={function () {
                    console.log("hello")
                }} className="rvt-m-top-md">Hello</Button>
                <Button onClick={function () {
                    console.log("world")
                }} className="rvt-m-left-md rvt-button--secondary rvt-m-top-lg">World</Button>


                <div className="rvt-m-top-md">
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

                <form className="rvt-m-top-sm">
                    <fieldset>
                        <legend className="sr-only">Checkboxes inline</legend>
                        <ul className="rvt-inline-list">
                            <li>
                                <Checkbox name="numbers" label="One"/>
                            </li>
                            <li>
                                <Checkbox name="numbers" label="Two"/>
                            </li>
                        </ul>
                    </fieldset>
                </form>


                <form className="rvt-m-top-sm">
                    <fieldset>
                        <legend className="rvt-sr-only">Radio buttons inline</legend>
                        <ul className="rvt-inline-list">
                            <li>
                                <RadioButton name="number" label="One"/>
                            </li>
                            <li>
                                <RadioButton name="number" label="Two"/>
                            </li>
                        </ul>
                    </fieldset>
                </form>


                <form className="rvt-m-top-sm">
                    <fieldset>
                        <legend className="rvt-sr-only">Mixed inputs inline</legend>
                        <ul className="rvt-inline-list">
                            <li>
                                <Input name="number" label="One"/>
                            </li>
                            <li>
                                <Input name="numbers" label="Two"/>
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


                <div className="rvt-m-top-md">
                    <File name="profile"/>
                </div>

            </div>,

            <Section key={3} margin='sm'>


                <h1>Spacing and Type Scale</h1>
                <Section margin={{bottom: 'lg'}}>
                    <Section style={{border: '1px solid black'}} margin='xxs' ts={12}>XXS Margin Twelve</Section>
                    <Section style={{border: '1px solid black'}} padding='xxl' ts={52}>XXL Padded Fifty Two</Section>
                </Section>

                <h1>Buttons</h1>
                <Section margin={{bottom: 'lg'}}>
                    <SegmentedButtons margin='xxs'>
                        <Button onClick={() => {
                            window.alert('Primary Button Click')
                        }}>Primary</Button>
                        <Button success onClick={() => {
                            window.alert('Success Button Click')
                        }}>Success</Button>
                        <Button danger onClick={() => {
                            window.alert('Danger Button Click')
                        }}>Danger</Button>
                        <Button /* no onClick means disabled */>Disabled</Button>
                    </SegmentedButtons>
                    <br/>
                    <SegmentedButtons margin='xxs'>
                        <Button secondary onClick={() => {
                            window.alert('Secondary Button Click')
                        }}>Primary</Button>
                        <Button secondary success onClick={() => {
                            window.alert('Secondary Success Button Click')
                        }}>Success</Button>
                        <Button secondary danger onClick={() => {
                            window.alert('Secondary Danger Button Click')
                        }}>Danger</Button>
                        <Button /* no onClick means disabled */>Disabled</Button>
                    </SegmentedButtons>
                    <br/>
                    <SegmentedButtons margin='xxs'>
                        <Button small onClick={() => {
                            window.alert('Small Button Click')
                        }}>Small</Button>
                        <Button small success onClick={() => {
                            window.alert('Small Success Button Click')
                        }}>Success</Button>
                        <Button small danger onClick={() => {
                            window.alert('Small Danger Button Click')
                        }}>Danger</Button>
                        <Button small secondary onClick={() => {
                            window.alert('Small Secondary Button Click')
                        }}>Primary</Button>
                        <Button small secondary success onClick={() => {
                            window.alert('Small Secondary Success Button Click')
                        }}>Success</Button>
                        <Button small secondary danger onClick={() => {
                            window.alert('Small Secondary Danger Button Click')
                        }}>Danger</Button>
                    </SegmentedButtons>

                    <Button data-modal-trigger="modal-example" onClick={() => {
                    }}>Modal</Button>
                    <Modal id="modal-example" title="Transfer group account(s)" clickClose={() => {
                    }}>
                        <p>Your are requesting the transfer of groups:<br/><strong>ITDJHNWEB, JTDJHNWEB, DSOIUFNWEB,
                            DOSIFUSDOIF</strong></p>
                    </Modal>

                </Section>

                <h1>Alerts</h1>
                <Section margin={{bottom: 'lg'}}>
                    <Alert margin={{bottom: 'xs'}}>This warning has no title!</Alert>
                    <Alert margin={{bottom: 'xs'}} info title='Info'>A nice message for you!</Alert>
                    <Alert margin={{bottom: 'xs'}} success title='Success!'>A great success for you!</Alert>
                    <Alert margin={{bottom: 'xs'}} error title='Error'
                           clickDismiss={() => window.alert('You click dismiss error?!?')}>A friendly error for
                        you!</Alert>
                </Section>

                <h1>Lists</h1>
                <Section margin={{bottom: 'lg'}}>
                    <List children={['some', 'unordered', 'stuff']}/>
                    <List ordered children={['some', 'ordered', 'stuff']}/>
                    <List plain children={['this', 'list', 'is', 'plain']}/>
                    <List inline children={['this', 'list', 'is', 'inline']}/>
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
                    <TableRow header children={['Some', 'Header', 'Labels']}/>
                    </thead>
                    <tbody>
                    <TableRow children={['A', 'Data', 'Row']}/>
                    <TableRow children={['Another', 'Data', 'Row']}/>
                    </tbody>
                </Table>

                <h2>Plain</h2>
                <Table plain margin={{bottom: 'md'}}>
                    <thead>
                    <TableRow header children={['Some', 'Header', 'Labels']}/>
                    </thead>
                    <tbody>
                    <TableRow children={['A', 'Data', 'Row']}/>
                    <TableRow children={['Another', 'Data', 'Row']}/>
                    </tbody>
                </Table>

                <h2>Stripey</h2>
                <Table stripes margin={{bottom: 'md'}}>
                    <thead>
                    <TableRow header children={['Some', 'Header', 'Labels']}/>
                    </thead>
                    <tbody>
                    <TableRow children={['A', 'Data', 'Row']}/>
                    <TableRow children={['Another', 'Data', 'Row']}/>
                    </tbody>
                </Table>

            </Section>,
            <Footer key={4}/>
        ]
    }
}

render(<Demo/>, document.querySelector('#demo'))
