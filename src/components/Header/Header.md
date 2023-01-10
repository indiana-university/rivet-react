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

The HeaderNavigation supports internal app navigation, either as individual links or as dropdowns via the use of HeaderMenu. The HeaderIdentity can take individual user tasks as child elements. On mobile these navigation elements will be rendered as an accordion (collapse).

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title">
  <HeaderNavigation>
    <ul>
      <li><a href="#">Nav one</a></li>
      <li className={"rvt-header-menu__item--current"}>
        <HeaderMenu label="Nav two">
          <a href="#">Item one</a>
          <a href="#">Item two</a>
          <a href="#">Item three</a>
          <a href="#">Item four</a>
        </HeaderMenu>
      </li>
      <li><a href="#">Nav three</a></li>
      <li>
        <HeaderMenu label="Nav four">
          <a href="#">Item one</a>
          <a href="#">Item two</a>
          <a href="#">Item three</a>
          <a href="#">Item four</a>
        </HeaderMenu>
      </li>
    </ul>
  </HeaderNavigation>
</Header>
```
<!-- prettier-ignore-end -->
