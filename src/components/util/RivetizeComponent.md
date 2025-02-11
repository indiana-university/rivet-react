Use the rivetize component to create custom components and utilize the rivet utility properties.

### Custom div containers

<!-- prettier-ignore-start -->
```jsx
<div>
    <RivetizeComponent margin={{'bottom': 'sm'}} color='crimson'>
        Div container with a bottom margin and color setting
    </RivetizeComponent>
    <RivetizeComponent border='all' textAlign='right' weight='bold'>
        Div container with border and bold text to the right
    </RivetizeComponent>
    <RivetizeComponent flex='normal' justifyContent='space-between'>
      <RivetizeComponent bg='blue' width='sm'>
        &nbsp;
      </RivetizeComponent>
      <RivetizeComponent bg='green' width='md'>
        &nbsp;
      </RivetizeComponent>
      <RivetizeComponent bg='gold' width='lg'>
        &nbsp;
      </RivetizeComponent>
    </RivetizeComponent>
</div>
```
<!-- prettier-ignore-end -->

### Custom elements

<!-- prettier-ignore-start -->
```jsx
<div>
    <RivetizeComponent component='button' margin={{'bottom': 'sm'}} onClick={()=>alert('Button Press')}>
        Custom Button
    </RivetizeComponent>
    <RivetizeComponent component='p' margin={{'bottom': 'sm'}} textAlign='center'>
        This is an example of a normal paragraph element with margin set using rivet properties
    </RivetizeComponent>
    <RivetizeComponent component='a' margin={{'bottom': 'sm'}} href='#'>
        Custom Link
    </RivetizeComponent>
</div>
```
<!-- prettier-ignore-end -->
