View the [Rivet documentation for Server Error Layout](https://rivet.iu.edu/layouts/preview/error-page/server-error/).

```jsx
<ServerErrorLayout errorMessage="Sorry, but the web server ran into an error while processing your request. If the problem persists, contact us using one of the methods below.">
  <Container size="sm" className="rvt-p-all-xxl">
    <div className="rvt-flex rvt-m-lr-3-xl">
      <Card
        className="landing-page-card"
        title="Return Home"
        titleUrl="/"
        clickable
        raised
      >
        Redirect to home page.
      </Card>
    </div>
  </Container>
</ServerErrorLayout>
```
