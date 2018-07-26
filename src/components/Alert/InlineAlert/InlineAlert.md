### Standalone Inline Alerts

Inline alerts in Rivet should be used for form validation situations where [the standard inline form input validation](#/Forms?id=input) error would not make sense. For instance, marking a group of radio buttons or checkboxes may generate an input error. Adding the `standalone` property to the standard inline alert element will give the alert a subtle background color and left border to add some visual contrast.

When using standalone inline alerts with a group of inputs, make sure to add the `aria-describedby` attribute to each input (in this case radio buttons) that is invalid. The `aria-describedy` by value should correspond to a matching `id` property on the `InlineAlert` element.

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
