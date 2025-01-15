Base header components focus on letting users directly build the html element. They are less restrictive on allowed properties and components but also do not modify/process them.
Other versions of header components utilizes the base components while adding a specific structure.

This BaseHeaderNavigation sets any list item children elements in the menu list while other elements are placed outside the after it.

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" contentHref="#">
    <BaseHeaderNavigation>
        <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
        <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
        <BaseHeaderMenuItem itemUrl="#">Nav item three</BaseHeaderMenuItem>
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->

### Navigation with a variety of options

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" contentHref="#">
    <BaseHeaderNavigation>
        <li>
            <BaseHeaderMenu label="Nav item one">
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </li>
        <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
        <Header.Search action={"/mySearchURL"} method={"post"} />
        <BaseHeaderMenuItem>
            <BaseHeaderMenu label="Nav item three">
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item three</BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </BaseHeaderMenuItem>
        <li>
            <Button variant="plain">Nav item three</Button>
        </li>
        <Header.Avatar username={"johndoe"} shortName={"jd"} logoutURL={"/logout"} />
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->
