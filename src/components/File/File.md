A custom HTML file input that is styled to look like Rivet buttons

View the [Rivet documentation for File Input](https://rivet.uits.iu.edu/components/forms/file-input/).

### Custom file input example

```jsx
<File name="demo" />
```

### Clearing a file input programattically

```jsx
class FileProps extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.clearFile = this.clearFile.bind(this);
  }

  clearFile(e) {
    e.preventDefault();
    this.formRef.current.reset();
  }

  render() {
    return (
      <form ref={this.formRef}>
        <File name='file-upload-demo-2' />
        <br />
        <Button type="button" onClick={this.clearFile}>Clear file</Button>
      </form>
    );
  }
}

<FileProps />

```
