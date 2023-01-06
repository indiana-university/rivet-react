Use the z property to set the stacking order of an element.

View the [Rivet Documentation for Z Index](https://rivet.iu.edu/utilities/z-index/).

<br/>

### Acceptable Values

This property accepts values between 1 and 10 and translates them into multiples of 100

<br/>

### Examples

```jsx static
<Component>
    Item at z-index: auto
</Component>

<Component z='1'>
    Item at z-index: 100
</Component>

<Component z='2'>
    Item at z-index: 200
</Component>

<Component z='5'>
    Item at z-index: 500
</Component>

<Component z='10'>
    Item at z-index: 1000
</Component>
```
