A header is a section at the top of each page that contains the title of your website or application and the IU trident logo. Headers can also contain navigation links and a search button.

Branding guidelines require each site to have an IU-branded Header

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

The width prop can be used to constrain the width of the Header

<!-- prettier-ignore-start -->

```jsx
<Header title="Application Title" headerWidth="md"/>
```
<!-- prettier-ignore-end -->

Header can also be provided the following components as props - [HeaderNavigation](#/Navigation?id=headernavigation) which serves as the primary navigation for your site, [HeaderSearch](#/Navigation?id=headersearch) which provides a search functionality, and [HeaderNavigationSecondary](#/Navigation?id=headernavigationsecondary) which serves as the secondary navigation.

Header with Primary Navigation:

<!-- prettier-ignore-start -->
```jsx
const navigation = <HeaderNavigation>
  <ul>
    <li><a href={"#"}>Nav item one</a></li>
    <li data-rvt-c-header-nav-item__current><a href={"#"}>Nav item two</a></li>
    <li>
      <HeaderMenu label="Nav item three">
        <a href={"#"}>Sub item one</a>
        <a href={"#"}>Sub item two</a>
        <a href={"#"}>Sub item three</a>
      </HeaderMenu>
    </li>
  </ul>
</HeaderNavigation>;

<Header title="Application Title" navigation={navigation} />
```
<!-- prettier-ignore-end -->

Header with Primary Navigation and Avatar:

<!-- prettier-ignore-start -->
```jsx
const avatar = <HeaderAvatar username={"johndoe"} shortName={"jd"} logoutURL={"/logout"}/>
const navigation = <HeaderNavigation avatar={avatar}>
  <ul>
    <li><a href="#">Nav item one</a></li>
    <li><a href="#">Nav item two</a></li>
    <li data-rvt-c-header-nav-item__current>
      <HeaderMenu label="Nav item three">
        <a href="#">Sub item one</a>
        <a href="#">Sub item two</a>
        <a href="#">Sub item three</a>
      </HeaderMenu>
    </li>
  </ul>
</HeaderNavigation>;

<Header title="Application Title" navigation={navigation}/>
```
<!-- prettier-ignore-end -->

Header with Search:

<!-- prettier-ignore-start -->
```jsx
const search = <HeaderSearch action={"/mySearchURL"} method={"post"}/>;
<Header title="Application Title" search={search} />
```
<!-- prettier-ignore-end -->

Header with Primary Navigation and Search:

<!-- prettier-ignore-start -->
```jsx
const navigation = <HeaderNavigation>
  <ul>
    <li><a href="#">Nav item one</a></li>
    <li><a href="#">Nav item two</a></li>
    <li data-rvt-c-header-nav-item__current>
      <HeaderMenu label="Nav item three">
        <a href="#">Sub item one</a>
        <a href="#">Sub item two</a>
        <a href="#">Sub item three</a>
      </HeaderMenu>
    </li>
  </ul>
</HeaderNavigation>;
const search = <HeaderSearch action={"/mySearchURL"} method={"post"}/>;

<Header title="Application Title" navigation={navigation} search={search} />
```
<!-- prettier-ignore-end -->

Header with Primary Navigation, Search, Avatar and Secondary Navigation:

<!-- prettier-ignore-start -->
```jsx
const avatar = <HeaderAvatar username={"johndoe"} shortName={"jd"} logoutURL={"/logout"}/>;
const navigation = <HeaderNavigation avatar={avatar}>
  <ul>
    <li><a href="#">Nav item one</a></li>
    <li><a href="#">Nav item two</a></li>
    <li data-rvt-c-header-nav-item__current>
      <HeaderMenu label="Nav item three">
        <a href="#">Sub item one</a>
        <a href="#">Sub item two</a>
        <a href="#">Sub item three</a>
      </HeaderMenu>
    </li>
  </ul>
</HeaderNavigation>;
const search = <HeaderSearch action={"/mySearchURL"} method={"post"}/>;
const secondaryNavigation = <HeaderNavigationSecondary title={"Component Library"}>
  <ul>
    <li><a href="#">Section item one</a></li>
    <li data-rvt-c-header-nav-item__current>
      <HeaderMenu label="Section item two">
        <a href="#">Sub tem one</a>
        <a href="#">Sub item two</a>
        <a href="#">Sub item three</a>
      </HeaderMenu>
    </li>
  </ul>
</HeaderNavigationSecondary>;

<Header title="Application Title" navigation={navigation} search={search} secondaryNavigation={secondaryNavigation}/>

```
<!-- prettier-ignore-end -->
