## border

Use the border property to set the content alignment to a selection of presets. In addition to the normal presets '-' can be prepended to remove the selected border.

View the [Rivet Documentation for Border](https://rivet.uits.iu.edu/components/utilities/border/).

<br/>

### Acceptable Values

General values: 'all', 'top', 'right', 'bottom', 'left', 'none', 'radius', 'radius-cicle'

Special Options: 'radius', 'radius-cicle' (will auto include 'all' option)

Additionally multiple settings can be set by by passing an array of values in the property, for example ['top', 'right']

<br/>

### Examples

```jsx
<Component border="top">
    Component with a border on the top edge
</Component>

<Component border="right">
    Component with a border on the right edge
</Component>

<Component border="all">
    Component with a border on all edges
</Component>

<Component border="radius">
    Component with a border on all edges and rounded corners
</Component>

<Component border={["top","bottom"]}>
    Component with a border on the top and bottom edges
</Component>

<Component border="-right">
    Component with a border missing on the right edge
</Component>
```
