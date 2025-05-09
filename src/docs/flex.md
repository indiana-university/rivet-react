Use the flex property to set the flex display to a selection of presets. In addition to the normal presets a tag can be appended to the flex to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for flex, flex-direction, and flex-wrap](https://rivet.iu.edu/utilities/flex/#flex%2C-flex-direction%2C-and-flex-wrap).

<br/>

### Acceptable Values

General values: 'normal', 'inline'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "normal-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['inline-lg-up', 'normal']

<br/>

### Examples

```jsx static
<Component flex='normal'>
  A component with flex display
</Component>

<Component flex='inline'>
  A component with inline flex display
</Component>

<Component flex='inline-lg-up'>
  Component with inline flex display on large screens
</Component>

<Component flex={['inline-lg-up', 'normal']}>
  On large screen component has inline flex display and flex on smaller screens.
</Component>
```
