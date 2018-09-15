### Basic example

```jsx
<Pagination>
  <a href="#0" aria-label="Previous set of pages">Previous</a>
  <a href="#0" aria-label="Page 4">4</a>
  <a href="#0" aria-label="Page 5, current page" aria-current="page">5</a>
  <a href="#0" aria-label="Page 6">6</a>
  <a href="#0" aria-label="Next set of pages">Next</a>
</Pagination>
```

### Positioning

The pagination component is left-aligned by default, but you can easily center or right-align it using the align property.

```jsx
<Pagination align="right">
  <a href="#0" aria-label="Previous set of pages" aria-disabled="true">Previous</a>
  <a href="#0" aria-label="Page 1">1</a>
  <a href="#0" aria-label="Page 2">2</a>
  <a href="#0" aria-label="Page 3">3</a>
  <a href="#0" aria-label="Page 4, current page" aria-current="page">4</a>
  <a href="#0" aria-label="Next set of pages">Next</a>
</Pagination>
```

### Small pagination

Use the size property if you need to display the pagination component at a smaller size.

```jsx
<Pagination size="small">
  <a href="#0" aria-label="Previous set of pages">Previous</a>
  <a href="#0" aria-label="Page 4">4</a>
  <a href="#0" aria-label="Page 5, current page" aria-current="page">5</a>
  <a href="#0" aria-label="Page 6">6</a>
  <a href="#0" aria-label="Next set of pages">Next</a>
</Pagination>
```
