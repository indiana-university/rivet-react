## stopBreak
Use the stopBreak property to prevent text wrapping in an element.

View the [Rivet Documentation for No break](https://rivet.iu.edu/utilities/typography/#no-break).

### Acceptable Values

Property accepts boolean values 'true' or 'false'

### Examples
```jsx
<Container>Component's text will break and wrap normally</Container>
<Container uppercase='true'>Component's text will not break and wrap</Container>
<Container uppercase='false'>Component's text will break and wrap normally</Container>
<Container uppercase>Component's text will not break and wrap</Container>
```
