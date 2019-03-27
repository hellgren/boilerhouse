import React from "react";
import { Global, css } from "@emotion/core";
import PropTypes from "prop-types";

const BaseLayout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
        }
        * {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
          height: 100%;
        }
      `}
    />
    <div>{children}</div>
  </>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default BaseLayout;
