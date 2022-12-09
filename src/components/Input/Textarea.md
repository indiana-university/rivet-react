### Textarea Example

Use the `note` property to provide contextual information to the user.

<!-- prettier-ignore-start -->
```jsx
<Textarea name="textarea-demo" label="Text Area" />
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
          note={<>Your <strong>Essay</strong> is valid!</>} />

<Textarea name="textarea-warning"
          variant="warning"
          label="Response"
          note={<>Your <strong>Response</strong> has some misspellings!</>} />

<Textarea name="textarea-invalid"
          variant="danger"
          label="Description"
          note={<>Your <strong>Description</strong> has invalid characters.</>} />

<Textarea name="textarea-info"
          variant="info"
          label="Message"
          note={<>Add a <strong>Message</strong> to give users more information.</>} />
```
<!-- prettier-ignore-end -->
