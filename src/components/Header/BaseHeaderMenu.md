Base component for adding a dropdown menu to primary or secondary navigation in the header.

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title">
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
<BaseHeader title="Application Title">
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