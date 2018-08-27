### Automatic Columns

By default, columns will be equally spaced.

```jsx
<Container>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
    </Row>
</Container>
```

### Responsive Automatic Columns

Using the `sm`|`md`|`lg`|`xl`|`xxl` attributes to specify the screen size at which you would like your grid to become responsive automatic grid.  At smaller screen sizes, the columns will appear stacked.

```jsx
<Container>
    <Row>
        <Col lg>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col lg>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col lg>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col lg>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
    </Row>
</Container>
```

### Setting Column Widths

Apply a column span to the `sm`|`md`|`lg`|`xl`|`xxl` attributes to specify the span of the responsive column. *The sum of the spans in each row should not exceed 12.*

```jsx
<Container width="junior" center>
    <Row>
        <Col md={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">4 columns medium and up</div>
        </Col>
        <Col md={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">4 columns medium and up</div>
        </Col>
        <Col md={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">4 columns medium and up</div>
        </Col>
    </Row>
</Container>
```

### Mixing Column Widths with Auto Columns

You can apply a span to some columns, leaving the rest to be automatically sized. 

```jsx
<Container>
    <Row>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col md={6}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">6 columns medium and up</div>
        </Col>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
    </Row>
</Container>
```

### Push and Pull

Use the `push*` and `pull*` properties to adjust the visual order of columns at specific breakpoints.

```jsx
<Container>
    <Row>
        <Col md={4} pushMd={8}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">I'm first in the source order</div>
        </Col>
        <Col md={8} pullMd={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">I'm second in the source order</div>
        </Col>
    </Row>
</Container>
```

### Right-align Last Item

Use the `last` attribute to right-align the final column in the row. This is useful when the sum of spans is less than 12.

```jsx
<Container>
    <Row>
        <Col sm={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Four</div>
        </Col>
        <Col sm={7} last>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Seven with one left over</div>
        </Col>
    </Row>
</Container>
```

### Nesting

Rows and columns can be nested to create complex grid arrangements.

```jsx
<Container>
    <Row>
        <Col md={7} lg={9}>
            <div className="rvt-bg-blue rvt-text-center rvt-p-all-xs">
                <p>Level One</p>
                <Row>
                    <Col md={7} lg={9}>
                        <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Level Two</div>
                    </Col>
                    <Col md={5} lg={3}>
                        <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Level Two</div>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col md={5} lg={3}>
            <div className="rvt-bg-blue rvt-text-center rvt-p-all-xxs">Level One</div>
        </Col>
    </Row>
</Container>
```
