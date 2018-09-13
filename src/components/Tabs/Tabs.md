Use tabs to allow users to switch between logical chunks of content without having to leave the current page.

View the [Rivet documentation for Tabs](https://rivet.uits.iu.edu/components/page-content/tabs/).

### Default tabs example

```jsx
<Tabs>
  <Tab id="t-one" title="Tab one">
    <span class="rvt-ts-23 rvt-text-bold">Panel 1</span>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Tab>
  <Tab id="t-two" title="Tab two">
    <span class="rvt-ts-23 rvt-text-bold">Panel 2</span>
    <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Tab>
  <Tab id="t-three" title="Tab three">
    <span class="rvt-ts-23 rvt-text-bold">A grid inside a tab panel</span>
    <Row>
      <Col md={4}>
        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Col>
      <Col md={4}>
        <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Col>
    </Row>
  </Tab>
</Tabs>
```

### Fitted version

Applying the `fitted` variant will make the tabs take up equal amounts of the space of the tabs container.

```jsx
<Tabs variant="fitted">
  <Tab id="t-one" title="Tab one">
    <span class="rvt-ts-26 rvt-text-bold rvt-display-block">Sue’s Salads</span>
    <p>
        Panel 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Tab>
  <Tab id="t-two" title="Tab two">
    <span class="rvt-ts-26 rvt-text-bold rvt-display-block">JJ’s Diner</span>
    <p>
        Panel 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Tab>
  <Tab id="t-three" title="Tab three">
    <span class="rvt-ts-26 rvt-text-bold rvt-display-block">Food n’ Stuff</span>
    <p>
        Panel 3: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Tab>
</Tabs>
```

### Vertical Tabs

The `vertical` variant creates a set of tabs where the tab controls display in a vertical list on the left with the tab panels on the right.

```jsx
<Tabs variant="vertical">
  <Tab id="t-one" title="Tab one">
    <span class="rvt-ts-26 rvt-text-bold rvt-display-block">Paunch Burger</span>
    <p>
        Panel 1: Lorem ipsum dolor sit amet,
        <a href="#0">consectetur adipisicing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Tab>
  <Tab id="t-two" title="Tab two">
    <span class="rvt-ts-26 rvt-text-bold rvt-display-block">JJ’s Diner</span>
    <p>
        Panel 2: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Tab>
  <Tab id="t-three" title="Tab three">
    <Form label="Sue's Salads Takeout" labelVisibility="screen-reader-only">
      <Input type="text" name="name" id="name" label="Name" />
      <Select name="salads" id="salads" label="Salad type" margin={{top: 'md'}}>
        <option value="">Cobb</option>
        <option value="">Ceasar</option>
        <option value="">Wedge</option>
        <option value="">Big</option>
      </Select>
      <Textarea name="message" id="message" label="Message" margin={{top: 'md', bottom: 'md'}} />
      <ButtonGroup right>
        <Button type="submit" onClick={() => { console.log('Submit'); }}>Submit</Button>
        <Button variant="plain" onClick={() => { console.log('Cancel'); }}>Cancel</Button>
      </ButtonGroup>
    </Form>
  </Tab>
</Tabs>
```
