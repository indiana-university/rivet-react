### Text Areas
```jsx
<Textarea name="textarea-demo" label="Text Area" margin={{bottom: "md"}} />
<Textarea name="textarea-demo-disabled" label="Text Area (Disabled)" disabled />
```

### Text Area Inline Validation
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
