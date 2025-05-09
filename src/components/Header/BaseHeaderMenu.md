Base header components focus on letting users directly build the html element. They are less restrictive on allowed properties and components but also do not modify/process them.
Other versions of header components utilizes the base components while adding a specific structure.

This BaseHeaderMenu directly sets children within the menu list component.

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" contentHref="#">
    <BaseHeaderNavigation>
        <BaseHeaderMenuItem>
            <BaseHeaderMenu label="Nav item one">
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item three</BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </BaseHeaderMenuItem>
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->

### Menu label act as a navigation link

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title" contentHref="#">
    <BaseHeaderNavigation>
        <BaseHeaderMenuItem>
            <BaseHeaderMenu label="Nav item one" menuUrl="#">
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item three</BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </BaseHeaderMenuItem>
        <BaseHeaderMenuItem current>
            <BaseHeaderMenu current label="Nav item two" menuUrl="#">
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item three</BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </BaseHeaderMenuItem>
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->
