View the [Rivet documentation for Page Not Found Layout](https://rivet.iu.edu/layouts/preview/error-page/page-not-found/).

```jsx
<PageNotFoundLayout errorMessage="Sorry, but the page you’re looking for doesn’t exist or was moved. Try searching the site or using the links below to find what you’re looking for.">
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
</PageNotFoundLayout>
```
