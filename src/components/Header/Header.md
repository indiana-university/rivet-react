```jsx
<Header title="Application Title" />
```

```jsx
<Header title="Application Title">
    <Header.Identity avatar="RS" username="rswanson" onLogout={() => console.log('Logout!')} />
</Header>
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
    
    <Header.Identity avatar="RS" username="rswanson" onLogout={() => console.log('Logout!')}>
        <a href="#">Account settings</a>
        <a href="#">Admin task one</a>
        <a href="#">Admin task two</a>
    </Header.Identity>
</Header>
```
