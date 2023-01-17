Use the typescale property to set the font size of an element's text to a selection of preset sizes. In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for Font Size](https://rivet.iu.edu/utilities/typography/#font-size).

<br/>

### Acceptable Values

Basic General Sizes: 'xxs', 'xs', 'base', 'sm', 'md', 'lg', 'xl', 'xxl', '3-xl', '4-xl'

Basic Exact Sizes: '12', '14', '18', '20', '23', '26', '29', '32', '36', '41', '46', '52'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a basic size selection using a '-', for example "xl-lg-up".

Additionally multiple widths can be set by by passing an array of values in the property, for example ['md-lg-up', 'lg-xxl-up', 'sm']

<br/>

### Examples

```jsx static
<Component typescale='sm'>
  A component with small text
</Component>

<Component typescale='lg'>
  A component with large text
</Component>

<Component typescale='26'>
  A component with 26pt text
</Component>

<Component typescale='md-lg-up'>
  Component text is medium sized on large screens
</Component>

<Component typescale={['md-lg-up', 'lg-xxl-up', 'sm']}>
  On extra large screen this text will large. However on normal large screen text will be medium and small sized on smaller screens.
</Component>
```
