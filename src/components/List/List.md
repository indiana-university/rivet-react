Use the list component to group and organize lists of content.

View the [Rivet documentation for Lists](https://rivet.uits.iu.edu/components/list/).

### List Example

<!-- prettier-ignore-start -->
```jsx
<List>
    <li>Item 1</li>
    <li>
        Item 2
        <List>
            <li>Item 2.1</li>
            <li>Item 2.2</li>
        </List>
    </li>
    <li>Item 3</li>
</List>
```
<!-- prettier-ignore-end -->

### Ordered List

<!-- prettier-ignore-start -->
```jsx
<List variant="ordered">
    <li>Item 1</li>
    <li>
        Item 2
        <List variant="ordered">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
        </List>
    </li>
    <li>Item 3</li>
</List>
```
<!-- prettier-ignore-end -->

### Plain List

<!-- prettier-ignore-start -->
```jsx
<List variant="plain">
    <li>Item 1</li>
    <li>
        Item 2
        <List variant="plain">
            <li>Item 2.1</li>
            <li>Item 2.2</li>
        </List>
    </li>
    <li>Item 3</li>
</List>
```
<!-- prettier-ignore-end -->

### Inline List

<!-- prettier-ignore-start -->
```jsx
<List inline>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</List>
```
<!-- prettier-ignore-end -->

### List from Array

<!-- prettier-ignore-start -->
```jsx
<List>{["Item 1", "Item 2", "Item 3"]}</List>
```
<!-- prettier-ignore-end -->
