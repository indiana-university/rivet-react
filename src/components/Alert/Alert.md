Alerts can be rendered with or without titles:

### Examples
```jsx
<Alert variant="info" margin={{ bottom: 'sm' }}>
    A nice message for you!
</Alert>

<Alert variant="info" title="Scheduled System Maintenance">
    This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.
</Alert>
```

### Other styles
```jsx
<Alert variant="success" title="Thank you!" margin={{ bottom: 'sm' }}>
    We have received your application. Check your email in a few weeks to find out if you’ve been admitted.
</Alert>

<Alert variant="message" title="Unsaved Changes" margin={{ bottom: 'sm' }}>
    Your changes have not been saved. To save your changes, click 'Save my changes' or click 'Cancel' to exit without saving.
</Alert>

<Alert variant="error" title="Incorrect User ID or Password">
    The user ID and password you entered do not match. Please check your entries and try again. <a href="#">Forgot your user ID or password?</a>
</Alert>
```
