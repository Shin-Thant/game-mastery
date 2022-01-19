import styles from "../styles/Home.module.css";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Divider from "../components/Divider";
import LatestGame from "../components/LatestGame";
import Head from "next/head";
import Link from "next/link";
import Game from "../components/Game";
import { useState } from "react";
import { useQuery } from "react-query";

export const getAllGames = async () => {
    const { data } = await axios.get("https://www.freetogame.com/api/games");

    return data;
};

export default function Home({ games, regular }) {
    const [count, setCount] = useState(40);

    // const {isLoading, error, data} = useQuery('allGames', getAllGames)

    const scrollLeft = () => {
        document.querySelector(".gamesContainer").scrollLeft -= 400;
    };

    const scrollRight = () => {
        document.querySelector(".gamesContainer").scrollLeft += 400;
    };

    const loadMore = () => {
        if (count < regular.length) {
            setCount(count + 30);
        }
    };

    return (
        <>
            <Head>
                <title>GameMastery | Home</title>
                <meta
                    name="keyword"
                    content="game-mastery"
                    title="game-mastery-home"
                />
            </Head>
            <div
                className={`w-full p-2 xmobile:p-4 sm:py-7 sm:px-6 rounded-xl ${styles.homeMainContent}`}
            >
                <div className="flex justify-between items-center px-2">
                    <h2 className="text-4xl sm:text-4xl font-groches text-white mb-2 w-max">
                        Latest Games
                    </h2>
                    <h1 className="w-max font-poppins font-bold text-sm text-purple hover:underline transition-all duration-200 ease-in">
                        <Link href="/seemore">see more</Link>
                    </h1>
                </div>

                <div
                    className={`flex overflow-auto px-2 py-5 xmobile:p-3 sm:p-4 sm:py-10 gap-5 relative gamesContainer ${styles.gamesContainer}`}
                >
                    {games?.map((game) => (
                        <LatestGame
                            key={game.id}
                            id={game.id}
                            img={game.thumbnail}
                            name={game.title}
                            genre={game.genre}
                            platform={game.platform}
                            game={game}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-center gap-5 mt-3 w-full text-black">
                    <button
                        onClick={scrollLeft}
                        className={`p-2 ${styles.leftArr}`}
                    >
                        <BsChevronLeft style={{ fontSize: "25px" }} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className={`p-2 ${styles.rightArr}`}
                    >
                        <BsChevronRight style={{ fontSize: "25px" }} />
                    </button>
                </div>

                <Divider />

                <h2 className="font-groches text-4xl sm:text-4xl text-white mb-7 text-center lg:text-left px-2">
                    Games
                </h2>
                <div className="flex flex-wrap justify-center gap-5 px-1 mobile:px-2.5 sm:px-0 mb-5 xmobile:mb-0">
                    {regular?.map(
                        (game, index) =>
                            index < count && (
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
                    )}
                </div>

                {count < regular.length && (
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
    const regular = await axios.get("https://www.freetogame.com/api/games");

    return {
        props: {
            games: [...data.slice(0, 31)],
            regular: [...regular.data],
        },
        revalidate: 86400,
    };
};
