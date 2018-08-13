import * as classNames from 'classnames';
import * as React from 'react';
import { rivetize, shortuid } from '../util/Rivet';

interface FileProps {
    fileName?: string;
    label?: string;
}

const initialState = { files: '' }
type FileState = Readonly<typeof initialState>

const FileInput: React.SFC<FileProps & React.HTMLAttributes<HTMLInputElement>> = ({ className, fileName, id = shortuid(), label = 'Upload a file', ...attrs }) => (
    <div className={classNames('rvt-file', className)}>
        <input {...attrs} type="file" id={id} aria-describedby={id + "-file-description"} />
        <label htmlFor={id} className="rvt-button">
            <span>{label}</span>
            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M10.41,1H3.5A1.3,1.3,0,0,0,2.2,2.3V13.7A1.3,1.3,0,0,0,3.5,15h9a1.3,1.3,0,0,0,1.3-1.3V4.39ZM11.8,5.21V6H9.25V3h.34ZM4.2,13V3h3V6.75A1.25,1.25,0,0,0,8.5,8h3.3v5Z" />
            </svg>
        </label>
        <div className="rvt-file__preview" id={id + "-file-description"}>
            { fileName ? <span>{fileName}</span> : 'No file selected' }
        </div>
    </div>
);
FileInput.displayName = 'FileInput';

class File extends React.PureComponent<FileProps & React.HTMLAttributes<HTMLInputElement>, FileState> {

    public readonly state: FileState = initialState;

    public render() {
        return (
            <FileInput {...this.props} fileName={this.state.files} onChange={this.handleFileChange} />
        )
    }

    private handleFileChange = (changeEvent) => {
        // changeEvent.target.files is a FileList which is not iterable, though a for..of loop works
        const files: string[] = [];
        for(const file of changeEvent.target.files) {
            files.push(file.name);
        }
        this.setState({ files: files.join(', ') });
        if (this.props.onChange){
            this.props.onChange(changeEvent);
        }
    }

}

export default rivetize(File);
export { File as UnwrappedFile, FileInput, FileState };
