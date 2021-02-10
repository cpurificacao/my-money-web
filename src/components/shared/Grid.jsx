import React from "react";

const Grid = ({ cols, children }) => {
  cols = cols ? cols.split(" ") : [];

  const prefixes = ["xs", "sm", "md", "lg"];
  let classes = "";

  for (let i = 0, len = prefixes.length; i < len; i++) {
    classes += cols[i] ? `col-${prefixes[i]}-${cols[i]} ` : "";
  }

  classes = classes.trim();

  return <div className={classes}>{children}</div>;
};

export default Grid;
