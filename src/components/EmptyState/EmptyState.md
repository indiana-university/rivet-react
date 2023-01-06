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
        <a href="#" class="rvt-button rvt-button--plain">Read the documentation</a>    
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
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path fill="currentColor" d="M14.57,12.06,13,9.7V6A5,5,0,0,0,3,6V9.7L1.43,12.06a1.25,1.25,0,0,0,1,1.94H6a2,2,0,0,0,4,0h3.53a1.25,1.25,0,0,0,1-1.94ZM8,12H3.87L5,10.3V6a3,3,0,0,1,6,0v4.3L12.13,12Z" />
        </svg>        
        </div>
        <p>There's nothing here yet.</p>
    </EmptyState.Content>
    <EmptyState.Actions>
        <Button type="button">Create your first item</Button>
        <a href="#" className="rvt-button rvt-button--plain">Read the documentation</a>    
    </EmptyState.Actions>
</EmptyState>
```
<!-- prettier-ignore-end -->
