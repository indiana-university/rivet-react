## stopBreak

Use the stopBreak property to prevent text wrapping in an element.

View the [Rivet Documentation for No break](https://rivet.iu.edu/utilities/typography/#no-break).

<br/>

### Acceptable Values

Property accepts boolean values 'true' or 'false'

<br/>

### Examples

```jsx
<Component>
    Component's text will break and wrap normally
</Component>

<Component stopBreak='true'>
    Component's text will not break and wrap
</Component>

<Component stopBreak='false'>
    Component's text will break and wrap normally
</Component>

<Component stopBreak>
    Component's text will not break and wrap
</Component>
```
