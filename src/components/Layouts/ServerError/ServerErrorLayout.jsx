/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { Col, Container, Row } from "../../Grid/index.jsx";
import * as Rivet from "../../util/Rivet.jsx";
import PropTypes from "prop-types";
import "rivet-stickers/dist/browser-magnifying-glass.js";

const ServerErrorLayout = ({ errorMessage, children }) => {
  return (
    <React.Fragment>
      <div className="rvt-bg-black-000">
        <Container size="sm" className="rvt-p-all-xxl">
          <Row>
            <Col columnWidth={9}>
              <p className="rvt-ts-xs rvt-color-crimson rvt-text-uppercase rvt-m-top-xs rvt-m-bottom-none rvt-p-all-none">
                HTTP 500
              </p>
              <h1 className="rvt-m-bottom-md title">Server error</h1>
              <p>{errorMessage}</p>
            </Col>
            <Col
              className="rvt-content-center rvt-hide-md-down"
              columnWidth={3}
            >
              <rvt-sticker name="browser-magnifying-glass" size="xl" />
            </Col>
          </Row>
        </Container>
      </div>
      {children}
    </React.Fragment>
  );
};

ServerErrorLayout.propTypes = {
  /** An error message for server error */
  errorMessage: PropTypes.string.isRequired,
  /** Content to display below the server error layout */
  children: PropTypes.node,
};

ServerErrorLayout.displayName = "ServerErrorLayout";
export default Rivet.rivetize(ServerErrorLayout);
