Base component for constructing a header. Can contain multiple subcomponents as children and a set secondary navigation.

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" />
```
<!-- prettier-ignore-end -->

### Header with multiple titles and size changes

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" subtitle="Optional subtitle" headerWidth="md"/>
```
<!-- prettier-ignore-end -->

### Header with Primary Navigation and Secondary Navigation

<!-- prettier-ignore-start -->
```jsx
const secondaryNav = <BaseHeaderNavigationSecondary title="Components">
    <BaseHeaderMenuItem itemUrl="#">Sub item one</BaseHeaderMenuItem>
    <BaseHeaderMenuItem itemUrl="#">Sub item two</BaseHeaderMenuItem>
</BaseHeaderNavigationSecondary>;

<BaseHeader title="Application Title" secondaryNavigation={secondaryNav}>
    <BaseHeaderNavigation>
        <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
        <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->

### Complex header with multiple components

<!-- prettier-ignore-start -->
```jsx
const secondaryNavigation = <BaseHeaderNavigationSecondary title="Component Library">
    <BaseHeaderMenuItem itemUrl="#">Section item one</BaseHeaderMenuItem>
    <BaseHeaderMenuItem>
        <BaseHeaderMenu label="Section item two">
            <BaseHeaderMenuItem itemUrl="#">Sub tem one</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#">Sub item two</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#">Sub item three</BaseHeaderMenuItem>
        </BaseHeaderMenu>
    </BaseHeaderMenuItem>
</BaseHeaderNavigationSecondary>;

<BaseHeader
    homeUrl="/foo"
    secondaryNavigation={secondaryNavigation}
    title="Application Title"
>
    <BaseHeaderNavigation>
            <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
            <BaseHeaderMenuItem>
                <BaseHeaderMenu label="Nav item three">
                    <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                    <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
                    <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item three</BaseHeaderMenuItem>
                </BaseHeaderMenu>
            </BaseHeaderMenuItem>
            <Header.Search action={"/mySearchURL"} method={"post"} />
            <Header.Avatar username={"johndoe"} shortName={"jd"} logoutURL={"/logout"} />
    </BaseHeaderNavigation>
</BaseHeader>

```
<!-- prettier-ignore-end -->
