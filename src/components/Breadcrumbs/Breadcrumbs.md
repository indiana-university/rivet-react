Use the breadcrumbs component to show the user’s current location in a hierarchy of pages. Pages further up the hierarchy from the current page are linked.

View the [Rivet documentation for Breadcrumbs](https://rivet.iu.edu/components/breadcrumbs/).

### Breadcrumbs Example

<!-- prettier-ignore-start -->
```jsx
<Breadcrumbs>
    <li><a href="#">Home</a></li>
    <li><a href="#">Tier two</a></li>
    <li aria-label="Current page">Tier three</li>
</Breadcrumbs>
```
<!-- prettier-ignore-end -->

### Breadcrumbs Auto-wrapping

<!-- prettier-ignore-start -->
```jsx
<Breadcrumbs>
    <a href="#">Home</a>
    <a href="#">Tier two</a>
    <span>Tier three</span>
</Breadcrumbs>
```
<!-- prettier-ignore-end -->
