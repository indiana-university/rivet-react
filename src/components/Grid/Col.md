### Automatic Columns
```jsx
<Container>
    <Grid>
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
    </Grid>
</Container>
```

### Responsive Automatic Columns
```jsx
<Container>
    <Grid>
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
    </Grid>
</Container>
```

### Setting Column Widths
```jsx
<Container width="junior" center>
    <Grid>
        <Col md={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">4 columns medium and up</div>
        </Col>
        <Col md={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">4 columns medium and up</div>
        </Col>
        <Col md={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">4 columns medium and up</div>
        </Col>
    </Grid>
</Container>
```

### Mixing Column Widths with Auto Columns
```jsx
<Container>
    <Grid>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
        <Col md={6}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">6 columns medium and up</div>
        </Col>
        <Col>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Grid Item</div>
        </Col>
    </Grid>
</Container>
```

### Push and Pull
```jsx
<Container>
    <Grid>
        <Col md={4} pushMd={8}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">I'm first in the source order</div>
        </Col>
        <Col md={8} pullMd={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">I'm second in the source order</div>
        </Col>
    </Grid>
</Container>
```

### Right-align Last Item
```jsx
<Container>
    <Grid>
        <Col sm={4}>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Four</div>
        </Col>
        <Col sm={7} last>
            <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Seven with one left over</div>
        </Col>
    </Grid>
</Container>
```

### Nesting
```jsx
<Container>
    <Grid>
        <Col md={7} lg={9}>
            <div className="rvt-bg-blue rvt-text-center rvt-p-all-xs">
                <p>Level One</p>
                <Grid>
                    <Col md={7} lg={9}>
                        <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Level Two</div>
                    </Col>
                    <Col md={5} lg={3}>
                        <div className="rvt-bg-midnight rvt-text-center rvt-p-all-xxs">Level Two</div>
                    </Col>
                </Grid>
            </div>
        </Col>
        <Col md={5} lg={3}>
            <div className="rvt-bg-blue rvt-text-center rvt-p-all-xxs">Level One</div>
        </Col>
    </Grid>
</Container>
```
