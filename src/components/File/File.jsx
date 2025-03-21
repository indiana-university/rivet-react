/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import * as Rivet from "../util/Rivet";
import { useReducer } from "react";

import "rivet-icons/dist/file.js";

const classPrefix = "rvt-file";

const handleFileChange = (onChange, forceUpdate) => (changeEvent) => {
  if (onChange) {
    onChange(changeEvent);
  }
  forceUpdate();
};

const File = ({
  className,
  id = Rivet.shortuid(),
  innerRef,
  label,
  multiple,
  onChange,
  secondary,
  ...attrs
}) => {
  // forceUpdate is used to force a rerender when the form is reset, which React won't
  // do automatically since the HTML markup returned is not changing after the reset event
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const fileInput = innerRef ? React.useRef(innerRef) : React.useRef(null);

  let form = fileInput.current?.form;

  if (form) {
    form.onreset = () => {
      fileInput.current.value = null;
      forceUpdate();
    };
  }

  let finalLabel = label;
  if (!finalLabel) {
    finalLabel = multiple ? "Upload multiple files" : "Upload a file";
  }

  // determine the description based on fileInput.current.files
  let description = multiple ? "No files selected" : "No file selected";
  if (fileInput.current?.files.length) {
    description =
      fileInput.current.files.length > 1
        ? `${fileInput.current.files.length} files selected`
        : fileInput.current.files[0].name;
  }

  return (
    <div
      className={classNames(classPrefix, className)}
      data-rvt-file-input={id}
    >
      <input
        onInput={handleFileChange(onChange, forceUpdate)}
        {...attrs}
        ref={fileInput}
        type="file"
        id={id}
        multiple={multiple}
        aria-describedby={id + "-file-description"}
      />
      <label
        htmlFor={id}
        className={classNames(
          "rvt-button",
          secondary && "rvt-button--secondary",
        )}
      >
        <span>{finalLabel}</span>
        <rvt-icon name="file" />
      </label>
      <div className={`${classPrefix}__preview`} id={id + "-file-description"}>
        {description}
      </div>
    </div>
  );
};

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
    // used for testing
    PropTypes.object,
  ]),
  /** The text to display on the file selection button, by default this is 'Upload multiple files' for multiple selection component or 'Upload a file' */
  label: PropTypes.node,
  /** Whether to allow multiple files to be selected */
  multiple: PropTypes.bool,
  /** custom behavior when the file selection changes */
  onChange: PropTypes.func,
  /** Whether to use secondary styling for the file selection button */
  secondary: PropTypes.bool,
};

export default File;
