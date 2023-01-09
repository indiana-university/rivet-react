HeaderNavigation Test

<!-- prettier-ignore-start -->
```jsx
<Header title="Application Title">
  <HeaderNavigation>
    <li><a href="#">Nav one</a></li>
    {/*<li>*/}
    {/*  <HeaderMenu label="Nav two">*/}
    {/*    <a href="#">Item one</a>*/}
    {/*    <a href="#">Item two</a>*/}
    {/*    <a href="#">Item three</a>*/}
    {/*    <a href="#">Item four</a>*/}
    {/*  </HeaderMenu>*/}
    {/*</li>*/}
    <li className={"rvt-header-menu__item--current"}>
      <a href="#" 
         // aria-current="page"
      >
        Nav three
      </a>
    </li>
    {/*<li>*/}
    {/*  <HeaderMenu label="Nav four">*/}
    {/*    <a href="#">Item one</a>*/}
    {/*    <a href="#">Item two</a>*/}
    {/*    <a href="#">Item three</a>*/}
    {/*    <a href="#">Item four</a>*/}
    {/*  </HeaderMenu>*/}
    {/*</li>*/}
  </HeaderNavigation>
</Header>
```
<!-- prettier-ignore-end -->
