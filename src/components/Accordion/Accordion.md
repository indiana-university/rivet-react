Use the accordion component to group content into sections that can be opened and closed.

An accordion can be useful when there are several pieces of content related to a topic but the user only needs a few of them. Frequently asked questions (FAQs) are often formatted using accordions.

View the [Rivet documentation for Accordion](https://rivet.uits.iu.edu/components/Accordion/).

### Accordion Examples

<!-- prettier-ignore-start -->
```jsx
<Accordion id="test1">
    <Accordion.Panel title="Section One">
        <p>Some content text</p>
    </Accordion.Panel>
    <Accordion.Panel title="Section Two">
        <p>Some content text</p>
    </Accordion.Panel>
    <Accordion.Panel title="Section Three">
        <p>Some content text</p>
    </Accordion.Panel>
</Accordion>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Accordion id="test1" initial="1" iconClosed={<Icon name="caret-down" />} iconOpened={<Icon name="toggle-close" />}>
    <Accordion.Panel title="Section One">
        <p>Some content text</p>
    </Accordion.Panel>
    <Accordion.Panel title="Section Two">
        <p>Panel starts open as indicated by initial property.</p>
        <p>Additionally the icons in the headers are set in the propertys rather than the default option</p>
    </Accordion.Panel>
    <Accordion.Panel title="Section Three">
        <p>Some content text</p>
    </Accordion.Panel>
</Accordion>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Accordion id="test1" initial="all">
    <Accordion.Panel title="Section One">
        <p>Some content text</p>
    </Accordion.Panel>
    <Accordion.Panel title="Section Two">
        <p>Some content text</p>
    </Accordion.Panel>
    <Accordion.Panel title="Section Three">
        <p>Some content text</p>
    </Accordion.Panel>
</Accordion>
```
<!-- prettier-ignore-end -->
