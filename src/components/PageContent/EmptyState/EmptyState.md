Use the empty state component as a placeholder when there is no content to show the user. You can also suggest first steps the user might take, such as creating their first piece of content or reading your application’s documentation.

Users often encounter empty states when they are using a web application for the first time and have not yet saved any data or received any submissions.

View the [Rivet documentation for EmptyState](https://rivet.iu.edu/components/empty-state/).

### EmptyState examples

<!-- prettier-ignore-start -->
```jsx
<EmptyState>
    <EmptyState.Content>
        <p>There's nothing here yet.</p>
    </EmptyState.Content>
</EmptyState>
```
<!-- prettier-ignore-end -->

### EmptyState with Actions

<!-- prettier-ignore-start -->
```jsx
<EmptyState>
    <EmptyState.Content>
        <p>There's nothing here yet.</p>
    </EmptyState.Content>
    <EmptyState.Actions>
        <Button type="button">Create your first item</Button>
        <Button variant="plain">Read the documentation</Button>
    </EmptyState.Actions>
</EmptyState>
```
<!-- prettier-ignore-end -->

### EmptyState with Actions and Icon

<!-- prettier-ignore-start -->
```jsx
<EmptyState>
    <EmptyState.Content>
        <div className="rvt-p-all-md rvt-m-bottom-md rvt-bg-black-100 rvt-inline-flex rvt-border-radius-circle">
            <rvt-icon name="bell" />       
        </div>
        <p>There's nothing here yet.</p>
    </EmptyState.Content>
    <EmptyState.Actions>
        <Button type="button">Create your first item</Button>
        <Button variant="plain">Read the documentation</Button>
    </EmptyState.Actions>
</EmptyState>
```
<!-- prettier-ignore-end -->
