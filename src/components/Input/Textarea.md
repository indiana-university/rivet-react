### Text Areas
```jsx
<Textarea name="textarea-demo" label="Text Area" margin={{bottom: "md"}} />
<Textarea name="textarea-demo-disabled" label="Text Area (Disabled)" disabled />
```

### Text Area Inline Validation
```jsx
<Textarea name="textarea-valid" label="Essay" variant="valid" 
          note={<>Your <strong>Essay</strong> is valid!</>} margin={{bottom: "md"}} />
<Textarea name="textarea-warning" label="Response" variant="warning" 
          note={<>Your <strong>Response</strong> has some misspellings!</>} margin={{bottom: "md"}} />
<Textarea name="textarea-invalid" label="Description" variant="invalid" 
          note={<>Your <strong>Description</strong> has invalid characters.</>} margin={{bottom: "md"}} />
<Textarea name="textarea-info" label="Message" variant="info"
          note={<>Add a <strong>Message</strong> to give users more information.</>} margin={{bottom: "md"}} />
```
