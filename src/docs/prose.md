Use the prose property to apply text styling to all headers and paragraphs in the elements

View the [Rivet Documentation for Automatic styling of running text](https://rivet.iu.edu/utilities/typography/#automatic-styling-of-running-text).

<br/>

### Acceptable Values

Property accepts boolean values 'true' or 'false'

<br/>

### Examples

```jsx static
<Component typescale='sm'>
  <h1>Header will appear normal</h1>
  <p>Text will appear normal</p>
</Component>

<Component prose='true' typescale='sm'>
  <h1>Header text will be small </h1>
  <p>Text will be small</p>
</Component>

<Component prose='false' typescale='sm'>
  <h1>Header will appear normal</h1>
  <p>Text will appear normal</p>
</Component>

<Component prose typescale='sm'>
  <h1>Header text will be small </h1>
  <p>Text will be small</p>
</Component>
```
