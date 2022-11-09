## Border
Use Rivet's border utilities to add a border to any or all sides of an element.

View the [Rivet Documentation for Border](https://rivet.uits.iu.edu/components/utilities/border/).

### Acceptable Values
Edges
- `all` :
- `top` :
- `right` :
- `bottom` :
- `left` :
- `none` :

### Examples

Use the `border` property to adjust the border of any Rivet React component.

```jsx
<Container border="top" padding="xs" margin={{ bottom: 'sm' }}>Border Top</Container>
<Container border="right" padding="xs" margin={{ bottom: 'sm' }}>Border Right</Container>
<Container border="bottom" padding="xs" margin={{ bottom: 'sm' }}>Border Bottom</Container>
<Container border="left" padding="xs" margin={{ bottom: 'sm' }}>Border Left</Container>
<Container border={["top","bottom"]} padding="xs" margin={{ bottom: 'sm' }}>Border Top and Border Bottom</Container>
<Container border="all" padding="xs" margin={{ bottom: 'sm' }}>Border All</Container>
<Container border="radius" padding="xs" margin={{ bottom: 'sm' }}>Border Radius</Container>
```