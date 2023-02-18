A header is a section at the top of each page that contains the title of your website or application and the IU trident logo. Headers can also contain navigation links and a search button.

Branding guidelines require each site to have an IU-branded header.

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
<Header title="Application Title" headerWidth="md"/>
```
<!-- prettier-ignore-end -->

Header can also be provided the following components as children - [Header.Navigation](#/Navigation?id=headernavigation) which serves as the primary navigation for your site, [Header.Search](#/Navigation?id=headersearch) which provides a search functionality, and [Header.NavigationSecondary](#/Navigation?id=headernavigationsecondary) which serves as the secondary navigation.

Header with Primary Navigation:

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title">
  <Header.Navigation>
    <ul>
      <li><a href={"#"}>Nav item one</a></li>
      <li data-rvt-c-header-nav-item__current><a href={"#"}>Nav item two</a></li>
      <li>
        <Header.Menu label="Nav item three">
          <a href={"#"}>Sub item one</a>
          <a href={"#"}>Sub item two</a>
          <a href={"#"}>Sub item three</a>
        </Header.Menu>
      </li>
    </ul>
  </Header.Navigation>
</Header>
```
<!-- prettier-ignore-end -->

Header with Search:

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title">
  <Header.Search action={"/mySearchURL"} method={"post"}/>
</Header>
```
<!-- prettier-ignore-end -->

Header with Primary Navigation and Search:

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title">
  <Header.Navigation>
    <ul>
      <li><a href="#">Nav item one</a></li>
      <li><a href="#">Nav item two</a></li>
      <li data-rvt-c-header-nav-item__current>
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href="#">Sub item two</a>
          <a href="#">Sub item three</a>
        </Header.Menu>
      </li>
    </ul>
  </Header.Navigation>
  <Header.Search action={"/mySearchURL"} method={"post"}/>
</Header>
```
<!-- prettier-ignore-end -->

Header with Primary Navigation, Search and Secondary Navigation:

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title">
  <Header.Navigation>
    <ul>
      <li><a href="#">Nav item one</a></li>
      <li><a href="#">Nav item two</a></li>
      <li data-rvt-c-header-nav-item__current>
        <Header.Menu label="Nav item three">
          <a href="#">Sub item one</a>
          <a href="#">Sub item two</a>
          <a href="#">Sub item three</a>
        </Header.Menu>
      </li>
    </ul>
  </Header.Navigation>
  <Header.Search action={"/mySearchURL"} method={"post"}/>
  <Header.NavigationSecondary title={"Component Library"}>
    <ul>
      <li><a href="#">Section item one</a></li>
      <li data-rvt-c-header-nav-item__current>
        <Header.Menu label="Section item two">
          <a href="#">Sub tem one</a>
          <a href="#">Sub item two</a>
          <a href="#">Sub item three</a>
        </Header.Menu>
      </li>
    </ul>
  </Header.NavigationSecondary>
</Header>
```
<!-- prettier-ignore-end -->
