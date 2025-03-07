Use the segmented button to display a group of related controls in a single line. Combine them with the dropdown to create complex menu controls.

View the [Rivet documentation for Segmented Buttons](https://rivet.uits.iu.edu/components/forms/buttons-segmented/).

### Default Style

<!-- prettier-ignore-start -->
```jsx
<SegmentedButton>
    <Button onClick={() => { console.log('Click 1!') }}>Primary One</Button>
    <Button onClick={() => { console.log('Click 2!') }}>Primary Two</Button>
    <Button onClick={() => { console.log('Click 3!') }}>Primary Three</Button>
</SegmentedButton>
```
<!-- prettier-ignore-end -->

### Secondary Modifier

<!-- prettier-ignore-start -->
```jsx
<SegmentedButton>
    <Button modifier="secondary" onClick={() => { console.log('Click 1!') }}>Secondary One</Button>
    <Button modifier="secondary" onClick={() => { console.log('Click 2!') }}>Secondary Two</Button>
    <Button modifier="secondary" onClick={() => { console.log('Click 3!') }}>Secondary Three</Button>
</SegmentedButton>
```
<!-- prettier-ignore-end -->

### Fitted Style

Use the `fit` option to expand the buttons to the full width of the container.

<!-- prettier-ignore-start -->
```jsx
<SegmentedButton fit>
    <Button onClick={() => { console.log('Click 1!') }}>Primary One</Button>
    <Button onClick={() => { console.log('Click 2!') }}>Primary Two</Button>
    <Button onClick={() => { console.log('Click 3!') }}>Primary Three</Button>
</SegmentedButton>
```
<!-- prettier-ignore-end -->

### Segmented Button Dropdown

<!-- prettier-ignore-start -->
```jsx
<SegmentedButton>
    <Button onClick={() => { console.log('Click!') }}>Primary Action</Button>
    <Dropdown>
        <button role="menuitemradio">Notify all</button>
        <button role="menuitemradio" aria-checked="true">Notify admins</button>
        <button role="menuitemradio">Notify contributors</button>
        <DropdownGroup label="Personal settings">
            <button role="menuitem">Profile Settings</button>
            <button role="menuitem">Logout</button>
        </DropdownGroup>
    </Dropdown>
</SegmentedButton>
```
<!-- prettier-ignore-end -->
