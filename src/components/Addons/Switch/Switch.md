<div class="rvt-alert rvt-alert--error rvt-m-bottom-lg" role="alert" aria-labelledby="error-alert-title">
    <span class="rvt-alert__title" id="error-alert-title">Add-on Component</span>
    <p class="rvt-alert__message">Add-on components require additional modules to be installed before they can be used and are imported in a different fashion.</p>
</div>

### Installation and usage

This component is a Rivet add-on so it requires an additional NPM module to be installed before it can be used.  The following command can be used to install the extra dependency:

```shell
npm install rivet-switch
```

 Or with yarn,

```shell
yarn add rivet-switch
```

After the dependency has been added you may import the component through the "addons" submodule:

```typescript static
import { Switch } from 'rivet-react/addons';
```

### Default switches

```jsx
<div className="rvt-display-flex rvt-vertical-center rvt-p-top-md rvt-p-bottom-md">
  <span className="rvt-m-right-sm"><strong>Email</strong> notification</span>
  <Switch defaultValue="off" />
</div>


<div className="rvt-display-flex rvt-vertical-center rvt-border-top rvt-p-top-md rvt-p-bottom-md">
  <span className="rvt-m-right-sm"><strong>Two-factor</strong> authenticaton <a href="#">What is this?</a></span>
  <Switch variant="success" />
</div>

<div className="rvt-display-flex rvt-vertical-center rvt-border-top rvt-p-top-md rvt-p-bottom-md">
  <span className="rvt-m-right-sm">Use my location</span>
  <Switch variant="danger" />
</div>
```

### Small switches

```jsx
<div className="rvt-display-flex rvt-vertical-center rvt-p-top-md rvt-p-bottom-md">
  <span className="rvt-m-right-sm"><strong>Small email</strong> notification</span>
  <Switch size="small" />
</div>


<div className="rvt-display-flex rvt-vertical-center rvt-border-top rvt-p-top-md rvt-p-bottom-md">
  <span className="rvt-m-right-sm"><strong>Two-factor</strong> authenticaton <a href="#">What is this?</a></span>
  <Switch variant="success" size="small" />
</div>

<div className="rvt-display-flex rvt-vertical-center rvt-border-top rvt-p-top-md rvt-p-bottom-md">
  <span className="rvt-m-right-sm">Use my location</span>
  <Switch variant="danger" size="small" />
</div>
```
