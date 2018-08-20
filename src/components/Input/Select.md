### Default Style

```jsx
<Select type="text" name="text-demo" label="Select Input" note="This is a note." margin={{ bottom: 'md' }}>
    <option value="">Choose an option...</option>
    <option value="Option One">Option One</option>
    <option value="Option Two">Option Two</option>
    <option value="Option Three">Option Three</option>
    <option value="Option Four">Option Four</option>
</Select>
```

### Select Inline Validation

```jsx
<Select type="text"
       name="select-valid-state"
       variant="valid"
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
       note={<>  </>}
       margin={{bottom: 'md'}}>
    <option value="">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>

<Select type="text"
       name="select-error-state"
       variant="invalid"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meat. </>}
       margin={{bottom: 'md'}}>
    <option value="Steak">Choose an option...</option>
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
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>
```
