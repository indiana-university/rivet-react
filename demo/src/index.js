import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

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
    TableRow,
    Tabs
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
    { label: "Nav 1", href: "#nav1" },
    { label: "Nav 2", href: "#nav2", subnav: [
        { label: "Item 1", href: "#item1" },
        { label: "Item 2", href: "#item2" },
        { label: "Item 3", href: "#item3" }
    ]},
    { label: "Nav 3", onClick: ()=>console.log("Nav 3 clicked"), subnav: [
        { label: "Item 1", href: "#item1" },
        { label: "Item 2", href: "#item2" },
        { label: "Item 3", href: "#item3" }
    ]}
]

const userNav = [
    {label: "Task 1", to: '/profile'},
    {label: "Task 2", to: '/settings'},
    {label: "Task 3", to: '/logout'},
]

const tab1 = <React.Fragment>
    <span className="rvt-ts-23 rvt-text-bold">Panel 1</span>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</React.Fragment>


const tab2 = <React.Fragment>
    <span className="rvt-ts-23 rvt-text-bold">Panel 2</span>
    <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</React.Fragment>


const tab3 = <React.Fragment>
    <span className="rvt-ts-23 rvt-text-bold">A grid inside a tab panel</span>
    <div className="rvt-grid">
        <div className="rvt-grid__item-4-md-up">
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="rvt-grid__item-8-md-up">
            <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</React.Fragment>

const tabs = [
    { label: "Tab one", content: tab1 },
    { label: "Tab two", content: tab2 },
    { label: "Tab three", content: tab3 }
]

//const header = <Header key={1} />
//const header = <Header key={1} nav={appNav} />
//const header = <Header key={1} avatar="JL" user="jolamar" logout={()=>console.log('logged out')} />
//const header = <Header key={1} avatar="JL" user="jolamar" nav={appNav} logout={()=>console.log('logged out')} />
//const header = <Header key={1} avatar="JL" user="jolamar" userNav={userNav} logout={()=>console.log('logged out')} />
const header = <Header avatar="JL" user="jolamar" nav={appNav} userNav={userNav}
                       logout={() => console.log('logged out')}/>

class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                {header}
                <div className="rvt-container rvt-container--freshman rvt-m-top-md">
                    <h1>Rivet 1.0.0 React Components Demo</h1>

                    <Tabs vertical  tabs={tabs} />

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

                </div>

                <Section margin='sm'>


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

                </Section>
                <Footer />
            </React.Fragment>
        )
    }
}

const demo = <BrowserRouter>
                <Demo/>
            </BrowserRouter>
render(demo, document.querySelector('#demo'))
