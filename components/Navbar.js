import styles from "../styles/Navbar.module.css";
import React from "react";
import { HiHome } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitch, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";

const Divider = () => {
    return <div className={`my-10 ${styles.divider}`}></div>;
};

function Navbar() {
    return (
        <div
            className={`h-full flex flex-col items-center justify-center font-groches text-white py-5 px-2 ${styles.navbar}`}
        >
            <h2 className="text-5xl font-medium w-full text-center leading-9 cursor-pointer">
                <span className="hidden sm:block">Game Mastery</span>
                <span className="block sm:hidden">G.M</span>
            </h2>

            <Divider />

            <div
                className={`text-xl flex items-center justify-center sm:justify-between gap-2 w-full p-3 mb-3 rounded-xl ${styles.navLink}`}
            >
                <div className="hidden sm:block font-medium">Home</div>
                <HiHome className="text-xl" />
            </div>
            <div
                className={`text-xl flex items-center justify-center sm:justify-between gap-2 w-full p-3 mb-3 rounded-xl ${styles.navLink}`}
            >
                <div className="hidden sm:block font-medium">Search</div>
                <FiSearch className="text-xl" />
            </div>
            <div
                className={`text-xl flex items-center justify-center sm:justify-between gap-2 w-full p-3 mb-3 rounded-xl ${styles.navLink}`}
            >
                <div className="hidden sm:block font-medium">Contact</div>
                <MdPermContactCalendar className="text-xl" />
            </div>

            <Divider />

            <div className="w-full flex flex-col items-center">
                <div className="text-2xl mb-5">Follow Us On</div>
                <div className="w-full flex items-center justify-between mb-3">
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

export default Navbar;
