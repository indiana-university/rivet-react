A navigation component that indicates the user's current location in the nav hierarchy.

View the [Rivet documentation for Breadcrumbs](https://rivet.uits.iu.edu/components/navigation/breadcrumb/).

### Default breadcrumb

```jsx
<Breadcrumbs>
    <a href="#">Home</a>
    <a href="#">Files</a>
    my-file.txt
</Breadcrumbs>
```

### Callout example

There is also a call-out modifier class that adds a small amount of padding and a light gray background. This is useful for when you need to draw more attention to the breadcrumb.

```jsx
<Breadcrumbs variant="call-out">
    <a href="#">Home</a>
    <a href="#">Files</a>
    my-file.txt
</Breadcrumbs>
```
