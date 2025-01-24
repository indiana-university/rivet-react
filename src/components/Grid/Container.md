Containers are designed to be generic wrappers for content. They are centered by default and add whitespace to the left and right of the content so that it does not run up against the edge of the viewport.

View the [Rivet documentation for Containers](https://rivet.uits.iu.edu/components/grid?example=containers).

### Container Examples

<!-- prettier-ignore-start -->
```jsx
<Container size="sm" className="[ rvt-bg-blue-100 ]">
  <span>SM</span>
</Container>

<Container size="md" margin={{top: 'md'}} className="[ rvt-bg-blue-100 ]">
  <span>MD</span>
</Container>

<Container size="lg" margin={{top: 'md'}} className="[ rvt-bg-blue-100 ]">
  <span>LG</span>
</Container>

<Container size="xl" margin={{top: 'md'}} className="[ rvt-bg-blue-100 ]">
  <span>XL</span>
</Container>
```
<!-- prettier-ignore-end -->

### Set elements of containers

The `component` property overrides the element of the container allowing for the user of semantic elements when needed

<!-- prettier-ignore-start -->
```jsx  
<Container size="xl" component='main'>  
  <Row component='section'>
    <Col component='article' breakpoint="lg" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-blue-100">Column</div>
    </Col>
    <Col component='article' breakpoint="lg" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-orange-100">Column</div>
    </Col>
    <Col component='article' breakpoint="lg" className="[ rvt-m-bottom-md ]">
      <div class="rvt-bg-green-100">Column</div>
    </Col>
  </Row>
</Container>
```
<!-- prettier-ignore-end -->
