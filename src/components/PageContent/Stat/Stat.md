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


