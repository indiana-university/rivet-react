Alerts are used to display brief important messages to users. They are designed to attract the user’s attention, but not interrupt their work.

View the [Rivet documentation for Alerts](https://rivet.iu.edu/components/alert/).

```jsx
<Alert variant="info" title="Scheduled System Maintenance">
    This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.
</Alert>

<Alert variant="success" title="Thank you!" margin={{ tb: 'sm' }}>
    We have received your application. Check your email in a few weeks to find out if you’ve been admitted.
</Alert>

<Alert variant="message" title="Unsaved Changes" margin={{ bottom: 'sm' }}>
    Your changes have not been saved. To save your changes, click 'Save my changes' or click 'Cancel' to exit without saving.
</Alert>

<Alert variant="danger" title="Incorrect User ID or Password" margin={{ bottom: 'sm'}}>
    The user ID and password you entered do not match. Please check your entries and try again. <a href="#">Forgot your user ID or password?</a>
</Alert>

<Alert variant="info" title={<><em>Styled Elements</em> in the Title</>}>
    HTML is allowed in the title to style alerts
</Alert>
```
