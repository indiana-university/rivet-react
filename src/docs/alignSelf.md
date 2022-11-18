## alignSelf
Use the alignSelf property to set the component's alignment to a selection of presets.  In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for align-self](https://rivet.iu.edu/utilities/flex/#align-self).

As a flex utility requires appropiate setting of display to flex.

### Acceptable Values

General values: 'self-start', 'self-end', 'center-end', 'stretch-end', 'baseline-end'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "center-end-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['self-start-lg-up', 'center-end-xxl-up', 'self-end']

### Examples
```jsx
<Container alignSelf='self-start'>A component aligned to top of line</Container>
<Container alignSelf='self-end'>A component aligned to bottom of line</Container>
<Container alignSelf='self-end-lg-up'>Component aligned to bottom of line on large screens</Container>
<Container alignSelf={['self-end-lg-up', 'center-end']}>
  On normal large screen component aligned to bottom of line and centered on smaller screens.
</Container>
```
