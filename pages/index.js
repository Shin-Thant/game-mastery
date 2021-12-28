import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Divider from "../components/Divider";
import LatestGame from "../components/LatestGame";
import Head from "next/head";
import Link from "next/link";
import Game from "../components/Game";

export default function Home({ games, regular }) {
    const scrollLeft = () => {
        document.querySelector(".gamesContainer").scrollLeft -= 400;
    };

    const scrollRight = () => {
        document.querySelector(".gamesContainer").scrollLeft += 400;
    };

    console.log(games[0]);

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
                className={`w-full py-7 px-6 rounded-xl ${styles.homeMainContent}`}
            >
                <h2 className="text-4xl font-groches text-white mb-2 ">
                    Latest Games
                </h2>
                <div
                    className={`flex overflow-auto p-4 gap-5 relative gamesContainer ${styles.gamesContainer}`}
                >
                    {games?.map((game) => (
                        <LatestGame
                            key={game.id}
                            id={game.id}
                            img={game.thumbnail}
                            name={game.title}
                            genre={game.genre}
                        />
                    ))}
                </div>

                <div className="flex items-center justify-center gap-3 mt-3">
                    <button
                        onClick={scrollLeft}
                        className={`p-2 rounded-full ${styles.leftArr}`}
                    >
                        <BsArrowLeft className={`text-xl`} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className={`p-2 rounded-full ${styles.rightArr}`}
                    >
                        <BsArrowRight className={`text-xl`} />
                    </button>
                </div>

                <Divider />

                <h2 className="font-groches text-4xl text-white mb-7">Games</h2>
                <div className="flex flex-wrap justify-center gap-5">
                    {regular?.map((game) => (
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

export const getStaticProps = async () => {
    const { data } = await axios.get(
        "https://www.freetogame.com/api/games?sort-by=release-date"
    );
    const regular = await axios.get("https://www.freetogame.com/api/games");

    return {
        props: {
            games: [...data.slice(0, 31)],
            regular: [...regular.data.slice(0, 41)],
        },
    };
};
