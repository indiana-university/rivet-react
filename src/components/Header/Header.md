The `Header` provides consistent branding in a condensed space. It replaces 
the common text “Indiana University” with a more useful link to your application’s 
default view. The base header is the bare minimum version of the header that must 
be included in your application.

View the [Rivet documentation for Header](https://rivet.uits.iu.edu/components/navigation/header/).


```jsx
<Header title="Application Title" />
```

The `HeaderIdentity` adds a username, or username and avatar. On mobile this item 
collapses into the side menu above all other options.

```jsx 
<Header title="Application Title">
    <HeaderIdentity avatar="RS" username="rswanson" onLogout={() => console.log('Logout!')} />
</Header>
```

The `HeaderNavigation` supports internal app navigation, either as individual links or as 
dropdowns via the use of `HeaderMenu`. The `HeaderIdentity` can take individual user tasks 
as child elements. On mobile these navigation elements will be rendered as an accordion (collapse).

```jsx 
<Header title="Application Title">
    <HeaderNavigation>
        <a href="#">Nav one</a>
        <HeaderMenu label="Nav two">
            <a href="#">Item one</a>
            <a href="#">Item two</a>
            <a href="#">Item three</a>
            <a href="#">Item four</a>
        </HeaderMenu>
        <a href="#" aria-current="page">Nav three</a>
        <HeaderMenu label="Nav four">
            <a href="#">Item one</a>
            <a href="#">Item two</a>
            <a href="#">Item three</a>
            <a href="#">Item four</a>
        </HeaderMenu>
    </HeaderNavigation>
    <HeaderIdentity avatar="RS" username="rswanson" onLogout={() => console.log('Logout!')}>
        <a href="#">Account settings</a>
        <a href="#">Admin task one</a>
        <a href="#">Admin task two</a>
    </HeaderIdentity>
</Header>
```
