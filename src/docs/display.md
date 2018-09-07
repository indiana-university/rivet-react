The Rivet display utility classes make it easy to control how elements display on screen and how they are presented to assistive technologies like screen readers.

View the [Rivet Documentation for Display](https://rivet.uits.iu.edu/components/utilities/display/).

### Screen Reader Only
```jsx
    <h1>This text is visible <span className="rvt-sr-only">but, this text is visually hidden and still accessible to screen readers.</span></h1>
```

### Display Property Utilities

Use the `display` property to adjust the display of any rivet-react component.

```jsx
<Container display="inline" padding="xs" className="rvt-bg-midnight">Display Inline</Container>
<Container display="block" padding="xs" margin={{ top: 'sm' }} className="rvt-bg-midnight">Display Block</Container>
<Container display="flex" padding="xs" margin={{ top: 'sm' }} className="rvt-bg-midnight">
    <div className="rvt-bg-blue rvt-m-right-sm rvt-p-all-xs">Flex Child</div>
    <div className="rvt-bg-blue rvt-m-right-sm rvt-p-all-xs">Flex Child</div>
    <div className="rvt-bg-blue rvt-m-right-sm rvt-p-all-xs">Flex Child</div>
</Container>
```
