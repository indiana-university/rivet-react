Use the checkbox component to allow users to pick zero, one, or many options from a list of choices.

View the [Rivet documentation for Checkboxess](https://rivet.iu.edu/components/checkbox/).

### Checkbox Examples

<!-- prettier-ignore-start -->
```jsx
<fieldset className="rvt-fieldset">
  <legend className="rvt-sr-only">Checkbox list</legend>
  <ul className="rvt-list-plain rvt-width-xl">
    <li>
        <Checkbox name="checkbox-demo" label="Option one" />
    </li>
    <li>
        <Checkbox name="checkbox-demo" label="Option two" disabled />
    </li>
    <li>
        <Checkbox name="checkbox-demo" label="Option three" disabled checked />
    </li>
    <li>
        <Checkbox 
            name="checkbox-demo" 
            label="Just a quick note" 
            description="This checkbox has a really long label that can wrap on to two lines and still have nice left alignment."
         />
    </li>
    <li>
        <Checkbox name="checkbox-demo" label="This label text is visually hidden" labelVisibility={false} />
    </li>
  </ul>
</fieldset>
```
<!-- prettier-ignore-end -->

### Inline Checkboxes

<!-- prettier-ignore-start -->
```jsx
<fieldset className="rvt-fieldset">
  <legend className="rvt-sr-only">Checkbox list</legend>
  <ul className="rvt-list-inline">
    <li>
        <Checkbox name="checkbox-demo" label="Option one" />
    </li>
    <li>
        <Checkbox name="checkbox-demo" label="Option two" />
    </li>
    <li>
        <Checkbox name="checkbox-demo" label="Option three" />
    </li>
  </ul>
</fieldset>
```
<!-- prettier-ignore-end -->
