### Default Buttons
```jsx
<Button margin="xs" onClick={() => { console.log('Click!') }}>Primary</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="success">Success</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="danger">Danger</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="plain">Plain</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} disabled>Disabled</Button>
```

### Secondary Buttons
```jsx
<Button margin="xs" onClick={() => { console.log('Click!') }} modifier="secondary">Primary</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="success" modifier="secondary">Success</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="danger" modifier="secondary">Danger</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} disabled modifier="secondary">Disabled</Button>
```

### Small Buttons
```jsx
<Button margin="xs" onClick={() => { console.log('Click!') }} size="small">Primary</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="success" size="small">Success</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="danger" size="small">Danger</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} variant="plain" size="small">Plain</Button>
<Button margin="xs" onClick={() => { console.log('Click!') }} disabled size="small">Disabled</Button>
```
