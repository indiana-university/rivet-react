
Alerts are used to display brief important messages to users. They are designed to attract the user’s attention, but not interrupt their work.

View the [Rivet documentation for Alerts](https://rivet.uits.iu.edu/components/overlays/alerts/).

```jsx
<Alert variant="info" margin={{ bottom: 'sm' }}>
    Some alerts don't need a title. This is one of them.
</Alert>

<Alert variant="info" title="Scheduled System Maintenance">
    This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.
</Alert>

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
