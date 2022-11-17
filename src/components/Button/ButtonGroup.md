Use a `ButtonGroup` to present related buttons, or buttons whose actions are exclusive to one another.

<!-- prettier-ignore-start -->

```jsx
<ButtonGroup>
  <Button
    onClick={() => {
      console.log("Ok!");
    }}
  >
    OK
  </Button>
  <Button
    onClick={() => {
      console.log("Cancel!");
    }}
    modifier="secondary"
  >
    Cancel
  </Button>
</ButtonGroup>
```

<!-- prettier-ignore-start -->

### Right Alignment

Use the `right` option to right-align the buttons in the container.

<!-- prettier-ignore-start -->

```jsx
<ButtonGroup right>
  <Button
    onClick={() => {
      console.log("Ok!");
    }}
  >
    OK
  </Button>
  <Button
    onClick={() => {
      console.log("Cancel!");
    }}
    modifier="secondary"
  >
    Cancel
  </Button>
</ButtonGroup>
```

<!-- prettier-ignore-start -->
