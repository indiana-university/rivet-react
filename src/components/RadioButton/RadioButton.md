Radio buttons allow users to select a single value out of a set number of choices.

View the (Rivet Documentation for Radio Buttons)[https://rivet.uits.iu.edu/components/forms/radio-buttons/].

### Inline Radio Button Example

Radio buttons are arranged within a `List`. Use the `List` *inline* `orientation` to display the radio buttons horizontally (inline). 

```jsx
<fieldset>
    <legend className="rvt-sr-only">Inline Checkboxes</legend>
    <List orientation="inline">
        <RadioButton name="radio-inline-demo" label="Option One" />
        <RadioButton name="radio-inline-demo" label="Option Two" />
    </List>
</fieldset>
```

### Radio Button List

Use the `List` *plain* `variant` to display the radio buttons in a vertical list without decoration. 

```jsx
<fieldset>
    <legend className="rvt-sr-only">Checkbox List</legend>
    <List variant="plain">
        <RadioButton name="radio-list-demo" label="Option One" />
        <RadioButton name="radio-list-demo" label="Option Two" defaultChecked />
        <RadioButton name="radio-list-demo-2" label="Option Three (Disabled)" disabled />
        <RadioButton name="radio-list-demo-2" label="Option Four (Checked, Disabled)" checked disabled />
    </List>
</fieldset>
```
