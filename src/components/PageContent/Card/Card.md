Use the card component to group related content, including an image, headline, summary text, and link.

Cards are often used to present lists or grids of content such as featured news articles or resources related to a specific topic.

View the [Rivet documentation for Card](https://rivet.uits.iu.edu/components/card/).

### Card Example

<!-- prettier-ignore-start -->
```jsx
    <Card
        className="rvt-container-sm"
        title="Basic Card"
        titleUrl="#"
    >
        <p>This is a basic card with just a title (with link) and some text</p>
    </Card>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <Card
        className="rvt-container-sm"
        eyebrow="Card Examples"
        raised
        title="Basic Card"
        titleUrl="#"
    >
        <p>This is a basic card but text added above and a box shadow</p>
    </Card>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const image = <img class="rvt-width-sm" src="https://rivet.iu.edu/img/placeholder/list-card-3.webp" alt="Smiling students sitting outside on a bench" />;
    const meta = <time>November 5, 1955</time>;
    <Card
        className="rvt-container-sm"
        image={image}
        title="Card with image and metadata"
        meta={meta}
    >
        <p>In this card there is no link for the title.</p>
        <p>A image has been placed above and metadata has been added to the bottom</p>
    </Card>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const image = <img class="rvt-width-sm" src="https://rivet.iu.edu/img/placeholder/list-card-3.webp" alt="Smiling students sitting outside on a bench" />;
    const meta = <time>November 5, 1955</time>;
    <Card
        className="rvt-container-sm"
        image={image}
        horizontal
        title="Card with image and metadata"
        meta={meta}
    >
        <p>This is the same as the example above </p>
        <p>However the format is horizontal instead of vertical.</p>
    </Card>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const image = <img class="rvt-width-sm" src="https://rivet.iu.edu/img/placeholder/list-card-3.webp" alt="Smiling students sitting outside on a bench" />;
    const meta = <time>November 5, 1955</time>;
    <Card
        clickable
        image={image}
        title="Card with image and metadata"
        titleUrl="#"
        meta={meta}
    >
        <p>The link has been added back in and made clickable on the full card</p>
    </Card>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    const image = <img class="rvt-width-sm" src="https://rivet.iu.edu/img/placeholder/list-card-3.webp" alt="Smiling students sitting outside on a bench" />;
    const meta = <time>November 5, 1955</time>;
    <Card
        image={image}
        title="Card with onClick handler"
        onClick={e => {e.preventDefault(); alert('clicked');}}
        meta={meta}
    >
        <p>Using an onClick handler. This can be used with things such as react-router's navigate function.</p>
    </Card>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <ul class="rvt-list-plain rvt-flow">
        <Card
            Component="li"
            horizontal
            image={<img class="rvt-width-sm" src="https://rivet.iu.edu/img/placeholder/list-card-1.webp" alt="example 1" />}
            title="Card 1"
            meta={<time>November 1, 1955</time>}
        >
            <p>The first card in a list</p>
        </Card>
        <Card
            Component="li"
            horizontal
            image={<img class="rvt-width-sm" src="https://rivet.iu.edu/img/placeholder/list-card-2.webp" alt="example 2" />}
            title="Card 2"
            meta={<time>December 1, 1975</time>}
        >
            <p>The second card in the list</p>
        </Card>
        <Card
            Component="li"
            horizontal
            image={<img class="rvt-width-sm" src="https://rivet.iu.edu/img/placeholder/list-card-3.webp" alt="example 3" />}
            title="Card 3"
            meta={<time>Apirl 1, 2020</time>}
        >
            <p>Last Card</p>
        </Card>
    </ul>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
    <div class="rvt-row">
        <div class="rvt-cols-4-md">
            <Card
                image={<img class="rvt-width-md" src="https://rivet.iu.edu/img/placeholder/list-card-1.webp" alt="example 1" />}
                title="Card 1"
                meta={<time>November 1, 1955</time>}
            >
                <p>The first card in a grid</p>
            </Card>
        </div>
        <div class="rvt-cols-4-md">
            <Card
                image={<img class="rvt-width-md" src="https://rivet.iu.edu/img/placeholder/list-card-2.webp" alt="example 2" />}
                title="Card 2"
                meta={<time>December 1, 1975</time>}
            >
                <p>The second card in the grid</p>
            </Card>
        </div>
        <div class="rvt-cols-4-md">
            <Card
                image={<img class="rvt-width-md" src="https://rivet.iu.edu/img/placeholder/list-card-3.webp" alt="example 3" />}
                title="Card 3"
                meta={<time>Apirl 1, 2020</time>}
            >
                <p>Last Card</p>
            </Card>
        </div>
    </div>
```
<!-- prettier-ignore-end -->
