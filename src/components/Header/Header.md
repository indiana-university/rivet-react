A header is a section at the top of each page that contains the title of your website or application and the IU trident logo. Headers can also contain navigation links and a search button.

Branding guidelines require each site to have an IU-branded header. For more information on web branding guidelines, visit [brand.iu.edu](brand.iu.edu).

View the [Rivet documentation for Header](https://rivet.iu.edu/components/header/).

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title" />
```
<!-- prettier-ignore-end -->

An optional subtitle can also be provided.

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title" subtitle="Optional subtitle" />
```
<!-- prettier-ignore-end -->

You can also override the default "/" URL for the link:

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title" href="/foo" />
```
<!-- prettier-ignore-end -->

The width prop can be used to constrain the width of the header.

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title" width="md" />
```
<!-- prettier-ignore-end -->
