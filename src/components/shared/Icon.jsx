import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircle,
  faSearch,
  faAngleDown,
  faCopyright,
  faMoneyBillWave,
  faTachometerAlt,
  faHandHoldingUsd,
  faWallet,
  faCreditCard,
  faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faCircle,
  faSearch,
  faAngleDown,
  faCopyright,
  faMoneyBillWave,
  faTachometerAlt,
  faHandHoldingUsd,
  faWallet,
  faCreditCard,
  faFunnelDollar
);

const Icon = ({ prefix, name, ...props }) => (
  <i className="icon">
    <FontAwesomeIcon icon={[prefix, name]} {...props} />
  </i>
);

export default Icon;
