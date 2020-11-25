import React from "react";
import { Link } from "react-router-dom";

import Icon from "../shared/Icon";

const MenuItem = ({ href, icon, label }) => (
  <li>
    <Link to={href}>
      <Icon prefix={icon.prefix} name={icon.name} />
      <span>{label}</span>
    </Link>
  </li>
);

export default MenuItem;
