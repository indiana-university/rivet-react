A 12 column responsive grid with support for automatic columns that makes it easy to lay out your application.

View the [Rivet documentation for Grid](https://rivet.uits.iu.edu/components/layout/grid/).

In its simplest form, a `Grid` is composed of a `Container`, a `Row`, and a `Col`. Rivet-react supports alternative exports of `Grid` (for `Row`) and `GridItem` (for `Col`) if you prefer that naming convention.

```jsx
<Container>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
    </Row>
</Container>
```

### Container Sizes

Use the `width` property to apply one of Rivet's fixed widths to the `Container`.

```jsx
<Container width="freshman" margin={{ bottom: 'sm' }}>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Freshman</div>
        </Col>
    </Row>
</Container>
<Container width="sophomore" margin={{ bottom: 'sm' }}>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Sophomore</div>
        </Col>
    </Row>
</Container>
<Container width="junior" margin={{ bottom: 'sm' }}>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Junior</div>
        </Col>
    </Row>
</Container>
<Container width="senior" margin={{ bottom: 'sm' }}>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Senior</div>
        </Col>
    </Row>
</Container>
```

### Centering a Container

Use the `center` attribute to center a container within its parent.

```jsx
<Container width="freshman" center>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Centered</div>
        </Col>
    </Row>
</Container>
```
