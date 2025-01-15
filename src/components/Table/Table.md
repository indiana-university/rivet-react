Use the table component to present tabular data in rows and columns.

View the [Rivet documentation for Tables](https://rivet.uits.iu.edu/components/table/).

### Example Table

<!-- prettier-ignore-start -->
```jsx
<Table>
  <caption class="rvt-sr-only">Default table</caption>
  <thead>
    <tr>
      <th scope="col">Services</th>
      <th scope="col">Description</th>
      <th scope="col">URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">One.IU</th>
      <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you search for what you want to do, and click to launch it.</td>
      <td><a href="#">one.iu.edu</a></td>
    </tr>
    <tr>
      <th scope="row">Zoom</th>
      <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
      <td><a href="#">zoom.iu.edu</a></td>
    </tr>
    <tr>
      <th scope="row">Canvas</th>
      <td>Canvas is a learning management system developed by Instructure, Inc.</td>
      <td><a href="#">canvas.iu.edu</a></td>
    </tr>
  </tbody>
</Table>
```
<!-- prettier-ignore-end -->

### Responsive Table

Responsive tables are not "baked in" to `rivet-react`. In order to create a resposive table that scrolls horizontally on small screens, use the `Table` tag along with the [instructions for responsive tables](https://github.com/indiana-university/rivet-source/tree/2.0.0-master/src/components/table#responsive-table-wrapper).

<!-- prettier-ignore-start -->
```jsx
<div role="region" tabindex="0" class="rvt-table-responsive" aria-labelledyby="responsive-table">
  <Table>
    <caption id="responsive-table" class="rvt-sr-only">Responsive table examples</caption>
    <thead>
      <tr>
        <th scope="col">Services</th>
        <th scope="col">Description</th>
        <th scope="col">URL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">One.IU</th>
        <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you
          search for what you want to do, and click to launch it.</td>
        <td><a href="#">one.iu.edu</a></td>
      </tr>
      <tr>
        <th scope="row">Zoom</th>
        <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
        <td><a href="#">zoom.iu.edu</a></td>
      </tr>
      <tr>
        <th scope="row">Canvas</th>
        <td>Canvas is a learning management system developed by Instructure, Inc.</td>
        <td><a href="#">canvas.iu.edu</a></td>
      </tr>
    </tbody>
  </Table>
</div>
```
<!-- prettier-ignore-end -->

### Striped Table

<!-- prettier-ignore-start -->
```jsx
<Table variant="stripes">
    <caption class="rvt-sr-only">Striped table</caption>
    <thead>
        <tr>
            <th scope="col">Services</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you
                search for what you want to do, and click to launch it.</td>
            <td><a href="#">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</Table>
```
<!-- prettier-ignore-end -->

### Plain Table

<!-- prettier-ignore-start -->
```jsx
<Table variant="plain">
    <caption class="rvt-sr-only">Plain table</caption>
    <thead>
        <tr>
            <th scope="col">Services</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you
                search for what you want to do, and click to launch it.</td>
            <td><a href='#'>one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</Table>
```
<!-- prettier-ignore-end -->

### Table with Cell Borders

<!-- prettier-ignore-start -->
```jsx
<Table cells>
    <caption id="responsive-table" class="rvt-sr-only">Table with cell borders</caption>
    <thead>
        <tr>
            <th scope="col">Services</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you
                search for what you want to do, and click to launch it.</td>
            <td><a href="#">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</Table>
```
<!-- prettier-ignore-end -->

### Compact Table

<!-- prettier-ignore-start -->
```jsx
<Table compact>
    <caption id="responsive-table" class="rvt-sr-only">Compact table</caption>
    <thead>
        <tr>
            <th scope="col">Services</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">One.IU</th>
            <td>One.IU was created to bring a modern app store experience to finding what you need at IU. With One.IU, you
                search for what you want to do, and click to launch it.</td>
            <td><a href="#">one.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Zoom</th>
            <td>Zoom is a web collaboration tool available to all Indiana University students, faculty, and staff.</td>
            <td><a href="#">zoom.iu.edu</a></td>
        </tr>
        <tr>
            <th scope="row">Canvas</th>
            <td>Canvas is a learning management system developed by Instructure, Inc.</td>
            <td><a href="#">canvas.iu.edu</a></td>
        </tr>
    </tbody>
</Table>
```
<!-- prettier-ignore-end -->
