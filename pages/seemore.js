import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/MoreGames.module.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Game from "../components/Game";
import { useRouter } from "next/router";

export default function SeeMorePage({ games }) {
    const [count, setCount] = useState(40);

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    const loadMore = () => {
        if (count < games.length) {
            setCount(count + 30);
        }
    };

    return (
        <>
            <Head>
                <title>GameMastery | Latest Games</title>
                <meta
                    name="keyword"
                    content="game-mastery"
                    title="game-mastery-home"
                />
            </Head>
            <div className={`w-full py-7 px-6 rounded-xl ${styles.seeMore}`}>
                <h2
                    onClick={goBack}
                    className="text-gray-100 hover:text-white cursor-pointer mb-10 w-max "
                >
                    <HiArrowNarrowLeft style={{ fontSize: "30px" }} />
                </h2>

                <div className="flex flex-wrap justify-center gap-5">
                    {games?.map(
                        (game, index) =>
                            index < count && (
                                <Game
                                    key={game.id}
                                    id={game.id}
                                    img={game.thumbnail}
                                    name={game.title}
                                />
                            )
                    )}
                </div>

                {count < games.length && (
                    <div className="w-full flex justify-center mt-8 mb-2">
                        <button
                            onClick={loadMore}
                            className="w-max px-3 py-1 font-poppins font-semibold text-base bg-violet-700 text-white rounded-md hover:bg-violet-800 focus:bg-violet-800 transition-colors duration-150 ease-linear"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const { data } = await axios.get(
        "https://www.freetogame.com/api/games?sort-by=release-date"
    );

    return {
        props: {
            games: data,
        },
        revalidate: 86400,
    };
};
