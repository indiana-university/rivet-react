/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import Icon from "../util/RivetIcons";

const classPrefix = "rvt-file";

class File extends React.Component {
  fileInput = null;

  constructor(props) {
    super(props);
    this.fileInput = props.innerRef ? props.innerRef : React.createRef();
  }

  componentDidMount() {
    const form = this.fileInput.current && this.fileInput.current.form;
    if (form) {
      form.onreset = (e) => {
        this.forceUpdate();
      };
    }
  }

  render() {
    const {
      className,
      id = Rivet.shortuid(),
      innerRef,
      label,
      multiple,
      secondary,
      ...attrs
    } = this.props;

    let finalLabel = label;
    if (!finalLabel) {
      finalLabel = multiple ? "Upload multiple files" : "Upload a file";
    }

    let description = multiple ? "No files selected" : "No file selected";
    if (
      this.fileInput.current &&
      this.fileInput.current.files &&
      this.fileInput.current.files.length
    ) {
      description =
        this.fileInput.current.files.length > 1
          ? `${this.fileInput.current.files.length} files selected`
          : this.fileInput.current.files[0];
    }

    return (
      <div
        className={classNames(classPrefix, className)}
        data-rvt-file-input={id}
      >
        <input
          onInput={this.handleFileChange}
          {...attrs}
          ref={this.fileInput}
          type="file"
          id={id}
          multiple={multiple}
          data-rvt-file-input-button={id}
          aria-describedby={id + "-file-description"}
        />
        <label
          htmlFor={id}
          className={classNames(
            "rvt-button",
            secondary && "rvt-button--secondary"
          )}
        >
          <span>{finalLabel}</span>
          <Icon name="file" />
        </label>
        <div
          className={`${classPrefix}__preview`}
          id={id + "-file-description"}
        >
          {description}
        </div>
      </div>
    );
  }

  handleFileChange = (changeEvent) => {
    if (this.props.onChange) {
      this.props.onChange(changeEvent);
    }
    this.forceUpdate();
  };
}

File.displayName = "File";
File.propTypes = {
  /** A unique identifier for the alert */
  id: PropTypes.string,
  /** A ref to the input element, rather than using one generated within the component */
  innerRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  /** The text to display on the file selection button, by default this is 'Upload multiple files' for multiple selection component or 'Upload a file' */
  label: PropTypes.string,
  /** Whether to allow multiple files to be selected */
  multiple: PropTypes.bool,
  /** Whether to use secondary styling for the file selection button */
  secondary: PropTypes.bool,
};

export default Rivet.rivetize(File);
