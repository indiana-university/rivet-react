## flow

Use the flow property to apply consistant vertical spacing between the direct children of the element

View the [Rivet Documentation for Automatic vertical spacing](https://rivet.iu.edu/utilities/spacing/#automatic-vertical-spacing).

<br/>

### Acceptable Values

Property accepts boolean values 'true' or 'false'

<br/>

### Examples

```jsx
<Component>
  <Section>Spacing between sections</Section>
  <Section>will be determined by the content</Section>
</Component>

<Component flow='true'>
  <Section>Spacing between sections</Section>
  <Section>will be consistant</Section>
</Component>

<Component flow='false'>
  <Section>Spacing between sections</Section>
  <Section>will be determined by the content</Section>
</Component>

<Component flow>
  <Section>Spacing between sections</Section>
  <Section>will be consistant</Section>
</Component>
```
