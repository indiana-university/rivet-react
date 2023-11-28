Use the hero component to prominently show a title, summary, image, and call to action at the top of a page.

Hero areas are often used on website home pages to help orient the visitor to the site’s latest news or most important call to action. They are also useful for section index and marketing campaign landing pages.
View the [Rivet documentation for Hero](https://rivet.uits.iu.edu/components/hero/).

### Hero Examples

<!-- prettier-ignore-start -->
```jsx
    const media = (
        <img src="https://rivet.iu.edu/img/placeholder/hero-2.webp" alt="alt text"/>
    );
    const action = (
        <CallToAction href="#" variant="button">Take Action</CallToAction>
    );
    <Hero
        actions={action} 
        eyebrow="Page Content"
        media={media}
        mediaCaption="Optional media caption"
        title="Hero Component Sample"
    >
        Sample hero with normal action and image
    </Hero>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const media = (
        <img src="https://rivet.iu.edu/img/placeholder/hero-2.webp" alt="alt text"/>
    );
    const actions = (
        <ul className="rvt-list-plain">
            <li><CallToAction href="#" variant="button">Take Action 1</CallToAction></li>
            <li><CallToAction href="#" variant="button">Take Action 2</CallToAction></li>
            <li><CallToAction href="#" variant="button">Take Action 3</CallToAction></li>
        </ul>
        
    );
    <Hero
        actions={actions} 
        eyebrow="Page Content"
        media={media}
        mediaCaption="Optional media caption"
        size="sm"
        title="Hero Component Sample"
        varient="dark"
    >
        Sample dark varient of hero with a list of actions and image in a small container
    </Hero>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <Hero
        eyebrow="Page Content"
        title="Hero Component Sample"
    >
        Sample hero without actions or media
    </Hero>
```
<!-- prettier-ignore-end -->