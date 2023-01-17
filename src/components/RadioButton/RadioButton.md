Use the radio input component to allow users to choose a single option among many.

View the [Rivet documentation for RadioButtons](https://rivet.iu.edu/components/radio-input/).

### RadioButton Examples

<!-- prettier-ignore-start -->
```jsx
<fieldset className="rvt-fieldset">
  <legend className="rvt-sr-only">Radio input (default)</legend>
  <ul className="rvt-list-plain rvt-width-xl">
    <li>
        <RadioButton name="radio-demo" label="Option one" />
    </li>
    <li>
        <RadioButton name="radio-demo" label="Option two" />
    </li>
    <li>
        <RadioButton name="radio-demo" label="Option three" disabled checked />
    </li>
    <li>
        <RadioButton 
            name="radio-demo" 
            label="Just a quick note" 
            description="This is a description for the radio button."
         />
    </li>
  </ul>
</fieldset>
```
<!-- prettier-ignore-end -->

### Inline RadioButtons

<!-- prettier-ignore-start -->
```jsx
<fieldset className="rvt-fieldset">
  <legend className="rvt-text-bold">Radio input (inline list)</legend>
  <ul className="rvt-list-inline">
    <li>
        <RadioButton name="radio-demo" label="Option one" />
    </li>
    <li>
        <RadioButton name="radio-demo" label="Option two" />
    </li>
  </ul>
</fieldset>
```
<!-- prettier-ignore-end -->
