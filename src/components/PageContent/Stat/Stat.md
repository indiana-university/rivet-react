Use the stat component to highlight one or more compelling statistics.

Stats are often used on website home pages or section index pages, especially those that relate to career placement and campus culture.
View the [Rivet documentation for Stat](https://rivet.uits.iu.edu/components/stat/).

### Stat Examples

<!-- prettier-ignore-start -->
```jsx
const image = (
    <div class="rvt-avatar">
        <img class="rvt-avatar__image" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" alt="" />
    </div>
);
<div className="rvt-container-sm">
    <Stat href="#" image={image}  margin={{bottom: "md"}} value="100">Sample Stat with image</Stat>
    <hr/>
    <Stat href="#" margin={{top: "md"}} value="50">Sample Stat without image</Stat>
</div>
```
<!-- prettier-ignore-end -->

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
