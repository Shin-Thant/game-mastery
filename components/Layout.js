import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import { IoIosArrowUp } from "react-icons/io";

function Layout(props) {
    return (
        <div
            className={`flex flex-col xtablet:flex-row gap-3 sm:gap-4 xtablet:gap-1 w-full p-2 sm:p-3 xtablet:p-0 ${styles.mainBg}`}
        >
            <Navbar />
            <button
                onClick={() =>
                    document.querySelector(".mainContent").scrollTo(0, 0)
                }
                // href="#desti"
                className={`${styles.tabletUp}`}
            >
                <IoIosArrowUp style={{ fontSize: "26px" }} />
            </button>
            <button
                onClick={() => window.scrollTo(0, 0)}
                // href="#desti"
                className={`${styles.mobileUp}`}
            >
                <IoIosArrowUp style={{ fontSize: "26px" }} />
            </button>
            <div
                className={`xtablet:py-3 xtablet:pr-3 relative mainContent ${styles.mainContent}`}
            >
                <div className="pointer-events-none" id="desti"></div>
                {/* <div className={styles.circle1}></div> */}
                {/* <div className={styles.circle2}></div> */}
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
