## alignContent

Use the alignContent property to set the content alignment to a selection of presets. In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for align-content](https://rivet.iu.edu/utilities/flex/#align-content).

As a flex utility requires appropiate setting of display to flex.

<br/>

### Acceptable Values

General values: 'start', 'end', 'center', 'stretch', 'baseline'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "center-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['start-lg-up', 'center-xxl-up', 'end']

<br/>

### Examples

```jsx
<Component alignContent='start'>
  A component with content aligned to top of line
</Component>

<Component alignContent='end'>
  A component with content aligned to bottom of line
</Component>

<Component alignContent='center-lg-up'>
  Component with content centered on large screens
</Component>

<Component alignContent={['end-lg-up', 'center']}>
  On normal large screen component with content aligned to bottom of line and centered on smaller screens.
</Component>
```
