```jsx
<Header title="Application Title" />
```

```jsx
<Header title="Application Title">
    <Header.Navigation>
        <a href="#">Nav one</a>
        <Dropdown label="Nav two" variant="navigation">
            <a href="#">Item one</a>
            <a href="#">Item two</a>
            <a href="#">Item three</a>
            <a href="#">Item four</a>
        </Dropdown>
        <a href="#" aria-current="page">Nav three</a>
        <Dropdown label="Nav four" variant="navigation">
            <a href="#">Item one</a>
            <a href="#">Item two</a>
            <a href="#">Item three</a>
            <a href="#">Item four</a>
        </Dropdown>
    </Header.Navigation>
</Header>
```
