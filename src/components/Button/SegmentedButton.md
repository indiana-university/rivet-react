Use the segmented button to display a group of related controls in a single line. Combine them with the dropdown to create complex menu controls.

View the [Rivet documentation for Segmented Buttons](https://rivet.uits.iu.edu/components/forms/buttons-segmented/).

### Default Style
```jsx
<SegmentedButton>
    <Button onClick={() => { console.log('Click 1!') }}>Primary One</Button>
    <Button onClick={() => { console.log('Click 2!') }}>Primary Two</Button>
    <Button onClick={() => { console.log('Click 3!') }}>Primary Three</Button>
</SegmentedButton>
```

### Secondary Modifier
```jsx
<SegmentedButton>
    <Button modifier="secondary" onClick={() => { console.log('Click 1!') }}>Secondary One</Button>
    <Button modifier="secondary" onClick={() => { console.log('Click 2!') }}>Secondary Two</Button>
    <Button modifier="secondary" onClick={() => { console.log('Click 3!') }}>Secondary Three</Button>
</SegmentedButton>
```

### Fitted Style

Use the `fit` option to expand the buttons to the full width of the container.

```jsx
<SegmentedButton fit>
    <Button onClick={() => { console.log('Click 1!') }}>Primary One</Button>
    <Button onClick={() => { console.log('Click 2!') }}>Primary Two</Button>
    <Button onClick={() => { console.log('Click 3!') }}>Primary Three</Button>
</SegmentedButton>
```
