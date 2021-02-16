import React from "react";

import Grid from "../shared/Grid";
import Icon from "../shared/Icon";

const ValueBox = ({ cols, bg, icon }) => (
  <Grid cols={cols}>
    <div className={`small-box bg-${bg}`}>
      <div className="inner">
        <h3></h3>
        <p></p>
      </div>
      <div className="icon">
        <Icon prefix="fas" name={icon} />
      </div>
    </div>
  </Grid>
);

export default ValueBox;
