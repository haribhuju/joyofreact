import React from "react";

function Banner({ styles, children }) {
  return <div className={`${styles} banner`}>{children}</div>;
}

export default Banner;
