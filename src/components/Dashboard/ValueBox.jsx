import React from "react";

import Grid from "../shared/Grid";
import Icon from "../shared/Icon";

const ValueBox = ({ cols, bgColor, value, label, icon }) => (
  <Grid cols={cols}>
    <div className={`small-box bg-${bgColor}`}>
      <div className="inner">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
      <div className="icon">
        <Icon prefix="fas" name={icon} />
      </div>
    </div>
  </Grid>
);

export default ValueBox;
