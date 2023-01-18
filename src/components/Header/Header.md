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

The HeaderNavigation supports internal app navigation, either as individual links or as dropdowns via the use of HeaderMenu. On mobile these navigation elements will be rendered as an accordion (collapse).

To indicate which item inside HeaderNavigation is currently active, wrap it in a `<li>` element with the class `rvt-header-menu__item--current`. This also applies the `aria-current="page"` attribute on the associated anchor element, to meet accessibility standards.

<!-- prettier-ignore-start -->

```jsx
<Header title="Application Title">
  <HeaderNavigation>
    <ul>
      <li><a href="#">Nav item one</a></li>
      <li><a href="#">Nav item two</a></li>
      <li className={"rvt-header-menu__item--current"}>
        <HeaderMenu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href="#">Sub item two</a>
          <a href="#">Sub item three</a>
        </HeaderMenu>
      </li>
    </ul>
  </HeaderNavigation>
  <HeaderSearch action={"/mySearchURL"} method={"post"}/>
  <HeaderNavigationSecondary title={"Component Library"}>
    <ul>
      <li><a href="#">Section item one</a></li>
      <li className={"rvt-header-menu__item--current"}>
        <HeaderMenu label="Section item two">
          <a href="#">Sub tem one</a>
          <a href="#">Sub item two</a>
          <a href="#">Sub item three</a>
        </HeaderMenu>
      </li>
    </ul>
  </HeaderNavigationSecondary>
</Header>
```
<!-- prettier-ignore-end -->
