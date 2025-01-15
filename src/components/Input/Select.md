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

### Group Input

Use the `prependment` and `appendment` properties to group an element before or after the select

<!-- prettier-ignore-start -->
```jsx
<Select
       prependment={<div class="rvt-input-group__text">Dinner:</div>}
       appendment={<div class="rvt-input-group__text">meal</div>}
       type="text"
       label="RSVP"
       note="Select you perferred food option" 
       margin={{bottom: 'md'}}
>
  <option value="">Choose an option...</option>
  <option value="Steak">Steak</option>
  <option value="Chops">Chops</option>
  <option value="Ribs">Ribs</option>
  <option value="Brisket">Brisket</option>
</Select>

<Select
       prependment={<button type="button" class="rvt-button">Check Availability</button>}
       type="text"
       label="Search Username"
       labelVisibility="screen-reader-only"
       margin={{bottom: 'md'}}
>
  <option value="">Choose an option...</option>
  <option value="Steak">Steak</option>
  <option value="Chops">Chops</option>
  <option value="Ribs">Ribs</option>
  <option value="Brisket">Brisket</option>
</Select>

<Select
       appendment={
              <Dropdown
                     alignRight
                     label="Actions"
              >
                     <Button onClick={() => alert('Selection Saved')}>Save</Button>
                     <Button onClick={() => alert('Selection Submitted')}>Submit</Button>
              </Dropdown>
       }
       type="text"
       label="Main Course Selection"
       margin={{bottom: 'md'}}
>
  <option value="">Choose an option...</option>
  <option value="Steak">Steak</option>
  <option value="Chops">Chops</option>
  <option value="Ribs">Ribs</option>
  <option value="Brisket">Brisket</option>
</Select>
```
<!-- prettier-ignore-end -->
