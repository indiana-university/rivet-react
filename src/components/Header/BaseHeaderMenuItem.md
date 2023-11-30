Header with various menu items:

<!-- prettier-ignore-start -->
```jsx
<BaseHeader title="Header Menu Items">
    <BaseHeaderNavigation>
        <BaseHeaderMenuItem>
            <Button variant="plain">Standard Item</Button>
        </BaseHeaderMenuItem>
        <BaseHeaderMenuItem itemUrl="#">
            Link Item
        </BaseHeaderMenuItem>
        <BaseHeaderMenuItem current itemUrl="#">
            Current Item
        </BaseHeaderMenuItem>
        <BaseHeaderMenuItem>
            <BaseHeaderMenu label="Menu">
                <BaseHeaderMenuItem subMenu>
                    <Button variant="plain">Standard Sub Item</Button>
                </BaseHeaderMenuItem>
                <BaseHeaderMenuItem subMenu itemUrl="#">
                    Link Sub Item
                </BaseHeaderMenuItem>
            </BaseHeaderMenu>
        </BaseHeaderMenuItem>
    </BaseHeaderNavigation>
</BaseHeader>
```
<!-- prettier-ignore-end -->