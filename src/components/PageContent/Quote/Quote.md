Use the quote component to highlight compelling quotations from people like students, alumni, faculty, and administrators.

[Rivet documentation for Quote](https://rivet.uits.iu.edu/components/Quote/).

### Quote Examples

<!-- prettier-ignore-start -->
```jsx
    <Quote margin={{bottom: "sm"}}>Standard quote with no extras.</Quote>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <Quote citation="Some Author"  margin={{bottom: "sm"}}>Standard quote with a citation.</Quote>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <Quote citation="Some Author" subCitation="Quotes RS"  margin={{bottom: "sm"}}>Standard quote with full citation.</Quote>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const avatar = (
        <img class="rvt-avatar__image" src="https://rivet.iu.edu/img/placeholder/avatar-1.webp" alt="" />
    );
    <Quote avatar={avatar} citation="Some Author" subCitation="Quotes RS"  margin={{bottom: "sm"}}>Quote with all the bells and whistles</Quote>
```
<!-- prettier-ignore-end -->
