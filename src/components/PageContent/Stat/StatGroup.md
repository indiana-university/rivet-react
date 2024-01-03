Use the `StatGroup` to group multiple `Stat` components together.

### Stat Group Examples

<!-- prettier-ignore-start -->
```jsx
<StatGroup>
    <Stat href="#" value="100">Sample Stat 1</Stat>
    <Stat href="#" value="50">Sample Stat 2</Stat>
    <Stat href="#" value="25">Sample Stat 3</Stat>
    <Stat href="#" value="10">Sample Stat 4</Stat>
</StatGroup>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
const image = (
    <div class="rvt-avatar">
        <img class="rvt-avatar__image" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" alt="" />
    </div>
);

<StatGroup>
    <Stat href="#" image={image} value="100">Sample Stat 1</Stat>
    <Stat href="#" image={image} value="50">Sample Stat 2</Stat>
    <Stat href="#" image={image} value="25">Sample Stat 3</Stat>
    <Stat href="#" image={image} value="10">Sample Stat 4</Stat>
</StatGroup>
```
<!-- prettier-ignore-end -->