The select element creates a dropdown that allows users to choose one item from a list.

View the [Rivet documentation for Select](https://rivet.uits.iu.edu/components/forms/select-input/).

### Select Example

Use the `note` property to provide contextual information to the user.

<!-- prettier-ignore-start -->
```jsx
<Select
  type="text"
  name="text-demo"
  label="Select Input"
  note="This is a note."
  margin={{ bottom: "md" }}
>
  <option value="">Choose an option...</option>
  <option value="Option One">Option One</option>
  <option value="Option Two">Option Two</option>
  <option value="Option Three">Option Three</option>
  <option value="Option Four">Option Four</option>
</Select>
```
<!-- prettier-ignore-end -->

### Inline Validation

Use the `variant` property along with a `note` to provide validation feedback to the user.

<!-- prettier-ignore-start -->
```jsx
<Select type="text"
       name="select-valid-state"
       variant="success"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meat. </>}
       margin={{bottom: 'md'}}>
    <option value="">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>

<Select type="text"
       name="select-warning-state"
       variant="warning"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meat. </>}
       margin={{bottom: 'md'}}>
    <option value="">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>

<Select type="text"
       name="select-error-state"
       variant="danger"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meat. </>}
       margin={{bottom: 'md'}}>
    <option value="">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>

<Select type="text"
       name="select-info-state"
       variant="info"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meat. </>}
       margin={{bottom: 'md'}}>
    <option value="">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>
```
<!-- prettier-ignore-end -->
