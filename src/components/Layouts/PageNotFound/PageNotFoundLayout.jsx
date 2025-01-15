/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { Col, Container, Row } from "../../Grid/index.jsx";
import * as Rivet from "../../util/Rivet.jsx";
import "rivet-stickers/dist/browser-exclamation.js";
import PropTypes from "prop-types";

const PageNotFoundLayout = ({ errorMessage, children }) => {
  return (
    <React.Fragment>
      <div className="rvt-bg-black-000">
        <Container size="sm" className="rvt-p-all-xxl">
          <Row>
            <Col columnWidth={9}>
              <p className="rvt-ts-xs rvt-color-crimson rvt-text-uppercase rvt-m-top-xs rvt-m-bottom-none rvt-p-all-none">
                HTTP 404
              </p>
              <h1 className="rvt-m-bottom-md title">Page not found</h1>
              <p>{errorMessage}</p>
            </Col>
            <Col
              className="rvt-content-center rvt-hide-md-down"
              columnWidth={3}
            >
              <rvt-Sticker name="browser-exclamation" size="xl" />
            </Col>
          </Row>
        </Container>
      </div>
      {children}
    </React.Fragment>
  );
};

PageNotFoundLayout.propTypes = {
  /** An error message for Page not found */
  errorMessage: PropTypes.string.isRequired,
  /** Content to display below the page not found layout */
  children: PropTypes.node,
};

PageNotFoundLayout.displayName = "PageNotFoundLayout";
export default Rivet.rivetize(PageNotFoundLayout);
