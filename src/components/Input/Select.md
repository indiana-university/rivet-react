### Default Style

```jsx
<Select type="text" name="text-demo" label="Select Input" note="This is a note." margin={{ bottom: 'md' }}>
    <option>Choose an option...</option>
    <option value="Option One">Option One</option>
    <option value="Option One">Option Two</option>
    <option value="Option One">Option Three</option>
    <option value="Option One">Option Four</option>
</Select>
```

### Select Inline Validation

```jsx
<Select type="text"
       name="select-valid-state"
       variant="valid"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meats. </>}
       margin={{bottom: 'md'}}>
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>

<Select type="text"
       name="select-warning-state"
       variant="warning"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meats. </>}
       margin={{bottom: 'md'}}>
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>

<Select type="text"
       name="select-error-state"
       variant="invalid"
       label="Type"
       note={<> You must pick a <strong>Type</strong> of meats. </>}
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
       note={<> You must pick a <strong>Type</strong> of meats. </>}
       margin={{bottom: 'md'}}>
    <option value="Steak">Choose an option...</option>
    <option value="Steak">Steak</option>
    <option value="Chops">Chops</option>
    <option value="Ribs">Ribs</option>
    <option value="Brisket">Brisket</option>
</Select>
```
