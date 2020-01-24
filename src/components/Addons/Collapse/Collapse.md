<div class="rvt-alert rvt-alert--error rvt-m-bottom-lg" role="alert" aria-labelledby="error-alert-title">
    <span class="rvt-alert__title" id="error-alert-title">Add-on Component</span>
    <p class="rvt-alert__message">Add-on components require additional modules to be installed before they can be used and are imported in a different fashion.</p>
</div>

### Installation and usage

This component is a Rivet add-on so it requires an additional NPM module to be installed before it can be used.  The following command can be used to install the extra dependency:

```shell
npm install rivet-collapsible
```

 Or with yarn,

```shell
yarn add rivet-collapsible
```

After the dependency has been added you may import the component through the `Addons` submodule:

```javascript static
import { Collapse } from 'rivet-react/Addons';
```

### Default collapsible

```jsx
<Collapse title="Default Rivet collapsible">
  <p>
    Nostrum fugit a natus. Corporis voluptates ut odio omnis nobis voluptas. Est dolor et eum quis deleniti explicabo autem est magnam. Unde expedita ab quia maxime quia. Qui voluptas distinctio ipsa laborum laboriosam.
  </p>
</Collapse>
```

### Collapsible panel

```jsx
<Collapse title="Default Rivet collapsible" variant="panel">
  <p>
    Nostrum fugit a natus. Corporis voluptates ut odio omnis nobis voluptas. Est dolor et eum quis deleniti explicabo autem est magnam. Unde expedita ab quia maxime quia. Qui voluptas distinctio ipsa laborum laboriosam.
  </p>
</Collapse>
```
