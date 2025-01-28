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

### DescriptionList Example

<!-- prettier-ignore-start -->
```jsx
<List variant="description">
    <dt>Description list item one</dt>
    <dd>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>Description list item two</dt>
    <dd>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
    <dt>Description list item three</dt>
    <dd>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</dd>
</List>
```
<!-- prettier-ignore-end -->

### Plain List

<!-- prettier-ignore-start -->
```jsx
<List plain>
    <li>Item 1</li>
    <li>
        Item 2
        <List plain>
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
