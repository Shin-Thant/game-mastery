import React from "react";
import Head from "next/head";
import styles from "../styles/FavoriteGames.module.css";
import { useSelector } from "react-redux";
import FavoriteGameCard from "../components/FavoriteGameCard";
import { useRouter } from "next/router";

function FavoriteGamesPage() {
    const { favoriteGames } = useSelector((state) => state.favorite);

    const router = useRouter();

    return (
        <>
            <Head>
                <title>GameMastery | Favorite Games</title>
                <meta
                    name="keyword"
                    content="game-mastery"
                    title="game-mastery-favoriteGames"
                />
            </Head>
            <div className={`w-full rounded-xl ${styles.mainContent}`}>
                <h2 className="text-4xl font-groches text-white mb-8">
                    Favorite Games
                </h2>
                {typeof window !== undefined && favoriteGames?.length >= 1 ? (
                    <div
                        className={`w-full gap-x-5 gap-y-5 xtablet:gap-x-7  ${styles.favoriteContainer}`}
                    >
                        {favoriteGames?.map((game) => (
                            <FavoriteGameCard
                                key={game?.id}
                                id={game?.id}
                                name={game?.title}
                                img={game?.thumbnail}
                                genre={game?.genre}
                                platform={game?.platform}
                                shortDescription={game?.short_description}
                                releaseDate={game?.release_date}
                            />
                        ))}
                    </div>
                ) : (
                    <div
                        className={`w-full flex flex-col justify-center items-center gap-5 ${styles.noFavorite}`}
                        style={{ height: "60vh" }}
                    >
                        <img
                            src="notify2.svg"
                            alt="no-favorite-games-image"
                            className="w-9/12 md:w-1/2"
                        />
                        <h2 className="font-poppins text-lg md:text-xl font-semibold text-white">
                            No Favorite Games.{" "}
                            <span
                                className="text-violet-700 cursor-pointer tracking-wide hover:underline focus:underline"
                                onClick={() => router.push("/")}
                            >
                                Explore!
                            </span>
                        </h2>
                    </div>
                )}
            </div>
        </>
    );
}

export default FavoriteGamesPage;
