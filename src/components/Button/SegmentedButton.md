### Default Style
```jsx
<SegmentedButton>
    <Button onClick={() => { console.log('Click!') }}>Primary One</Button>
    <Button onClick={() => { console.log('Click!') }}>Primary Two</Button>
    <Button onClick={() => { console.log('Click!') }}>Primary Three</Button>
</SegmentedButton>
```

### Fitted Style
```jsx
<SegmentedButton fit>
    <Button onClick={() => { console.log('Click!') }}>Primary One</Button>
    <Button onClick={() => { console.log('Click!') }}>Primary Two</Button>
    <Button onClick={() => { console.log('Click!') }}>Primary Three</Button>
</SegmentedButton>
```

### Segmented Button Dropdown
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
