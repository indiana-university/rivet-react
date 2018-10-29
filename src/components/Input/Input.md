Text inputs are the basic building blocks forms. They allow users to enter various types of data into web-based forms.

View the [Rivet documentation for Text Inputs](https://rivet.uits.iu.edu/components/forms/text-input/).

### Text input example

Use the `note` property to provide contextual information to the user.

```jsx
<Input type="text" name="text-demo" label="Text Input" note="This is a note." margin={{ bottom: 'md' }} />
<Input type="text" name="text-demo-disabled" label="Text Input (Disabled)" disabled />
```

### Inline Validation

Use the `variant` property along with a `note` to provide validation feedback to the user.

```jsx
<Input type="text"
       name="valid-input"
       variant="success"
       label="First Name"
       note={<><strong>First Name</strong> is valid</>}
       margin={{bottom: 'md'}} />

<Input type="text"
       name="warning-input"
       variant="warning"
       label="Password"
       note={<>Your <strong>Password</strong> is weak</>}
       margin={{bottom: 'md'}} />

<Input type="text"
       name="error-input"
       variant="danger"
       label="Username"
       note={<>The <strong>Username</strong> you entered is taken</>}
       margin={{bottom: 'md'}} />

<Input type="text"
       name="info-input"
       variant="info"
       label="Description"
       note={<>The <strong>Description</strong> tells users more about this stuff.</>}
       margin={{bottom: 'md'}} />
```
