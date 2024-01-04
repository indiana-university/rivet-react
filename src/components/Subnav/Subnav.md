Use the subnav to provide additional navigation outside the main header or sidenav.

View the [Rivet documentation for Call to action](https://rivet.uits.iu.edu/components/Subnav/).

### Subnav Examples

<!-- prettier-ignore-start -->
```jsx
<Subnav label="">
    <Subnav.Item url="#">Link 1</Subnav.Item>
    <Subnav.Item current url="#" >
        <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 5a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3H6Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H5v-2Z"></path></svg>
        <span className="rvt-m-left-xs">Link 2</span>
    </Subnav.Item>
    <Subnav.Item>
        <a href="#0">
            Link 3
        </a>
    </Subnav.Item>
</Subnav>
```
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
```jsx
<Subnav label="">
    <Subnav.Item>
        <button onClick={() => {}} variant="plain">
            Link 1
        </button>
    </Subnav.Item>
    <Subnav.Item>
        <button aria-current onClick={() => {}} variant="plain">
            <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16"><path d="M8 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM6 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 5a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3H6Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H5v-2Z"></path></svg>
            <span className="rvt-m-left-xs">Link 2</span>
        </button>
    </Subnav.Item>
    <Subnav.Item>
        <button onClick={() => {}} variant="plain">
            Link 3
        </button>
    </Subnav.Item>
</Subnav>
```
<!-- prettier-ignore-end -->
