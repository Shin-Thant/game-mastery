import styles from "../styles/Navbar.module.css";
import React, { useEffect, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitch, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";

const Divider = () => {
    return (
        <div className={` hidden xtablet:block w-full ${styles.divider}`}></div>
    );
};

function Navbar() {
    const router = useRouter();

    const navbar = useRef();

    const [activeLink, setActiveLink] = useState(1);

    useEffect(() => {
        router.pathname === "/" && setActiveLink(1);
        router.pathname === "gameDetails/[id]" && setActiveLink(1);
        router.pathname === "/search" && setActiveLink(2);
        router.pathname === "/favoriteGames" && setActiveLink(3);
    }, [router]);

    const goHome = () => {
        router.push("/");
        setActiveLink(1);
        window.scrollTo(0, 0);
    };

    const goSearch = () => {
        router.push("/search");
        setActiveLink(2);
        window.scrollTo(0, 0);
    };

    const goFavorite = () => {
        router.push("/favoriteGames");
        setActiveLink(3);
        window.scrollTo(0, 0);
    };

    const goContact = () => {
        router.push("/contact");
        setActiveLink(4);
        window.scrollTo(0, 0);
    };

    return (
        <div
            ref={navbar}
            className={`flex flex-row xtablet:flex-col items-center justify-between font-groches text-white py-2 sm:py-3 smTablet:py-1 px-5 xtablet:pl-2 xtablet:pr-1  ${styles.navbar} navbar`}
        >
            <h2
                className={`text-4xl xtablet:text-5xl font-medium text-center cursor-pointer h-max ${styles.logo}`}
            >
                <span
                    className="tracking-wide"
                    onClick={() => router.push("/")}
                >
                    Game Mastery
                </span>
            </h2>

            <Divider />

            <div
                className={`rounded-full p-2 smTablet:px-0 flex flex-row xtablet:flex-col z-10 shadow-xl smTablet:shadow-none ${styles.bottomNav}`}
            >
                <div
                    onClick={goHome}
                    className={`transition-all duration-200 ease-linear text-xl cursor-pointer flex flex-1 items-center justify-center sm:justify-between gap-2 sm:w-full rounded-full smTablet:rounded-xl ${
                        activeLink === 1
                            ? "bg-white text-purple"
                            : styles.navLink
                    } ${styles.links}`}
                >
                    <div className="hidden smTablet:block w-full xtablet:w-max text-center font-medium text-lg lg:text-xl">
                        Home
                    </div>
                    <HiHome className={`text-xl ${styles.icons}`} />
                </div>
                <div
                    onClick={goSearch}
                    className={`transition-all duration-200 ease-linear text-xl cursor-pointer flex flex-1 items-center justify-center sm:justify-between gap-2 sm:w-full rounded-full smTablet:rounded-xl ${
                        activeLink === 2
                            ? "bg-white text-purple"
                            : styles.navLink
                    } ${styles.links}`}
                >
                    <div className="hidden smTablet:block w-full xtablet:w-max text-center font-medium text-lg lg:text-xl">
                        Search
                    </div>
                    <FiSearch className={`text-xl ${styles.icons}`} />
                </div>
                <div
                    onClick={goFavorite}
                    className={`transition-all duration-200 ease-linear text-xl cursor-pointer flex flex-1 items-center justify-center sm:justify-between gap-2 sm:w-full rounded-full smTablet:rounded-xl ${
                        activeLink === 3
                            ? "bg-white text-purple"
                            : styles.navLink
                    } ${styles.links}`}
                >
                    <div className="hidden smTablet:block w-full xtablet:w-max text-center font-medium text-lg lg:text-xl">
                        Favorite
                    </div>
                    <AiFillHeart className={`text-xl ${styles.icons}`} />
                </div>
                <div
                    onClick={goContact}
                    className={`transition-all duration-200 ease-linear text-xl cursor-pointer flex flex-1 items-center justify-center sm:justify-between gap-2 sm:w-full rounded-full smTablet:rounded-xl ${
                        activeLink === 4
                            ? "bg-white text-purple"
                            : styles.navLink
                    } ${styles.links}`}
                >
                    <div className="hidden smTablet:block w-full xtablet:w-max text-center font-medium text-lg lg:text-xl">
                        Contact
                    </div>
                    <MdPermContactCalendar
                        className={`text-xl ${styles.icons}`}
                    />
                </div>
            </div>

            <Divider />

            <div className="w-full hidden xtablet:flex flex-col items-center">
                <div className="text-2xl mb-5">Follow Us On</div>
                <div className="w-full flex items-center justify-center gap-3 mb-3">
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
