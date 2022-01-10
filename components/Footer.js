import React from "react";
import styles from "../styles/Footer.module.css";
import { HiHome } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitch, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import { useRouter } from "next/router";

function Footer() {
    return (
        <div
            className={`${styles.footer} font-groches rounded-xl pt-5 pb-20 xmobile:py-5 text-purple`}
        >
            <div className="w-4/5 mx-auto flex flex-col items-center">
                <div className="text-3xl sm:text-4xl mb-3">Follow Us On</div>
                <div className="w-full flex items-center justify-center gap-3 mb-2">
                    <button
                        className={`text-lg p-2 rounded-full ${styles.follow}`}
                    >
                        <FaFacebookF />
                    </button>
                    <button
                        className={`text-lg p-2 rounded-full ${styles.follow}`}
                    >
                        <BsTwitter />
                    </button>
                    <button
                        className={`text-lg p-2 rounded-full ${styles.follow}`}
                    >
                        <RiInstagramFill />
                    </button>
                    <button
                        className={`text-lg p-2 rounded-full ${styles.follow}`}
                    >
                        <BsTwitch />
                    </button>
                </div>
                <div className="text-xl flex items-center">
                    <BiCopyright className="mr-1" /> 2022 - GameMaster.com
                </div>
            </div>
        </div>
    );
}

export default Footer;
