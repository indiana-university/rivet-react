import { ReactComponent as pageNotFoundSvg } from "../stickers/page-not-found.svg?react";
import { Col, Container, Row } from "../../Grid/index.jsx";
import * as Rivet from "../../util/Rivet.jsx";
import PropTypes from "prop-types";
import { require } from "../../../../styleguide.config.cjs";

const PageNotFoundLayout = ({ errorMessage, children }) => {
  return (
    <>
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
              {/*
                              Once https://github.com/indiana-university/rivet-stickers/issues/8 is resolved, please replace img tag with rvt-sticker :
                              <rvt-sticker name="page-not-found" size="xl"></rvt-sticker>
                             */}
              <img
                src={require("../stickers/page-not-found.svg")}
                alt="Page not found error"
              />
            </Col>
          </Row>
        </Container>
      </div>
      {children}
    </>
  );
};

PageNotFoundLayout.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  children: PropTypes.node,
};

PageNotFoundLayout.defaultProps = {
  children: null,
};

PageNotFoundLayout.displayName = "PageNotFoundLayout";
export default Rivet.rivetize(PageNotFoundLayout);
