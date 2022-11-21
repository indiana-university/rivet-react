## color
Use the color property to set the color of the text and other content of the element to a selection of preset colors. 
 
View the [Rivet Documentation for Color](https://rivet.iu.edu/utilities/color/).

### Acceptable Values

Options can either be a basic color by itself or weighted shade of the color.

Basic Colors: 'blue', 'crimson', 'gold', 'green', 'orange', 'purple'

Weight Options: '000', '100', '200', '300', '400', '500', '600', '700'

Weighted options are added to a basic color selection using a '-', for example "blue-400".

### Examples
```jsx
<Container color='blue'>Text will be a basic blue</Container>
<Container color='blue-000'>Text will be a really light blue</Container>
<Container color='blue-700'>Text will be a really dark blue</Container>
<Container color='crimson'>Text will be a red</Container>
```