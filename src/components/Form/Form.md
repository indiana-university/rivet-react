Forms contain different input elements, like text fields, checkboxes, radio buttons and submit buttons.

```jsx
<Form label="Registration" action="/#/Forms?id=form" method="GET">
    <Input type="text" name="firstname" label="First Name" margin={{ bottom: 'md' }} />
    <Input type="text" name="lastname" label="Last Name" margin={{ bottom: 'md' }} />
    <fieldset>
        <legend>Favorite Planet</legend>
        <List orientation="inline">
            <RadioButton name="radio-inline-demo" label="The Sun" />
            <RadioButton name="radio-inline-demo" label="Other" />
        </List>
    </fieldset>
  <Button type="submit" onClick={()=>{console.log("Submitted!")}}>Submit</Button>
</Form>
````
