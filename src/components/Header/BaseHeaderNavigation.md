Base component for constructing a primary navigation in the header.

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title">
    <BaseHeaderNavigation>
        <BaseHeaderMenuItem itemUrl="#">Nav item one</BaseHeaderMenuItem>
        <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
        <BaseHeaderMenuItem itemUrl="#">Nav item thre</BaseHeaderMenuItem>
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->

### Navigation with a variety of options

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Application Title">
    <BaseHeaderNavigation>
        <BaseHeaderMenuItem>
            <BaseHeaderMenu label="Nav item one">
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </BaseHeaderMenuItem>
        <BaseHeaderMenuItem itemUrl="#">Nav item two</BaseHeaderMenuItem>
        <BaseHeaderMenuItem>
            <BaseHeaderMenu label="Nav item three">
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item one</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item two</BaseHeaderMenuItem>
                <BaseHeaderMenuItem itemUrl="#" subMenu>Sub item three</BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </BaseHeaderMenuItem>
        <BaseHeaderMenuItem>
            <Button variant="plain">Nav item three</Button>
        </BaseHeaderMenuItem>
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->