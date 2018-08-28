The Rivet visibility utilities make it easy to show and hide content depending on screen sizes.

View the [Rivet Documentation for Visibility](https://rivet.uits.iu.edu/components/utilities/visibility/).

### Hide Down Responsive Utilities

Use the _*-down_ `hide` property to hide any Rivet React component below the specified screen size.  

```jsx
<Container hide="sm-down">Hidden at <strong>small breakpoint</strong> down</Container>
<Container hide="md-down">Hidden at <strong>medium breakpoint</strong> down</Container>
<Container hide="lg-down">Hidden at <strong>large breakpoint</strong> down</Container>
<Container hide="xl-down">Hidden at <strong>extra large breakpoint</strong> down</Container>
<Container hide="xxl-down">Hidden at <strong>extra extra large breakpoint</strong> down</Container>
```

### Hide Up Responsive Utilities

Use the _*-up_ `hide` property to hide any Rivet React component above the specified screen size.  

```jsx
<Container hide="sm-up">Hidden at <strong>small breakpoint</strong> up</Container>
<Container hide="md-up">Hidden at <strong>medium breakpoint</strong> up</Container>
<Container hide="lg-up">Hidden at <strong>large breakpoint</strong> up</Container>
<Container hide="xl-up">Hidden at <strong>extra large breakpoint</strong> up</Container>
<Container hide="xxl-up">Hidden at <strong>extra extra large breakpoint</strong> up</Container>
```
