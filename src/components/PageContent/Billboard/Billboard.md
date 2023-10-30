Use the billboard component to highlight news articles, student or alumni stories, or other important content on your website.

A billboard contains an image, title, summary text, and optional call to action link.

Billboards are often used on website home pages, section index pages, and landing pages for marketing campaigns.

View the [Rivet documentation for Billboard](https://rivet.uits.iu.edu/components/billboard/).

### Billboard Examples

<!-- prettier-ignore-start -->
```jsx
    const image = <img src="https://rivet.iu.edu/img/placeholder/billboard-2.webp" alt="Student in vintage-style Indiana University t-shirt" />;
    <div className="rvt-container-sm">
        <Billboard
            image={image}
            title="Standard Billboard"
        >
            <p>
                Short paragraph of content for the billboard
            </p>
            <a className="rvt-cta" href="#">A call to action</a>
        </Billboard>
    </div>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const image = <img src="https://rivet.iu.edu/img/placeholder/billboard-2.webp" alt="Student in vintage-style Indiana University t-shirt" />;
    <div className="rvt-container-sm">
        <Billboard
            image={image}
            title="Reversed Billboard"
            variant="reverse"
        >
            <p>
                Short paragraph of content for the billboard
            </p>
        </Billboard>
    </div>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <div className="rvt-container-sm">
        <Billboard
            title="Centered Billboard"
            variant="center"
        >
            <p>
                Note when using the center variant, the  billboard should not have an image
            </p>
        </Billboard>
    </div>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <div className="rvt-container-sm">
        <Billboard title="No Image Billboard">
            <p>
                Short paragraph of content for the billboard
            </p>
        </Billboard>
    </div>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const image = <img src="https://rivet.iu.edu/img/placeholder/billboard-2.webp" alt="Student in vintage-style Indiana University t-shirt" />;
    <div className="rvt-container-sm">
        <Billboard
            image={image}
            title="No Content Billboard"
        />
    </div>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <div className="rvt-container-sm">
        <Billboard title="Title Only Billboard" />
    </div>
```
<!-- prettier-ignore-end -->
