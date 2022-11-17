Use the `label` property to provide a helpful heading for a group of related menu items.

```jsx
<Dropdown label="Application menu">
  <a href="#">Notify All</a>
  <a href="#" aria-current="page">
    Notify Admins
  </a>
  <a href="#">Notify contributors</a>
  <DropdownGroup label="Personal Settings">
    <a href="#">Profile Settings</a>
    <a href="#">Logout</a>
  </DropdownGroup>
</Dropdown>
```
