## justifyContent
Use the justifyContent property to set the flex justification to a selection of presets.  In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for justify-content](https://rivet.iu.edu/utilities/flex/#flex-shrink-and-flex-grow).

As a flex utility requires appropiate setting of display to flex.

### Acceptable Values

General values: 'start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "center-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['start-lg-up', 'center-xxl-up', 'end']

### Examples
```jsx
<Container flex='normal' justifyContent='start'>A component with content justified to start of line</Container>
<Container flex='normal' justifyContent='end'>A component with content justified to end of line</Container>
<Container flex='normal' justifyContent='center-lg-up'>Component with content centered  on large screens</Container>
<Container flex='normal' justifyContent={['end-lg-up', 'center']}>
  On normal large screen component with content justified to end of line and centered on smaller screens.
</Container>
```
