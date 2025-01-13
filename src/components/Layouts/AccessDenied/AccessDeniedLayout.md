View the [Rivet documentation for Access Denied Layout](https://rivet.iu.edu/layouts/preview/error-page/access-denied/).

```jsx
<AccessDeniedLayout errorMessage="Sorry, but you don't have permission to view this page or resource. Try searching the site or using the links below to find what you’re looking for.">
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
</AccessDeniedLayout>
```
