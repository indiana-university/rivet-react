## width

Use the width property to set the width of an element to a selection of preset sizes.  In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.

View the [Rivet Documentation for Width](https://rivet.uits.iu.edu/components/utilities/width/).

<br/>

### Acceptable Values

Basic Sizes: 'xxs', 'xs', 'base', 'sm', 'md', 'lg', 'xl', 'xxl', '3-xl', '4-xl'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a basic size selection using a '-', for example "xl-lg-up".

Additionally multiple widths can be set by by passing an array of values in the property, for example ['md-lg-up', 'lg-xxl-up', 'sm']

<br/>

### Examples

```jsx
<Container width='sm'>
  A component with a set small width
</Container>

<Container width='lg'>
  A component with a set large width
</Container>

<Container width='4-xl'>
  A component with a set largest width
</Container>

<Container width='md-lg-up'>
  Component has a set medium width on large screens
</Container>

<Container width={['md-lg-up', 'lg-xxl-up', 'sm']}>
  On extra large screen this Component will have a large width. However on normal large screen its width will be limited to medium and small on smaller screens.
</Container>
```