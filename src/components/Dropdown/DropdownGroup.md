### Example
```jsx
<Dropdown title="Navigation menu">
    <a href="#">Item one</a>
    <a href="#">Item two</a>
    <a href="#" aria-current="page">Item three</a>
    <a href="#">Item four</a>
    <DropdownGroup label="Related">
        <a href="#">Related item three</a>
        <a href="#">Related item four</a>
    </DropdownGroup>
</Dropdown>
```

### Dropdown group with header
```jsx
<Dropdown title="Application menu">
    <a href="#">Notify All</a>
    <a href="#" aria-current="page">Notify Admins</a>
    <a href="#">Notify contributors</a>
    <DropdownGroup label="Personal Settings" header>
        <a href="#">Profile Settings</a>
        <a href="#">Logout</a>
    </DropdownGroup>
</Dropdown>
```
