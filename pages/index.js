import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
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
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-groches text-white mb-2 w-max">
                        Latest Games
                    </h2>
                    <h1 className="w-max font-poppins font-bold text-sm text-purple hover:underline transition-all duration-200 ease-in">
                        <Link href="/seemore">see more</Link>
                    </h1>
                </div>

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
                            platform={game.platform}
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
        revalidate: 86400,
    };
};
