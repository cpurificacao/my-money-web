import React from "react";
import ReactDOM from "react-dom";

/* Dependências */
// JS
import "modules/admin-lte/plugins/jQueryUI/jquery-ui.min.js";
import "modules/admin-lte/plugins/fastclick/fastclick.js";
import "modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js";
import "modules/admin-lte/dist/js/app.min.js";

// CSS
import "modules/ionicons/dist/css/ionicons.min.css";

import "modules/admin-lte/bootstrap/css/bootstrap.min.css";
import "modules/admin-lte/dist/css/AdminLTE.min.css";
import "modules/admin-lte/dist/css/skins/_all-skins.min.css";
import "modules/admin-lte/plugins/iCheck/flat/blue.css";

/* Assets */
// SCSS
import "./assets/scss/index.scss";

/* Componentes */
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));
