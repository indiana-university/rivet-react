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
        <Header.Menu label="Nav two">
            <a href="#">Item one</a>
            <a href="#">Item two</a>
            <a href="#">Item three</a>
            <a href="#">Item four</a>
        </Header.Menu>
        <a href="#" aria-current="page">Nav three</a>
        <Header.Menu label="Nav four">
            <a href="#">Item one</a>
            <a href="#">Item two</a>
            <a href="#">Item three</a>
            <a href="#">Item four</a>
        </Header.Menu>
    </Header.Navigation>
    
    <Header.Identity avatar="RS" username="rswanson" onLogout={() => console.log('Logout!')}>
        <a href="#">Account settings</a>
        <a href="#">Admin task one</a>
        <a href="#">Admin task two</a>
    </Header.Identity>
</Header>
```
