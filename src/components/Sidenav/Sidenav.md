Use the sidenav component to add a vertical list of navigation links to a sidebar.

Sidenavs can contain dropdowns that reveal nested links.

View the [Rivet documentation for Side Nav](https://rivet.iu.edu/components/sidenav/).

### Sidenav Examples

<!-- prettier-ignore-start -->
```jsx
<Sidenav
    id="sidenav-1"
    label="Side Nav - All Links"
>
    <Sidenav.Item url="#">Link 1</Sidenav.Item>
    <Sidenav.Item current url="#">Link 2</Sidenav.Item>
    <Sidenav.Item url="#">Link 3</Sidenav.Item>
    <Sidenav.Item url="#" onClick={e => alert('clicked')}>Link 4 with onClick</Sidenav.Item>
</Sidenav>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Sidenav
    id="sidenav-1"
    label="Side Nav - All Buttons"
>
    <Sidenav.Item>
        <Button className="rvt-sidenav__link" variant="plain">
            Link 1
        </Button>
    </Sidenav.Item>
    <Sidenav.Item>
        <Button className="rvt-sidenav__link" variant="plain">
            Link 2
        </Button>
    </Sidenav.Item>
    <Sidenav.Item>
        <Button className="rvt-sidenav__link" variant="plain">
            Link 3
        </Button>
    </Sidenav.Item>
</Sidenav>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Sidenav
    id="sidenav-1"
    label="Side Nav - Sub Menu"
>
    <Sidenav.Item url="#">Link 1</Sidenav.Item>
    <Sidenav.Menu label="Menu 1" startOpen>
        <Sidenav.Item url="#">Sub 1</Sidenav.Item>
        <Sidenav.Item url="#">Sub 2</Sidenav.Item>
        <Sidenav.Item url="#">Sub 3</Sidenav.Item>
    </Sidenav.Menu>
    <Sidenav.Menu label="Menu 2">
        <Sidenav.Item url="#">Sub 1</Sidenav.Item>
        <Sidenav.Item url="#">Sub 2</Sidenav.Item>
        <Sidenav.Menu label="SubMenu 1" startOpen>
            <Sidenav.Item url="#">Sub Sub 1</Sidenav.Item>
            <Sidenav.Item current url="#">Sub Sub 2</Sidenav.Item>
            <Sidenav.Item url="#">Sub Sub 3</Sidenav.Item>
        </Sidenav.Menu>
    </Sidenav.Menu>
</Sidenav>
```
<!-- prettier-ignore-end -->
