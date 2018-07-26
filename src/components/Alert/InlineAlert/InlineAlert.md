### Inline Alerts
```jsx
<Input
    type="text"
    variant="info"
    label="Description"
    note={<>The <strong>Description</strong> tells users more about this stuff.</>}
/>
```

### Standalone Inline Alerts
```jsx
<fieldset>
    <legend className="rvt-sr-only">Checkbox List</legend>
    <List variant="plain">
        <RadioButton name="radio-list-demo" label="Option One" />
        <RadioButton name="radio-list-demo" label="Option Two" defaultChecked />
        <RadioButton name="radio-list-demo-2" label="Option Three (Disabled)" disabled />
        <RadioButton name="radio-list-demo-2" label="Option Four (Checked, Disabled)" checked disabled />
    </List>
    <InlineAlert standalone variant='invalid'>This field is required to continue.</InlineAlert>
</fieldset>
```
