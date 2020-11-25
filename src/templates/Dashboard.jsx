import React from "react";

import userImg from "../assets/images/user.png";

import Icon from "../components/shared/Icon";

import MenuItem from "../components/Dashboard/MenuItem";
// import TreeView from "./treeView";

const Dashboard = (props) => (
  <>
    <header className="main-header">
      <a href="#" className="logo">
        <span className="logo-mini">
          <b>My</b>M
        </span>
        <span className="logo-lg">
          <Icon prefix="fas" name="money-bill-wave" />
          <b> My</b>Money
        </span>
      </a>
      <nav className="navbar navbar-static-top">
        <a
          href="#"
          className="sidebar-toggle"
          data-toggle="offcanvas"
          role="button"
        >
          <Icon prefix="fas" name="bars" />
        </a>
      </nav>
    </header>

    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src={userImg} alt="Usuário" className="img-circle" />
          </div>

          <div className="pull-left info">
            <p>Mr. Apollo</p>
            <a href="#">
              <Icon prefix="fas" name="circle" className="text-success" />
              Online
            </a>
          </div>
        </div>

        {/* <form className="sidebar-form">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <span className="input-group-btn">
              <button type="submit" id="search-btn" className="btn btn-flat">
                <Icon prefix="fas" name="search" />
              </button>
            </span>
          </div>
        </form> */}

        <ul className="sidebar-menu" data-widget="tree">
          {/* <li className="header">HEADER</li> */}

          <MenuItem
            href="/dashboard"
            icon={{ prefix: "fas", name: "tachometer-alt" }}
            label="Dashboard"
          />
          <MenuItem
            href="/dashboard/billingCycle"
            icon={{ prefix: "fas", name: "hand-holding-usd" }}
            label="Billing Cycle"
          />
          {/* <TreeView icon={{ prefix: "fas", name: "link" }} label="Links">
            <MenuItem
              href="#"
              icon={{ prefix: "fas", name: "link" }}
              label="Link 1"
            />
            <MenuItem
              href="#"
              icon={{ prefix: "fas", name: "link" }}
              label="Link 2"
            />
          </TreeView> */}
        </ul>
      </section>
    </aside>

    <div className="content-wrapper">{props.children}</div>

    <footer className="main-footer">
      <Icon prefix="fas" name="copyright" />
      <strong>
        2020
        <a href="#"> My Money</a>
      </strong>
    </footer>
  </>
);

export default Dashboard;
