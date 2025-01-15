Base header components focus on letting users directly build the html element. They are less restrictive on allowed properties and components but also do not modify/process them.
Other versions of header components utilizes the base components while adding a specific structure.

This BaseHeaderNavigationSecondary directly sets children within the menu list component.

<!-- prettier-ignore-start -->
```jsx
const secondaryNav = <BaseHeaderNavigationSecondary title="Components">
    <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
    <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
    <BaseHeaderMenuItem itemUrl="#">Nav item three</BaseHeaderMenuItem>
</BaseHeaderNavigationSecondary>;
<BaseHeader title="Application Title" contentHref="#" secondaryNavigation={secondaryNav} />
```
<!-- prettier-ignore-end -->

### Navigation smaller

<!-- prettier-ignore-start -->
```jsx
const secondaryNav = <BaseHeaderNavigationSecondary title="Components" navWidth="sm">
    <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
    <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
    <BaseHeaderMenuItem itemUrl="#">Nav item three</BaseHeaderMenuItem>
</BaseHeaderNavigationSecondary>;
<BaseHeader title="Application Title" contentHref="#" secondaryNavigation={secondaryNav} />
```
<!-- prettier-ignore-end -->

### Navigation with a variety of options

<!-- prettier-ignore-start -->
```jsx
const secondaryNav = <BaseHeaderNavigationSecondary title="Components">
    <li className="rvt-header-menu__item">
        <BaseHeaderMenu label="Nav item one">
            <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
        </BaseHeaderMenu>
    </li>
    <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
    <BaseHeaderMenuItem>
        <BaseHeaderMenu label="Nav item three">
            <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
            <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item three</BaseHeaderMenuItem>
        </BaseHeaderMenu>
    </BaseHeaderMenuItem>
    <li className="rvt-header-menu__item">
        <Button variant="plain">Nav item three</Button>
    </li>
</BaseHeaderNavigationSecondary>;
<BaseHeader title="Application Title" contentHref="#" secondaryNavigation={secondaryNav} />
```
<!-- prettier-ignore-end -->
