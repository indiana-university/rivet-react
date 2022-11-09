## padding
Use the padding property to set the padding of an element to a selection of preset sizes.  In addition to the normal presets a tag can be appended to the size to create a responsive styling based on the screen size of the device or browser.  Sides can also be independently set using this property.

View the [Rivet Documentation for Spacing](https://rivet.iu.edu/utilities/spacing/).

### Acceptable Values

Property accepts 3 forms of entry:

1. String containing a size option which is then applied to all sides
2. An object with edges as keys mapping to size value 
3. An object with size as keys mapping to single or list of edge options


Edge Options: 'top', 'right', 'bottom', 'left', 'all', 'tb', 'lr'

Size Options: 'xxs', 'xs', 'base', 'sm', 'md', 'lg', 'xl', 'xxl', '3-xl', '4-xl', 'none'

Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Responsive options are added to a basic size selection using a '-', for example "xl-lg-up".

### Examples
```jsx
<Container padding='sm'>Component with small padding on all sides</Container>
<Container padding='lg'>Component with large padding on all sides</Container>
<Container padding={{'top': 'sm', 'bottom': 'lg'}}>Component with small amount of padding on top, large amount at bottom and none on the sides</Container>
<Container padding={{'sm': 'top', 'lg': ['right', 'left']}}>Component with small amount of padding on top, none at bottom and large amount on the sides</Container>
<Container padding='md-lg-up'>On large screen sizes component will have medium padding on all sides </Container>
```