import axios from "axios";
import Head from "next/head";
import React from "react";
import styles from "../styles/MoreGames.module.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Game from "../components/Game";
import { useRouter } from "next/router";

function seemore({ games }) {
    const router = useRouter();

    const goBack = () => {
        router.back();
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
                    {games?.map((game) => (
                        <Game
                            key={game.id}
                            id={game.id}
                            img={game.thumbnail}
                            name={game.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default seemore;

export const getStaticProps = async () => {
    const { data } = await axios.get(
        "https://www.freetogame.com/api/games?sort-by=release-date"
    );

    return {
        props: {
            games: [...data.slice(0, 40)],
        },
        revalidate: 86400,
    };
};
