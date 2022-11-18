## flexWrap
Use the flexWrap property to set the wrapping to a selection of presets.  In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for flex, flex-direction, and flex-wrap](https://rivet.iu.edu/utilities/flex/#flex%2C-flex-direction%2C-and-flex-wrap).

As a flex utility requires appropiate setting of display to flex.

### Acceptable Values

General values: 'wrap', 'no-wrap', 'wrap-reverse'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "wrap-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['wrap-lg-up', 'wrap-reverse-xxl-up', 'no-wrap']

### Examples
```jsx
<Container flex='normal' flexWrap='wrap'>A component with content wrapping</Container>
<Container flex='normal' flexWrap='no-wrap'>A component with content not wrapping</Container>
<Container flex='normal' flexWrap='wrap-lg-up'>Component with content wrapping on large screens</Container>
<Container flex='normal' flexWrap={['wrap-lg-up', 'no-wrap']}>
  On large screen component with content wrapping and not wrapping on smaller screens.
</Container>
```
