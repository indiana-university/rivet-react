/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from "react";
import { Col, Container, Row } from "../../Grid/index.jsx";
import * as Rivet from "../../util/Rivet.jsx";
import PropTypes from "prop-types";
import Sticker, { StickerNames } from "../../util/RivetStickers.jsx";

const AccessDeniedLayout = ({ errorMessage, children }) => {
  return (
    <>
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
              {/*
                Once https://github.com/indiana-university/rivet-stickers/issues/9 is resolved, please replace below tag with rvt-sticker :
                <rvt-sticker name="acess-denied" size="xl"></rvt-sticker>
             */}
              <Sticker
                name={StickerNames.ACCESS_DENIED}
                width="100%"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ "background-size": "96px 96px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      {children}
    </>
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
