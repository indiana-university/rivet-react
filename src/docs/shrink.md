## shrink
Use the shrink property to set the flex shrinking to a selection of presets.  In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for flex-shrink and flex-grow](https://rivet.iu.edu/utilities/flex/#flex-shrink-and-flex-grow).

As a flex utility requires appropiate setting of display to flex.

### Acceptable Values

General values: '0', '1'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "1-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['1-lg-up', '0-xxl-up', '1']

### Examples
```jsx
<Container shrink='0'>A component with no flex shrinking</Container>
<Container shrink='1'>A component with flex shrinking</Container>
<Container shrink='0-lg-up'>Component with no flex shrinking on large screens</Container>
<Container shrink={['1-lg-up', '0']}>
  On normal large screen component will be have flex shrinking and no shrinking on smaller screens.
</Container>
```
