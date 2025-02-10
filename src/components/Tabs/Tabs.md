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

#### Example of initial tab set

<!-- prettier-ignore-start -->
```jsx
<Tabs label="Example of default" initialTab={1}>
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

#### Example of Complex titles

<!-- prettier-ignore-start -->
```jsx
<Tabs label="Example of Complex titles" initialTab={1}>
    <Tabs.Panel title={<><div>Tab One</div><div>Sub 1</div></>}>
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab One Content</span>
        <p>Some content text</p>
    </Tabs.Panel>
    <Tabs.Panel title={<><div>Tab Two</div></>}>
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab Two Content</span>
        <p>If initialTab is set the initial tab displayed based on the index provided to initialTab</p>
    </Tabs.Panel>
    <Tabs.Panel title={<><div>Tab Three</div><div>Sub 3</div></>}>
        <span class="rvt-ts-23 rvt-text-bold">Title of the Tab Three Content</span>
        <p>Some content text</p>
    </Tabs.Panel>
</Tabs>
```
<!-- prettier-ignore-end -->

#### Tabs with callback on change

<!-- prettier-ignore-start -->
```jsx
<Tabs id="tabGroup1" label="Tabs with callback on change" onChange={(e, index, id) => alert(`Change to tab ${index} of tabs ${id}`)}>
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
