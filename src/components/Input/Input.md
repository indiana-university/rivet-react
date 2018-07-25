### Default Style
```jsx
<Input type="text" name="text-demo" label="Text Input" note="This is a note." margin={{ bottom: 'md' }} />
<Input type="text" name="text-demo-disabled" label="Text Input (Disabled)" disabled />
```

### Input Inline Validation
```jsx
<Input type="text" 
       name="valid-input" 
       variant="valid" 
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
       variant="invalid" 
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
