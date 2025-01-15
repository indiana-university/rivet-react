Use the tabs component to allow users to switch between related groups of content without having to leave the page.

View the [Rivet documentation for Tabs](https://rivet.uits.iu.edu/components/tabs/).

### Tabs Examples
<!-- prettier-ignore-start -->
```jsx
<Tabs label="Basic Tab Example">
    <Tabs.Panel title="Tab One">
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab One Content</span>
        <p>If initialTab is not set initial tab displayed is the first</p>
    </Tabs.Panel>
    <Tabs.Panel title="Tab Two">
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab Two Content</span>
        <p>Some content text</p>
    </Tabs.Panel>
    <Tabs.Panel title="Tab Three">
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab Three Content</span>
        <p>Some content text</p>
    </Tabs.Panel>
</Tabs>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Tabs label="Example of default " initialTab={1}>
    <Tabs.Panel title="Tab One">
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab One Content</span>
        <p>Some content text</p>
    </Tabs.Panel>
    <Tabs.Panel title="Tab Two">
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab Two Content</span>
        <p>If initialTab is set the initial tab displayed based on the index provided to initialTab</p>
    </Tabs.Panel>
    <Tabs.Panel title="Tab Three">
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab Three Content</span>
        <p>Some content text</p>
    </Tabs.Panel>
</Tabs>
```
<!-- prettier-ignore-end -->

