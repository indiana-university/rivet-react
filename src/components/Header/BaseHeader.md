Base header components focus on letting users directly build the html element. They are less restrictive on allowed properties and components but also do not modify/process them.
Other versions of header components utilizes the base components while adding a specific structure.

The BaseHeader allows for setting a secondary navigation while children components are set directly under the global controls.

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" contentHref="#" />
```
<!-- prettier-ignore-end -->

### Header with multiple titles and size changes

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" contentHref="#" subtitle="Optional subtitle" headerWidth="md"/>
```
<!-- prettier-ignore-end -->

### Header with homeUrl and onClick handler

<!-- prettier-ignore-start -->
```jsx
<BaseHeader homeUrl="/example" onClick={e => alert(`You could navigate to ${e.currentTarget.attributes.href.nodeValue}`) } title="Application Title" contentHref="#" headerWidth="md"/>
```
<!-- prettier-ignore-end -->

### Header with Primary Navigation and Secondary Navigation

<!-- prettier-ignore-start -->
```jsx
const secondaryNav = <BaseHeaderNavigationSecondary title="Components">
    <BaseHeaderMenuItem itemUrl="#">Sub item one</BaseHeaderMenuItem>
    <BaseHeaderMenuItem itemUrl="#">Sub item two</BaseHeaderMenuItem>
</BaseHeaderNavigationSecondary>;

<BaseHeader title="Application Title" contentHref="#" secondaryNavigation={secondaryNav}>
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
    contentHref="#"
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
