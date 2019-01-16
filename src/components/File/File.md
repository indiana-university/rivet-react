A custom HTML file input that is styled to look like Rivet buttons

View the [Rivet documentation for File Input](https://rivet.uits.iu.edu/components/forms/file-input/).

### Custom file input example

```jsx
<File name="demo" />
```

### Passing in props instead of using internal state to track file name

```jsx
class FileProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: ''
    };
    this.fieldName = 'file-demo-2';
    this.onChange = this.onChange.bind(this);
    this.clearFile = this.clearFile.bind(this);
  }

  clearFile(e) {
    // update dom
    const element = document.querySelector(`[name="${this.fieldName}"]`);
    element.value = '';
    /// update state
    this.setState({
      files: ''
    });
  }

  onChange(e) {
    const files = [];
    // e.target.files is not a real array, so cannot use forEach, map, etc. 
    for (let i = 0; i < e.target.files.length; i++) {
      files.push(e.target.files[i].name);
    }
    this.setState({
      files: files.join(', ')
    });    
  }

  render() {
    return (
      <div>
        <File name={this.fieldName} files={this.state.files} onChange={this.onChange} />
        <br />
        <Button onClick={this.clearFile}>Clear file</Button>
      </div>
    );
  }
}

<FileProps />

```
