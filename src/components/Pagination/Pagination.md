Use the pagination component to allow users to move between multiple pages of content.

Pagination is often used when showing search results, archived content like news stories, or database records.

View the [Rivet documentation for Pagination](https://rivet.iu.edu/components/pagination/).

### Sub-components

#### Pagination.Item

An item in the pagination list

##### Props

| Prop name | Type   | Default          | Description                                              |
| --------- | ------ | ---------------- | -------------------------------------------------------- |
| ariaLabel | string |                  | A accessible label to use when using icons in navigation |
| current   | bool   |                  | Whether this item is the current page                    |
| disabled  | bool   | false            | Whether the navigation item is disabled                  |
| id        | string | Rivet.shortuid() | A unique identifier                                      |
| onClick   | func   | Function         | A function to call when the item is clicked              |

### Pagination Examples

<!-- prettier-ignore-start -->
```jsx
<Pagination>
    <PaginationItem>1</PaginationItem>
    <PaginationItem>2</PaginationItem>
    <PaginationItem current>3</PaginationItem>
    <PaginationItem>4</PaginationItem>
</Pagination>
```
<!-- prettier-ignore-end -->
