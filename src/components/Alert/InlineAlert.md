An `InlineAlert` should be used for form validation situations where [the standard inline form input validation](#/Forms?id=input) error would not make sense. For instance, marking a group of radio buttons or checkboxes may generate an input error. 

When using inline alerts with a group of inputs, make sure to add the `aria-describedby` attribute to each invalid input element. The `aria-describedy` value should correspond to a matching `id` property on the `InlineAlert` element.

View the [Rivet documentation for Standalone Inline Alerts](https://rivet.uits.iu.edu/components/overlays/alerts/#standalone-inline-alerts).

```jsx
<fieldset>
    <legend className="rvt-sr-only">Radio Button List</legend>
    <List variant="plain">
        <RadioButton name="radio-list-demo" label="Option One" aria-describedby="alert" />
        <RadioButton name="radio-list-demo" label="Option Two" aria-describedby="alert" />
    </List>
    <InlineAlert id="alert" variant="danger">You must choose an option to continue.</InlineAlert>
</fieldset>
```

You can use the `standalone` property to give the alert a subtle background color and left border to add some visual contrast.

```jsx
<fieldset>
    <legend className="rvt-sr-only">Radio Button List</legend>
    <List variant="plain">
        <RadioButton name="radio-list-demo" label="Option One" aria-describedby="alert" />
        <RadioButton name="radio-list-demo" label="Option Two" aria-describedby="alert" />
    </List>
    <InlineAlert id="alert-standalone" variant="danger" standalone>You must choose an option to continue.</InlineAlert>
</fieldset>
```
