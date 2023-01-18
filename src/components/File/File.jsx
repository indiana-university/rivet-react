/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from "classnames";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useEffect } from "react";
import * as Rivet from "../util/Rivet";
import Icon from "../util/RivetIcons";

const classPrefix = "rvt-file";

function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

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
  const forceUpdate = useForceUpdate();
  const fileInput = innerRef || React.useRef();

  useEffect(() => {
    const form = fileInput.current && fileInput.current.form;
    console.log({ form });
    if (form) {
      form.onreset = (e) => {
        forceUpdate();
      };
    }
  });

  let finalLabel = label;
  if (!finalLabel) {
    finalLabel = multiple ? "Upload multiple files" : "Upload a file";
  }

  let description = multiple ? "No files selected" : "No file selected";
  console.log("files length", fileInput.current?.files);

  if (fileInput.current?.files.length) {
    console.log("updating description", fileInput.current);
    description =
      fileInput.current.files.length > 1
        ? `${fileInput.current.files.length} files selected`
        : fileInput.current.files[0].name;
  }

  console.log("rendering", description, fileInput);

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
  label: PropTypes.string,
  /** Whether to allow multiple files to be selected */
  multiple: PropTypes.bool,
  /** custom behavior when the file selection changes */
  onChange: PropTypes.func,
  /** Whether to use secondary styling for the file selection button */
  secondary: PropTypes.bool,
};

export default File;
