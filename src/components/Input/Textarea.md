### Textarea Example

Use the `note` property to provide contextual information to the user.

<!-- prettier-ignore-start -->
```jsx
<Textarea name="textarea-demo" label="Text Area" margin={{bottom: "md"}} />
<Textarea name="textarea-demo-disabled" label="Text Area (Disabled)" disabled />
```
<!-- prettier-ignore-end -->

### Inline Validation

Use the `variant` property along with a `note` to provide validation feedback to the user.

<!-- prettier-ignore-start -->
```jsx
<Textarea name="textarea-valid"
          variant="success"
          label="Essay"
          note={<>Your <strong>Essay</strong> is valid!</>}
          margin={{bottom: "md"}} />

<Textarea name="textarea-warning"
          variant="warning"
          label="Response"
          note={<>Your <strong>Response</strong> has some misspellings!</>}
          margin={{bottom: "md"}} />

<Textarea name="textarea-invalid"
          variant="danger"
          label="Description"
          note={<>Your <strong>Description</strong> has invalid characters.</>}
          margin={{bottom: "md"}} />

<Textarea name="textarea-info"
          variant="info"
          label="Message"
          note={<>Add a <strong>Message</strong> to give users more information.</>}
          margin={{bottom: "md"}} />
```
<!-- prettier-ignore-end -->

### Group Input

Use the `prependment` and `appendment` properties to group an element before or after the textarea.

<!-- prettier-ignore-start -->
```jsx
<Textarea
       prependment={<div class="rvt-input-group__text">Short</div>}
       appendment={<div class="rvt-input-group__text">100 characters</div>}
       type="text"
       label="Description"
       note="Enter a description for the website" 
       margin={{bottom: 'md'}}
/>
```
<!-- prettier-ignore-end -->
