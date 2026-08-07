Use the grid layout to create columns of resource links and handle spacing

### Resource Footer

<!-- prettier-ignore-start -->
```jsx
<ResourceFooter>
    <div className="rvt-row">
        <ResourceFooterTextBlock className="rvt-cols-6"label="Example Text">
            This is a block<br />
            of<br />
            Example Text
        </ResourceFooterTextBlock>
        <ResourceFooterLinkBlock className="rvt-cols" label="Example Links 2">
            <a href="#">Example Link 1</a>
            <a href="#">Example Link 2</a>
            <a href="#">Example Link 3</a>
        </ResourceFooterLinkBlock>
    </div>
</ResourceFooter>
```
<!-- prettier-ignore-end -->

### Resource Footer with custom lable and size

<!-- prettier-ignore-start -->
```jsx
<ResourceFooter label="Resource Example">
    <div className="rvt-row">
        <ResourceFooterTextBlock className="rvt-cols-6"label="Example Text">
            This is a block<br />
            of<br />
            Example Text
        </ResourceFooterTextBlock>
        <ResourceFooterLinkBlock className="rvt-cols" label="Example Links 2">
            <a href="#">Example Link 1</a>
            <a href="#">Example Link 2</a>
            <a href="#">Example Link 3</a>
        </ResourceFooterLinkBlock>
    </div>
</ResourceFooter>
```
<!-- prettier-ignore-end -->
