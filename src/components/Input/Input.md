### Default Style
```jsx
<Input type="text" name="text-demo" label="Text Input" note="This is a note." margin={{ bottom: 'md' }} />
<Input type="text" name="text-demo-disabled" label="Text Input (Disabled)" disabled />
```

### Input Inline Validation
```jsx
<Input type="text" name="valid-input" label="First Name" variant="valid" 
       note={<><strong>First Name</strong> is valid</>} margin={{bottom: 'md'}} />
<Input type="text" name="warning-input" label="Password" variant="warning" 
       note={<>Your <strong>Password</strong> is weak</>} margin={{bottom: 'md'}} />
<Input type="text" name="error-input" label="Username" variant="invalid" 
       note={<>The <strong>Username</strong> you entered is taken</>} margin={{bottom: 'md'}} />
<Input type="text" name="info-input" label="Description" variant="info" 
       note={<>The <strong>Description</strong> tells users more about this stuff.</>} margin={{bottom: 'md'}} />
```
