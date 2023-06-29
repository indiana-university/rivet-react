Cols are used to represent columns in a grid. They must be wrapped in a Row component.

View the [Rivet documentation for Cols](https://rivet.uits.iu.edu/components/grid).

### Col Examples

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row>
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

### Explicit Column Widths

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row>
    <Col breakpoint="lg" columnWidth="2" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-blue-100">Column</div>
    </Col>
    <Col breakpoint="lg" columnWidth="6" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-orange-100">Column</div>
    </Col>
    <Col breakpoint="lg" columnWidth="4" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-green-100">Column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->

### Mixed Automatic and Explicit Column Widths

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row>
    <Col className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-blue-100">Column</div>
    </Col>
    <Col breakpoint="lg" columnWidth="6" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-orange-100">Column</div>
    </Col>
    <Col className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-green-100">Column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->

### Nested Grids

Row components can be nested in Col components to create a nested grid. Do not nest grids more than two levels deep.

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row>
    <Col breakpoint="md" columnWidth="6" border="all" borderColor="green">
      <p class="rvt-bg-blue-100">One-half</p>
      <Row>
        <Col breakpoint="md" columnWidth="6">
          <p class="rvt-bg-green-100">One-quarter</p>
        </Col>
        <Col breakpoint="md" columnWidth="6">
          <p class="rvt-bg-green-100">One-quarter</p>
        </Col>
      </Row>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->

### Push and Pull Columns

The `shiftType`, `shiftBreakpoint`, and `shiftWidth` properties can be used to pull or push columns to the left or right, respectively.

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row>
    <Col breakpoint="md" columnWidth="4" shiftType="push" shiftBreakpoint="md" shiftWidth="8">
      <div class="rvt-bg-blue-100">First column</div>
    </Col>
    <Col breakpoint="md" columnWidth="8" shiftType="pull" shiftBreakpoint="md" shiftWidth="4">
      <div class="rvt-bg-green-100">Second column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->

### Right Align Last Column

The `last` property can pull a column to the right

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl">  
  <Row>
    <Col breakpoint="md" columnWidth="4">
      <div class="rvt-bg-blue-100">First column</div>
    </Col>
    <Col breakpoint="md" columnWidth="3" last>
      <div class="rvt-bg-green-100">Second column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->
