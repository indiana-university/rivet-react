HeaderNavigation is used to arrange navigation elements for your application. Navigation is supported as individual links, or as dropdowns via the use of [HeaderMenu](#/Navigation?id=headermenu) . On mobile these navigation elements will be rendered as an accordion (collapse).

To indicate which item inside HeaderNavigation is currently active, wrap it in a `<li>` element with the class `rvt-header-menu__item--current`. Doing this also applies the `aria-current="page"` attribute on the associated anchor element, to meet accessibility standards.

See the [Header](#/Navigation?id=header) component for usage examples.
