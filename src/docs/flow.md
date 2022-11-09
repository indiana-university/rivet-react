## flow
Use the flow property to apply consistant vertical spacing between the direct children of the element

View the [Rivet Documentation for Automatic vertical spacing](https://rivet.iu.edu/utilities/spacing/#automatic-vertical-spacing).

### Acceptable Values

Property accepts boolean values 'true' or 'false'

### Examples
```jsx
<Container>
  <Section>Spacing between sections</Section>
  <Section>will be determined by the content</Section>
</Container>
<Container flow='true'>
  <Section>Spacing between sections</Section>
  <Section>will be consistant</Section>
</Container>
<Container flow='false'>
  <Section>Spacing between sections</Section>
  <Section>will be determined by the content</Section>
</Container>
<Container flow>
  <Section>Spacing between sections</Section>
  <Section>will be consistant</Section>
</Container>
```
