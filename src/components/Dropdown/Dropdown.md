Use the dropdown component to create a list of menu options that can be toggled with a button element.

View the [Rivet documentation for Dropdowns](https://rivet.iu.edu/components/dropdown/).

### Dropdown Example

Use the `label` property to set the text on the dropdown button.

<!-- prettier-ignore-start -->
```jsx
<Dropdown label="Navigation menu">
    <a href="#">Item one</a>
    <a href="#">Item two</a>
    <a href="#" aria-current="page">Item three</a>
    <a href="#">Item four</a>
    <DropdownGroup>
        <a href="#">Related item three</a>
        <a href="#">Related item four</a>
    </DropdownGroup>
</Dropdown>
```
<!-- prettier-ignore-end -->

### Label as React Node

The `label` prop can also be a React Node.

<!-- prettier-ignore-start -->
```jsx
<Dropdown label={<div>Navigation menu</div>}>
    <a href="#">Item one</a>
    <a href="#">Item two</a>
    <a href="#" aria-current="page">Item three</a>
    <a href="#">Item four</a>
    <DropdownGroup>
        <a href="#">Related item three</a>
        <a href="#">Related item four</a>
    </DropdownGroup>
</Dropdown>
```
<!-- prettier-ignore-end -->

### Right-align Modifier

By default the dropdown menu is vertically aligned with the left edge of the dropdown button. Use the `alignRight` option to vertically align the dropdown menu with the right edge of the dropdown button.

<!-- prettier-ignore-start -->
```jsx
<Dropdown label="Right menu" modifier="secondary">
    <a href="#">Item one</a>
    <a href="#">Item two</a>
    <a href="#" aria-current="page">Item three</a>
    <a href="#">Item four</a>
</Dropdown>
```
<!-- prettier-ignore-end -->

### Toggle On Click Inside Modifier

By default the dropdown menu will not close when an item within the dropdown is clicked. Set the `toggleDropdownOnClickInside` option to true to specify the dropdown should be closed in this case.

<!-- prettier-ignore-start -->
```jsx
<Dropdown label="Toggle On Click" toggleDropdownOnClickInside>
    <Button onClick={() => alert('Clicked Item one')}>Item one</Button>
    <Button onClick={() => alert('Clicked Item two')}>Item two</Button>
</Dropdown>
```
<!-- prettier-ignore-end -->

### Secondary styles

By default the dropdown menu button is displayed with the primary button style. Set `modifier="secondary"` to render the button with secondary styles.

<!-- prettier-ignore-start -->
```jsx
<Dropdown label="Secondary" modifier="secondary">
    <a href="#">Item one</a>
    <a href="#">Item two</a>
    <a href="#" aria-current="page">Item three</a>
    <a href="#">Item four</a>
</Dropdown>
```
<!-- prettier-ignore-end -->

### Button size

By default the dropdown menu button is a full size button. Set `size="small"` to render the button a smaller button.

<!-- prettier-ignore-start -->
```jsx
<Dropdown label="Small" size="small">
    <a href="#">Item one</a>
    <a href="#">Item two</a>
    <a href="#" aria-current="page">Item three</a>
    <a href="#">Item four</a>
</Dropdown>
```
<!-- prettier-ignore-end -->
