Checkboxes allow users to select one or more options from a list of choices.

View the [Rivet documentation for Checkboxes](https://rivet.uits.iu.edu/components/forms/checkboxes/).

### Inline Checkboxes

A `List` with an `inline` orientation will display the checkboxes horizontally.

```jsx
<fieldset>
    <legend className="rvt-sr-only">Inline Checkboxes</legend>
    <List orientation="inline">
        <Checkbox name="checkbox-demo" label="Option One" />
        <Checkbox name="checkbox-demo" label="Option Two" />
    </List>
</fieldset>
```

### Checkbox List

A `List` with the `plain` variant will display the checkboxes vertically.

```jsx
<fieldset>
    <legend className="rvt-sr-only">Checkbox List</legend>
    <List variant="plain">
        <Checkbox name="checkbox-demo" label="Option One" />
        <Checkbox name="checkbox-demo" label="Option Two" defaultChecked />
        <Checkbox name="checkbox-demo" label="Option Three (Disabled)" disabled />
        <Checkbox name="checkbox-demo" label="Option Four (Checked, Disabled)" checked disabled />
    </List>
</fieldset>
```

### Indeterminate State
The current pre-release version of _rivet-react_ does not support checkboxes with indeterminant state. However, we plan to add support by version 1.0.0. Follow this [Github issue](https://github.com/indiana-university/rivet-react/issues/15) for details.
