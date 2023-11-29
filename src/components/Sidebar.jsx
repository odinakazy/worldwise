import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        {" "}
        &copy;Copyright {new Date().getFullYear()} by worldwise inc
      </footer>
    </div>
  );
}
export default Sidebar;
