/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { Col, Container, Row } from "../../Grid/index.jsx";
import * as Rivet from "../../util/Rivet.jsx";
import PropTypes from "prop-types";
import "rivet-stickers/dist/badge-lock.js";

const AccessDeniedLayout = ({ errorMessage, children }) => {
  return (
    <React.Fragment>
      <div className="rvt-bg-black-000">
        <Container size="sm" className="rvt-p-all-xxl">
          <Row>
            <Col columnWidth={9}>
              <p className="rvt-ts-xs rvt-color-crimson rvt-text-uppercase rvt-m-top-xs rvt-m-bottom-none rvt-p-all-none">
                HTTP 401
              </p>
              <h1 className="rvt-m-bottom-md title">Access denied</h1>
              <p>{errorMessage}</p>
            </Col>
            <Col
              className="rvt-content-center rvt-hide-md-down"
              columnWidth={3}
            >
              <rvt-sticker name="badge-lock" size="xl" />
            </Col>
          </Row>
        </Container>
      </div>
      {children}
    </React.Fragment>
  );
};

AccessDeniedLayout.propTypes = {
  /** An error message for Access denied */
  errorMessage: PropTypes.string.isRequired,
  /** Content to display below the access denied layout */
  children: PropTypes.node,
};

AccessDeniedLayout.displayName = "AccessDeniedLayout";
export default Rivet.rivetize(AccessDeniedLayout);
