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
| children  | any    |                  | The display for the item                                 |
| current   | bool   |                  | Whether this item is the current page                    |
| disabled  | bool   | false            | Whether the navigation item is disabled                  |
| id        | string | Rivet.shortuid() | A unique identifier                                      |
| onClick   | func   | Function         | A function to call when the item is clicked              |

#### Pagination.First

A wrapper for Pagination.Item that uses `<Icon name="first" />` for its children.

#### Pagination.Previous

A wrapper for Pagination.Item that uses `<Icon name="previous" />` for its children.

#### Pagination.Next

A wrapper for Pagination.Item that uses `<Icon name="next" />` for its children.

#### Pagination.Last

A wrapper for Pagination.Item that uses `<Icon name="last" />` for its children.

### Pagination Examples

<!-- prettier-ignore-start -->
```jsx
<Pagination>
    <Pagination.First />
    <Pagination.Previous />
    <Pagination.Item>1</Pagination.Item>
    <Pagination.Item>2</Pagination.Item>
    <Pagination.Item current>3</Pagination.Item>
    <Pagination.Item>4</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
</Pagination>
```
<!-- prettier-ignore-end -->
