Use the pagination component to allow users to move between multiple pages of content.

Pagination is often used when showing search results, archived content like news stories, or database records.

View the [Rivet documentation for Pagination](https://rivet.iu.edu/components/pagination/).

### Pagination Examples

<!-- prettier-ignore-start -->
```jsx
<Pagination>
    <PaginationItem
        ariaLabel="Page 1"
        onClick={(e)=>alert("Clicked Page 1")}
    >
        1
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 2"
        disabled
    >
        2
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 3"
        current
    >
        3
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 4"
        url="#page4"
    >
        4
    </PaginationItem>
</Pagination>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Pagination>
    <PaginationItem.First/>
    <PaginationItem.Previous />
    <PaginationItem
        ariaLabel="Page 1"
        onClick={(e)=>alert("Clicked Page 1")}
    >
        1
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 2"
        disabled
    >
        2
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 3"
        current
    >
        3
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 4"
        url="#page4"
    >
        4
    </PaginationItem>
    <PaginationItem.Next />
    <PaginationItem.Last />
</Pagination>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Pagination>
    <PaginationItem
        ariaLabel="Go to first page"
    >
        First
    </PaginationItem>
    <PaginationItem
        ariaLabel="Go to previous page"
        className="rvt-m-lr-sm"
    >
        <rvt-icon className="rvt-m-right-xs" name="previous" />
        Back
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 1"
        onClick={(e)=>alert("Clicked Page 1")}
    >
        1
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 2"
        disabled
    >
        2
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 3"
        current
    >
        3
    </PaginationItem>
    <PaginationItem
        ariaLabel="Page 4"
        url="#page4"
    >
        4
    </PaginationItem>
    <PaginationItem
        ariaLabel="Go to next page"
        className="rvt-m-lr-sm"
    >
        Next
        <rvt-icon className="rvt-m-left-xs" name="next" />
    </PaginationItem>
    <PaginationItem
        ariaLabel="Go to last page"
    >
        Last
    </PaginationItem>
</Pagination>
```
<!-- prettier-ignore-end -->
