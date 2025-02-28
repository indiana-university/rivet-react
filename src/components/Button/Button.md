Buttons are used to signal actions, submit forms, or trigger new content within the current context.

View the [Rivet documentation for Buttons](https://rivet.uits.iu.edu/components/forms/buttons/).

### Button Examples

<!-- prettier-ignore-start -->
```jsx
<Button onClick={() => { console.log('Primary') }}>Primary</Button>
<Button onClick={() => { console.log('Success') }} variant="success">Success</Button>
<Button onClick={() => { console.log('Danger') }} variant="danger">Danger</Button>
<Button onClick={() => { console.log('Plain') }} variant="plain">Plain</Button>
<Button onClick={() => { console.log('Disabled') }} disabled>Disabled</Button>
<Button loading>Loading</Button>
```
<!-- prettier-ignore-end -->

### Secondary Variations

<!-- prettier-ignore-start -->
```jsx
<Button onClick={() => { console.log('Sec Primary') }} modifier="secondary">Primary</Button>
<Button onClick={() => { console.log('Sec Success') }} variant="success" modifier="secondary">Success</Button>
<Button onClick={() => { console.log('Sec Danger') }} variant="danger" modifier="secondary">Danger</Button>
<Button onClick={() => { console.log('Sec Disabled') }} disabled modifier="secondary">Disabled</Button>
```
<!-- prettier-ignore-end -->

### Full Buttons

<!-- prettier-ignore-start -->
```jsx
<Button onClick={() => { console.log('Full Primary') }} size="full">Primary</Button>
<Button onClick={() => { console.log('Full Success') }} variant="success" size="full">Success</Button>
<Button onClick={() => { console.log('Full Danger') }} variant="danger" size="full">Danger</Button>
<Button onClick={() => { console.log('Full Plain') }} variant="plain" size="full">Plain</Button>
<Button onClick={() => { console.log('Full Disabled') }} disabled size="full">Disabled</Button>
```
<!-- prettier-ignore-end -->

### Small Buttons

<!-- prettier-ignore-start -->
```jsx
<Button onClick={() => { console.log('Small Primary') }} size="small">Primary</Button>
<Button onClick={() => { console.log('Small Success') }} variant="success" size="small">Success</Button>
<Button onClick={() => { console.log('Small Danger') }} variant="danger" size="small">Danger</Button>
<Button onClick={() => { console.log('Small Plain') }} variant="plain" size="small">Plain</Button>
<Button onClick={() => { console.log('Small Disabled') }} disabled size="small">Disabled</Button>
```
<!-- prettier-ignore-end -->
