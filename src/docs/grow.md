## grow

Use the grow property to set the flex growth to a selection of presets. In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for flex-shrink and flex-grow](https://rivet.iu.edu/utilities/flex/#flex-shrink-and-flex-grow).

As a flex utility requires appropiate setting of display to flex.

<br/>

### Acceptable Values

General values: '0', '1'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a general value selection using a '-', for example "1-lg-up".

Additionally multiple settings can be set by by passing an array of values in the property, for example ['1-lg-up', '0-xxl-up', '1']

<br/>

### Examples

```jsx
<Component grow='0'>
  A component with no flex growth
</Component>

<Component grow='1'>
  A component with flex growth
</Component>

<Component grow='1-lg-up'>
  Component with flex growth on large screens
</Component>

<Component grow={['1-lg-up', '0']}>
  On normal large screen component will be have flex growth and no growth on smaller screens.
</Component>
```
