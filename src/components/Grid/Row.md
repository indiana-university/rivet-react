Rows are used to represent rows in a grid. They must be wrapped in a Container or a Col component.

View the [Rivet documentation for Rows](https://rivet.uits.iu.edu/components/grid?example=columns).

### Row Examples

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row>
    <Col>
      <div class="rvt-bg-blue-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-orange-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-green-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-purple-100">Column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->

### Row with more space between

<!-- prettier-ignore-start -->
```jsx
<Container size="xl">
  <Row spacing="loose" className="[ rvt-m-top-md ]">
    <Col>
      <div class="rvt-bg-blue-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-orange-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-green-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-purple-100">Column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->

### Row with less space between

<!-- prettier-ignore-start -->
```jsx
<Container size="xl">
  <Row spacing="tight" className="[ rvt-m-top-md ]">
    <Col>
      <div class="rvt-bg-blue-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-orange-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-green-100">Column</div>
    </Col>
    <Col>
      <div class="rvt-bg-purple-100">Column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->

### Set elements of containers

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row component='section'>
    <Col breakpoint="lg" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-blue-100">Column</div>
    </Col>
    <Col breakpoint="lg" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-orange-100">Column</div>
    </Col>
    <Col breakpoint="lg" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-green-100">Column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->
