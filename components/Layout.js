import React, { Fragment } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";

function Layout(props) {
    return (
        <div className={`flex w-full ${styles.mainBg}`}>
            <Navbar />
            <div className={`p-5 relative ${styles.mainContent}`}>
                {/* <div className={styles.circle1}></div> */}
                {/* <div className={styles.circle2}></div> */}
                {props.children}
            </div>
        </div>
    );
}

export default Layout;
