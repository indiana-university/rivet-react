The `DismissibleAlert` allows the user to remove the alert from view. This component provides a close button and implements visibility state management for a standard `Alert`.

```jsx
<DismissibleAlert variant="error" title="Error" onDismiss={() => window.alert('Dismissed!')}>
  A friendly error for you that can be dismissed!
</DismissibleAlert>
```
