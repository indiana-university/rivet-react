import * as React from 'react'
import 'rivet-uits/css/rivet.min.css'

import Dropdown from './components/Dropdown';
import File from './components/File';
import Header from './components/Header';
import Modal from './components/Modal';
import Section from './components/Section';
import Table from './components/Table';
import TableRow from './components/TableRow';
import Tabs from './components/Tabs';

import {
    Alert,
    Button,
    ButtonGroup,
    Checkbox,
    Col,
    Container,
    DismissibleAlert,
    Footer,
    Form,
    Grid,
    Input,
    List,
    Nav,
    RadioButton,
    SegmentedButton,
    Textarea,
} from './components';


/**
 * The Rivet Header supports several different configurations depending on the structure of the application.
 * Below are a series of test Headers that variously include/exclude:
 *    a logged-in user
 *    app navigation elements,
 *    user task elements (only with logged-in user).
 * See also: https://rivet.uits.iu.edu/components/navigation/header/
 */

const appNav = [
    { href: "#nav1", label: "Nav 1",  },
    { href: "#nav2", label: "Nav 2", subnav: [
        { href: "#item1", label: "Item 1" },
        { href: "#item2", label: "Item 2" },
        { href: "#item3", label: "Item 3" }
    ]},
    { label: "Nav 3", onClick: ()=>console.log("Nav 3 clicked"), subnav: [
        { href: "#item1", label: "Item 1"  },
        { href: "#item2", label: "Item 2"  },
        { href: "#item3", label: "Item 3"  }
    ]}
]

const userNav = [
    {label: "Task 1", to: '/profile'},
    {label: "Task 2", to: '/settings'},
    {label: "Task 3", to: '/logout'},
]

const tab1 = (
    <>
        <span className="rvt-ts-23 rvt-text-bold">Panel 1</span>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </>
);


const tab2 = (
    <>
        <span className="rvt-ts-23 rvt-text-bold">Panel 2</span>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </>
);


const tab3 = (
    <>
        <span className="rvt-ts-23 rvt-text-bold">A grid inside a tab panel</span>
        <Grid>
            <Col md={4}>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Col>
            <Col md={8}>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Col>
        </Grid>
    </>
);

const tabs = [
    { label: "Tab one", content: tab1 },
    { label: "Tab two", content: tab2 },
    { label: "Tab three", content: tab3 }
]

// const header = <Header key={1} />
// const header = <Header key={1} nav={appNav} />
// const header = <Header key={1} avatar="JL" user="jolamar" logout={()=>console.log('logged out')} />
// const header = <Header key={1} avatar="JL" user="jolamar" nav={appNav} logout={()=>console.log('logged out')} />
// const header = <Header key={1} avatar="JL" user="jolamar" userNav={userNav} logout={()=>console.log('logged out')} />
const header = <Header avatar="JL" user="jolamar" nav={appNav} userNav={userNav}
                       logout={() => console.log('logged out')}/>

interface Dictionary<T> {
    [key: string]: T;
}
interface DemoProps { }
interface DemoState {
    activeModal?: string;
    desktopActiveDropdown?: string;
    drawerDropdownVisibility: Dictionary<boolean>;
};

class Demo extends React.Component<DemoProps, DemoState> {

    constructor(props: DemoProps) {
        super(props);
        this.state = {
            drawerDropdownVisibility: {},
            desktopActiveDropdown: undefined,
            activeModal: undefined,
        };

        this.toggleDrawerDropdown = this.toggleDrawerDropdown.bind(this)
        this.toggleDesktopDropdown = this.toggleDesktopDropdown.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }


