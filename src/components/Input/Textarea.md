### Textarea Example

Use the `note` property to provide contextual information to the user.

```jsx
<Textarea name="textarea-demo" label="Text Area" margin={{bottom: "md"}} />
<Textarea name="textarea-demo-disabled" label="Text Area (Disabled)" disabled />
```

### Inline Validation 

Use the `variant` property along with a `note` to provide validation feedback to the user.

```jsx
<Textarea name="textarea-valid" 
          variant="valid" 
          label="Essay" 
          note={<>Your <strong>Essay</strong> is valid!</>} 
          margin={{bottom: "md"}} />

<Textarea name="textarea-warning" 
          variant="warning" 
          label="Response" 
          note={<>Your <strong>Response</strong> has some misspellings!</>} 
          margin={{bottom: "md"}} />

<Textarea name="textarea-invalid" 
          variant="invalid" 
          label="Description" 
          note={<>Your <strong>Description</strong> has invalid characters.</>} 
          margin={{bottom: "md"}} />

<Textarea name="textarea-info" 
          variant="info"
          label="Message" 
          note={<>Add a <strong>Message</strong> to give users more information.</>} 
          margin={{bottom: "md"}} />
```
