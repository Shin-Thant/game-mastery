import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Search.module.css";
import { FiSearch } from "react-icons/fi";
import Game from "../components/Game";

export default function search({ games }) {
    const [search, setSearch] = useState("");

    const [quantity, setQuantity] = useState(true);

    useEffect(() => {
        games?.filter(
            (game) =>
                game.title.substring(0, search.length).toLowerCase() === search
        ).length >= 1
            ? setQuantity(true)
            : setQuantity(false);
    }, [search]);

    const searching = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    return (
        <>
            <Head>
                <title>GameMastery | Search</title>
                <meta
                    name="keyword"
                    content="game-mastery"
                    title="game-mastery-search"
                />
            </Head>
            <div
                className={`w-full min-h-full rounded-xl ${styles.searchContainer}`}
            >
                <div
                    className={`bg-white rounded-full px-3 py-1 gap-2 flex items-center mx-auto ${styles.inputField}`}
                >
                    <FiSearch className="text-xl" />
                    <input
                        type="text"
                        value={search}
                        onChange={searching}
                        className={`w-full py-1 border-0 outline-none text-base font-medium`}
                        placeholder="Search anything you want!"
                        autoFocus
                    />
                </div>

                <div
                    className="flex items-center sm:items-start justify-start sm:justify-center flex-col sm:flex-row gap-4 md:gap-3 flex-wrap pt-10"
                    style={{ minHeight: "80vh" }}
                >
                    {search.length ? (
                        quantity ? (
                            games?.map(
                                (game) =>
                                    game.title
                                        .substring(0, search.length)
                                        .toLowerCase() === search && (
                                        <Game
                                            key={game.id}
                                            id={game.id}
                                            img={game.thumbnail}
                                            name={game.title}
                                            genre={game.genre}
                                            platform={game.platform}
                                            game={game}
                                        />
                                    )
                            )
                        ) : (
                            <div
                                className={`w-full flex justify-center items-center`}
                                style={{ minHeight: "80vh" }}
                            >
                                <div className={`${styles.noData} px-1`}>
                                    <img
                                        src="no_data.svg"
                                        alt=""
                                        className="w-full object-cover"
                                    />
                                    <h1 className="text-center text-3xl sm:text-4xl font-groches text-white mt-6">
                                        Not Found
                                    </h1>
                                </div>
                            </div>
                        )
                    ) : (
                        <div
                            className={`w-full flex justify-center items-center`}
                            style={{ minHeight: "80vh" }}
                        >
                            <div className={`${styles.gaming}`}>
                                <img
                                    src="gaming.svg"
                                    alt=""
                                    className="w-full object-cover"
                                />
                                <h1 className="text-center text-2xl font-groches text-white mt-6">
                                    search any games you want!
                                </h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const { data } = await axios.get("https://www.freetogame.com/api/games");

    return {
        props: {
            games: data,
        },
    };
};
