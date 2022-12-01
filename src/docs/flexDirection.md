## flexDirection

Use the flexDirection property to set the direction to a selection of presets. In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for flex, flex-direction, and flex-wrap](https://rivet.iu.edu/utilities/flex/#flex%2C-flex-direction%2C-and-flex-wrap).

As a flex utility requires appropiate setting of display to flex.

<br/>

### Acceptable Values

General values: 'row', 'row-reverse', 'column', 'column-reverse'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "row-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['row-lg-up', 'row-reverse-xxl-up', 'column']

<br/>

### Examples

```jsx
<Component flexDirection='row'>
  A component with content render in a order in a row
</Component>

<Component flexDirection='row-reverse'>
  A component with content render in a reverse in a row
</Component>

<Component flexDirection='column-lg-up'>
  Component with content render in a column on large screens
</Component>

<Component flexDirection={['row-lg-up', 'column']}>
  On large screen component with content rendered in a row and in a column on smaller screens.
</Component>
```
