Lists are used to group and organize collections of content.

View the [Rivet documentation for List](https://rivet.uits.iu.edu/components/page-content/lists/).

### Unordered List

Lists are unordered by default.

```jsx
<List>
    <li>List Item One</li>
    <li>List Item Two</li>
    <li>List Item Three</li>
    <li>List Item Four</li>
</List>
```

### Ordered List

Use the *ordered* `variant` to create an ordered list.

```jsx
<List variant="ordered">
    <li>List Item One</li>
    <li>List Item Two</li>
    <li>List Item Three</li>
    <li>List Item Four</li>
</List>
```
### Plain List

Use the *plain* `variant` to create a plain list with no decoration.

```jsx
<List variant="plain">
    <li>List Item One</li>
    <li>List Item Two</li>
    <li>List Item Three</li>
    <li>List Item Four</li>
</List>
```

### Inline List

Use the *inline* `variant` to to arrange list items horizontally (inline).

```jsx
<List orientation="inline">
    <li>List Item One</li>
    <li>List Item Two</li>
    <li>List Item Three</li>
    <li>List Item Four</li>
</List>
```

### Definition List

Definition lists do not require a component and are included here for completeness.

```jsx
<dl>
    <dt>Definition list item one</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
    <dd>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>Definition list item two</dt>
    <dd>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>Definition list item three</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</dl>
```
