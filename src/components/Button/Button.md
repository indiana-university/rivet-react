### Default Buttons
```jsx
<Button onClick={() => { console.log('Hello, world!') }}>Primary</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="success">Success</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="danger">Danger</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="plain">Plain</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} disabled>Disabled</Button>
```

### Secondary Buttons
```jsx
<Button onClick={() => { console.log('Hello, world!') }} role="secondary">Primary</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="success" role="secondary">Success</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="danger" role="secondary">Danger</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} disabled role="secondary">Disabled</Button>
```

### Small Buttons
```jsx
<Button onClick={() => { console.log('Hello, world!') }} size="small">Primary</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="success" size="small">Success</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="danger" size="small">Danger</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} variant="plain" size="small">Plain</Button>{' '}
<Button onClick={() => { console.log('Hello, world!') }} disabled size="small">Disabled</Button>
```
