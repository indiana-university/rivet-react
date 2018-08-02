### Modal

A modal is a smaller window that is displayed on top of the main application/site window. The main page is still visible but, the background is darkened to direct focus to the content of the modal window.

#### Modal Example

```jsx
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.onOpenButtonClick = this.onOpenButtonClick.bind(this); 
    this.onDismiss = this.onDismiss.bind(this); 
  } 

  render() {
    return (
      <>
        <Button onClick={this.onOpenButtonClick}>Open Modal</Button>
        <Modal 
          isOpen={this.state.open} 
          title="Modal" 
          onDismiss={this.onDismiss}
          controls={[<Button key="ok">OK</Button>, <Button key="close" onClick={this.onDismiss}>Close</Button>]}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Modal>
      </>
    );
  }

  onOpenButtonClick(e) {
    this.setState({
      open: true
    });
  }
  
  onDismiss(e) {
    this.setState({
      open: false
    });
  }
}

<ModalExample />

```

#### Modal Dialog Example

We use the generic term “Modal” to mean any smaller window that is displayed on top of the main application, but there are some subtle differences between a modal and a dialog.

A modal dialog is similar to a regular modal except that it requires the user to interact with it before continuing any interaction with the main application. The user must select from the available actions in the dialog—they cannot disregard and simply close the window.

A modal dialog is created by not providing a `onDismiss` prop.

```jsx
class DialogExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.onOpenButtonClick = this.onOpenButtonClick.bind(this); 
    this.onCloseButtonClick = this.onCloseButtonClick.bind(this); 
  } 

  render() {
    return (
      <>
        <Button onClick={this.onOpenButtonClick}>Open Dialog</Button>
        <Modal 
          isOpen={this.state.open} 
          title="Modal Dialog" 
          controls={[<Button key="close" onClick={this.onCloseButtonClick}>Close</Button>]}
        >
            <p>A modal dialog:</p>
            <ul>
              <li>Is not dismissable i.e. doesn't have an (X) button</li>
              <li>Requires user input before they continue their work</li>
            </ul>
        </Modal>
      </>
    );
  }

  onOpenButtonClick(e) {
    this.setState({
      open: true
    });
  }
  
  onCloseButtonClick(e) {
    this.setState({
      open: false
    });
  }
}

<DialogExample />
```

### StatefulModal Example

A StatefulModal provides default `onDismiss` behavior. I.e., clicking ourside of the modal or clicking the close button will close the modal.

Does not work (you can open it once and close it, but will not open again). Not sure how you can open it from the parent, but close it from within.

```jsx
class StatefulModalExample extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <>
        <Button onClick={this.onClick}>Open Modal</Button>
        <StatefulModal 
          isOpen={this.state.open} 
          title="Modal Title" 
          controls={[<Button key="modal-ok-button">OK</Button>, <Button key="modal-cancel-button">Cancel</Button>]}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </StatefulModal>
      </>

    );
  }

  onClick(e) {
    this.setState({
      open: true
    });
  }
}
<StatefulModalExample />
```
