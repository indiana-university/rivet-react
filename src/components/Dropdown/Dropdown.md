Use the dropdown component to create a list of menu options that can be toggled with a button element.

View the [Rivet documentation for Dropdowns](https://rivet.uits.iu.edu/components/navigation/dropdown/).

### Dropdown Example

Use the `label` property to set the text on the dropdown button.

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

### Right-align Modifier

By default the dropdown menu is vertically aligned with the left edge of the dropdown button. Use the `align` option to vertically align the dropdown menu with the right edge of the dropdown button.   

```jsx
<Dropdown label="Right menu" align="right" modifier="secondary">
    <a href="#">Item one</a>
    <a href="#">Item two</a>
    <a href="#" aria-current="page">Item three</a>
    <a href="#">Item four</a>
</Dropdown>
```

### Toggle On Click Inside Modifier

By default the dropdown menu will not close when an item within the dropdown is clicked. Set the 'toggleDropdownOnClickInside' option to true to specify the dropdown should be closed in this case.

```jsx
<Dropdown label="Toggle On Click" toggleDropdownOnClickInside>
    <Button onClick={() => alert('Clicked Item one')}>Item one</Button>
    <Button onClick={() => alert('Clicked Item one')}>Item two</Button>
</Dropdown>
```