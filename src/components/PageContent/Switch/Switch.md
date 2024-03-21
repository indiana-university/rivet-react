Use the switch component to allow users to toggle a persistent configuration option between “on” and “off” states.

View the [Rivet documentation for Switch](https://rivet.iu.edu/components/switch/).

### Switch Examples

<!-- prettier-ignore-start -->
```jsx
  <div class="rvt-flex rvt-items-center rvt-p-tb-md">
    <p className="rvt-m-right-md">Default Switch</p>
    <Switch
      label="Default Switch"
    />
  </div>
  <div class="rvt-flex rvt-items-center rvt-p-tb-md">
    <p className="rvt-m-right-md">Switch with callback on click</p>
    <Switch
      label="Default Switch"
      onClick={(v, e) => window.alert("Switched toggled to " + v)}
    />
  </div>
  <div class="rvt-flex rvt-items-center rvt-p-tb-md">
    <p className="rvt-m-right-md">Start with Switch On</p>
    <Switch
      label="Start with Switch On"
      startOn
    />
  </div>
```

### Switch Variant Examples

<!-- prettier-ignore-start -->
```jsx
  <div class="rvt-flex rvt-items-center rvt-p-tb-md">
    <p className="rvt-m-right-md">Critical/Danger Switch</p>
    <Switch
      label="Critical/Danger Switch"
      startOn
      variant="danger"
    />
  </div>
  <div class="rvt-flex rvt-items-center rvt-p-tb-md">
    <p className="rvt-m-right-md">Small Switch</p>
    <Switch
      label="Small Switch"
      variant="small"
    />
  </div>
  <div class="rvt-flex rvt-items-center rvt-p-tb-md">
    <p className="rvt-m-right-md">Critical/Danger Small Switch</p>
    <Switch
      label="Critical/Danger Small Switch"
      startOn
      variant={["danger", "small"]}
    />
  </div>
```