### Modal

A modal is a smaller window that is displayed on top of the main application/site window. The main page is still visible but, the background is darkened to direct focus to the content of the modal window.

#### Modal Example

```jsx
<Modal title="Modal Title" controls={[<Button>OK</Button>, <Button>Cancel</Button>]}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <a href="#">incididunt ut labore</a> et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</Modal>
```

#### Modal Dialog Example

We use the generic term “Modal” to mean any smaller window that is displayed on top of the main application, but there are some subtle differences between a modal and a dialog.

A modal dialog is similar to a regular modal except that it requires the user to interact with it before continuing any interaction with the main application. The user must select from the available actions in the dialog—they cannot disregard and simply close the window.

```jsx
<Modal dialog title="Modal Dialog" controls={[<Button>Yes</Button>, <Button>No, thanks</Button>]}>
  <p>A modal dialog:</p>
    <ul>
      <li>Is not dismissable i.e. doesn't have an (X) button</li>
      <li>Requires user input before they continue their work</li>
    </ul>
</Modal>
```
