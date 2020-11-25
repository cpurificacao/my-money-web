import React from "react";

import Icon from "../shared/Icon";

const TreeView = ({ icon, label, children }) => (
  <li className="treeview">
    <a href="#">
      <Icon prefix={icon.prefix} name={icon.name} />
      <span>{label}</span>
      <span className="pull-right-container">
        <Icon prefix="fas" name="angle-down" className="pull-right" />
      </span>
    </a>

    <ul className="treeview-menu">{children}</ul>
  </li>
);

export default TreeView;
