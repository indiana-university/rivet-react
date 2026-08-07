Use the link hub component to show a list of links with optional descriptions.

Link hubs are often used on website home pages, section index pages, and landing pages to guide the user toward resources related to a single topic.

View the [Rivet documentation for Link-hub](https://rivet.uits.iu.edu/components/link-hub/).

### Standard Link Hub Example

<!-- prettier-ignore-start -->
```jsx
<LinkHub>
    <LinkHub.Item label="Link 1" url="#" />
    <LinkHub.Item label="Link 2" url="#">Link with an optional description</LinkHub.Item>
    <LinkHub.Item label="Link 3" url="#" />
    <LinkHub.Item label="Link 4" url="#">Another link with an optional description</LinkHub.Item>
</LinkHub>
```
<!-- prettier-ignore-end -->

### Stacked Link Hub Example

<!-- prettier-ignore-start -->
```jsx
<LinkHub variant="stacked">
    <LinkHub.Item label="Link 1" url="#" />
    <LinkHub.Item label="Link 2" url="#">Link with an optional description</LinkHub.Item>
    <LinkHub.Item label="Link 3" url="#" />
    <LinkHub.Item label="Link 4" url="#">Another link with an optional description</LinkHub.Item>
</LinkHub>
```
<!-- prettier-ignore-end -->
