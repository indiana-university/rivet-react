## border
Use the border property to set the content alignment to a selection of presets.  In addition to the normal presets '-' can be prepended to remove 

View the [Rivet Documentation for Border](https://rivet.uits.iu.edu/components/utilities/border/).

### Acceptable Values

General values: 'all', 'top', 'right', 'bottom', 'left', 'none', 'radius', 'radius-cicle'

Special Options: 'radius', 'radius-cicle' (will auto include 'all' option)

Additionally multiple settings can be set by by passing an array of values in the property, for example ['top', 'right']

### Examples

```jsx
<Container border="top">Component with a border on the top edge</Container>
<Container border="right">Component with a border on the right edge</Container>
<Container border="all">Component with a border on all edges</Container>
<Container border="radius">Component with a border on all edges and rounded corners</Container>
<Container border={["top","bottom"]}>Component with a border on the top and bottom edges</Container>
```