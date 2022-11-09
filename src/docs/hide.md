## hide
Use the hide property to hide elements on the page based on preset selections.  Options allow elements to be hidden statically or in response to screensize being larger or smaller.

View the [Rivet Documentation for Visibility](https://rivet.iu.edu/utilities/visibility/).

### Acceptable Values

Static Options: 'sr', 'all'

Larger Responsive Options: 'sm-up', 'md-up', 'lg-up', 'xl-up', 'xxl-up'

Smaller Responsive Options: 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'

### Examples
```jsx
<Container hide='sr'>This component is only seen by screenreaders</Container>
<Container hide='all'>This component is not seen by anyone</Container>
<Container hide='lg-up'>This component is not seen on large screens and up</Container>
<Container hide='md-down'>This component is not seen on medium screens and down</Container>
```