    public render() {
        return (
            <>
                {header}
                <main id="main-content">
                    <Container width="freshman" margin={{top: 'md'}}>
                        <h1>Rivet 1.0.0 React Components Demo</h1>

                        <Tabs vertical className="rvt-m-bottom-md" tabs={tabs} />
                        
                        <ButtonGroup>
                            <Dropdown toggleDesktopDropdown={this.toggleDesktopDropdown} desktopActiveDropdown={this.state.desktopActiveDropdown} id="request-group-ownership-dropdown" title="Request Group Ownership">
                                <button>For an existing group</button>
                                <button>For all of a users's group</button>
                            </Dropdown>
                            <Button onClick={() => console.log("hello")}>Hello</Button>
                            <Button onClick={() => console.log("world")} role="secondary">World</Button>
                        </ButtonGroup>

                        <SegmentedButton margin={{ top: 'md', bottom: 'lg' }} fit>
                            <Button onClick={() => console.log("one")} role="secondary" >One</Button>
                            <Button onClick={() => console.log("two")} role="secondary" >Two</Button>
                            <Button onClick={() => console.log("three")} role="secondary" >Three</Button>
                        </SegmentedButton>

                        <h1>Forms</h1>

                        <Form label="Checkboxes inline" margin={{ top: "md" }}>
                            <List orientation="inline">
                                <li><Checkbox name="numbers" label="One" /></li>
                                <li><Checkbox name="numbers" label="Two" /></li>
                            </List>
                        </Form>

                        <Form label="Radio buttons inline" margin={{ top: "md" }}>
                            <List orientation="inline">
                                <li><RadioButton name="number" label="One" /></li>
                                <li><RadioButton name="number" label="Two" /></li>
                            </List>
                        </Form>

                        <Form label="Mixed inputs" margin={{ top: "md" }}>
                            <List orientation="inline">
                                <li><Input type="number" name="number" label="One Fish" /></li>
                                <li><Input type="number" name="numbers" label="Two Fish" /></li>
                                <li><RadioButton name="either" label="Red Fish" /></li>
                                <li><RadioButton name="either" label="Blue Fish" /></li>
                            </List>
                        </Form>

                        <label htmlFor="select-demo">Select input:</label>
                        <select id="select-demo">
                            <option>Choose an option...</option>
                            <option value="Option One">Option One</option>
                            <option value="Option One">Option Two</option>
                            <option value="Option One">Option Three</option>
                            <option value="Option One">Option Four</option>
                        </select>


                        <div className="rvt-m-top-md">
                            <File name="profile" />
                        </div>
                    </Container>
                </main>

                <Section margin="sm">
                    <h1> Text Inputs </h1>
                    <Input type="text" name="input" label="Text Input" margin={{top: "md"}} />
                    <Input type="text" name="inputWithNote" label="Input with Note" note="Here's the note!" margin={{top: "md"}} />
                    <Input type="number" name="input" label="Numeric Input" note="I have a spinner and only accept numbers." margin={{top: "md"}} />
                    <Input type="text" variant="info" name="inputWithInfo" label="Input with Info" note="Password must have at least 1 emoji" margin={{top: "md"}} />
                    <Input type="text" variant="valid" name="inputWithValid" label="Valid Input" note="Password is strong" margin={{top: "md"}} />
                    <Input type="text" variant="warning" name="inputWithWarning" label="Warning Input" note="Password is too weak"  margin={{top: "md"}} />
                    <Input type="text" variant="invalid" name="inputWithInvalid" label="Invalid Input" note="Password is required" margin={{top: "md", bottom: "md"}} />
                </Section>

                <Section margin="sm">
                    <h1> Text Areas </h1>
                    <Textarea name="textarea" label="Text Area" margin={{top: "md"}} />
                    <Textarea name="textareaWithNote" label="Text Area with Note" note="Here's the note!" margin={{top: "md"}} />
                    <Textarea variant="info" name="textareaWithInfo" label="Text Area with Info" note="Submissions must have at least 1 emoji" margin={{top: "md"}} />
                    <Textarea variant="valid" name="textareaWithValid" label="Valid Text Area" note="Submission is strong" margin={{top: "md"}} />
                    <Textarea variant="warning" name="textareaWithWarning" label="Warning Text Area" note="Submission is too weak"  margin={{top: "md"}} />
                    <Textarea variant="invalid" name="textareaWithInvalid" label="Invalid Text Area" note="Submission is required" margin={{top: "md", bottom: "md"}} />
                </Section>

                <Section margin='sm'>

                    <h1>Spacing and Type Scale</h1>
                    <Section margin={{bottom: 'lg'}}>
                        <Section style={{border: '1px solid black'}} margin='xxs' ts={12}>XXS Margin Twelve</Section>
                        <Section style={{border: '1px solid black'}} padding='xxl' ts={52}>XXL Padded Fifty Two</Section>
                    </Section>

                    <h1>Buttons</h1>
                    <Section margin={{bottom: 'lg'}}>
                        <SegmentedButton margin='xxs'>
                            <Button onClick={() => {
                                window.alert('Primary Button Click')
                            }}>Primary</Button>
                            <Button variant="success" onClick={() => {
                                window.alert('Success Button Click')
                            }}>Success</Button>
                            <Button variant="danger" onClick={() => {
                                window.alert('Danger Button Click')
                            }}>Danger</Button>
                            <Button /* no onClick means disabled */>Disabled</Button>
                        </SegmentedButton>
                        <br/>
                        <SegmentedButton margin='xxs'>
                            <Button role="secondary" onClick={() => {
                                window.alert('Secondary Button Click')
                            }}>Primary</Button>
                            <Button role="secondary" variant="success" onClick={() => {
                                window.alert('Secondary Success Button Click')
                            }}>Success</Button>
                            <Button role="secondary" variant="danger" onClick={() => {
                                window.alert('Secondary Danger Button Click')
                            }}>Danger</Button>
                            <Button /* no onClick means disabled */>Disabled</Button>
                        </SegmentedButton>
                        <br/>
                        <SegmentedButton margin='xxs'>
                            <Button size="small" onClick={() => {
                                window.alert('Small Button Click')
                            }}>Small</Button>
                            <Button size="small" variant="success" onClick={() => {
                                window.alert('Small Success Button Click')
                            }}>Success</Button>
                            <Button size="small" variant="danger" onClick={() => {
                                window.alert('Small Danger Button Click')
                            }}>Danger</Button>
                            <Button size="small" role="secondary" onClick={() => {
                                window.alert('Small Secondary Button Click')
                            }}>Primary</Button>
                            <Button size="small" role="secondary" variant="success" onClick={() => {
                                window.alert('Small Secondary Success Button Click')
                            }}>Success</Button>
                            <Button size="small" role="secondary" variant="danger" onClick={() => {
                                window.alert('Small Secondary Danger Button Click')
                            }}>Danger</Button>
                        </SegmentedButton>

                        <ButtonGroup>
                            <Button onClick={() => {this.toggleModal("modal-example")}}>Modal</Button>
                            <Button onClick={() => {this.toggleModal("modal-example-2")}}>Modal 2</Button>
                        </ButtonGroup>

                        <Modal toggleModal={this.toggleModal} activeModal={this.state.activeModal} id="modal-example" title="Transfer group account(s)">
                            <p>Your are requesting the transfer of groups:<br/><strong>ITDJHNWEB, JTDJHNWEB, DSOIUFNWEB,
                                DOSIFUSDOIF</strong></p>
                        </Modal>

                        <Modal toggleModal={this.toggleModal} activeModal={this.state.activeModal} id="modal-example-2" title="Transfer group account(s)">
                            <p>ANOTHER MODAL</p>
                        </Modal>

                    </Section>

                    <h1>Alerts</h1>
                    <Section margin={{bottom: 'lg'}}>
                        <Alert className="rvt-m-top-md" variant="message">This warning has no title!</Alert>
                        <Alert className="rvt-m-top-md" variant="info" title='Info'>A nice message for you!</Alert>
                        <Alert className="rvt-m-top-md" variant="success" title='Success!'>A great success for you!</Alert>
                        <DismissibleAlert className="rvt-m-top-md" variant="error" title='Error'
                               onDismiss={() => window.alert('You click dismiss error?!?')}>
                               A friendly error for you that can be dismissed!
                        </DismissibleAlert>
                    </Section>


                    <h1>Lists</h1>
                    <Section margin={{bottom: 'lg'}}>
                        <List border="bottom">
                            <li>An</li>
                            <li>unordered</li>
                            <li>list</li>
                        </List>
                        <List variant="ordered" border="bottom">
                            <li>An</li>
                            <li>ordered</li>
                            <li>list</li>
                        </List>
                        <List variant="plain" border="bottom">
                            <li>A</li>
                            <li>plain (undecorated)</li>
                            <li>list</li>
                        </List>
                        <List orientation="inline" children={['this', 'list', 'is', 'inline']} border="bottom"/>
                        <List orientation="inline" >
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

                    <h1>Grid</h1>
                    <Container margin={{top: 'sm', bottom: 'lg'}}>
                        <Grid>
                            <Col lg={6} sm={8}>
                                <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
                            </Col>
                            <Col lg={3} sm={4}>
                                <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
                            </Col>
                            <Col sm>
                                <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
                            </Col>
                            <Col xxl={1}>
                                <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
                            </Col>
                        </Grid>
                    </Container>

                </Section>
                <Footer nav={[ new Nav("Rivet Documentation", "https://rivet.uits.iu.edu") ]}/>
            </>
        )
    }

    private toggleDesktopDropdown(key: string) {
        const nextState = key === this.state.desktopActiveDropdown ? undefined : key;
        this.setState({
            desktopActiveDropdown: nextState
        })
    }

    private toggleDrawerDropdown(key: string) {
        const nextState = Object.assign({}, this.state.drawerDropdownVisibility);
        nextState[key] = !nextState[key];
        this.setState({
            drawerDropdownVisibility: nextState
        })
    }

    private toggleModal(key: string) {
        this.setState({
            activeModal: key
        })
    }
}

export default Demo
