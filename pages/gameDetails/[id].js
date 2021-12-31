import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/GameDetails.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowNarrowLeft } from "react-icons/hi";

function gameDetails({ game }) {
    const [activeImg, setActiveImg] = useState(0);

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    const scrollLeft = () => {
        document.querySelector(".ssContainer").scrollLeft -= 490;
    };

    const scrollRight = () => {
        document.querySelector(".ssContainer").scrollLeft += 490;
    };

    return (
        <>
            <Head>
                <title>GameMastery | Details</title>
                <meta
                    name="keyword"
                    content="game-mastery"
                    title="game-mastery-home"
                />
            </Head>
            <div
                className={`w-full py-7 px-6 rounded-xl ${styles.gameContainer}`}
            >
                <div
                    onClick={goBack}
                    className="text-gray-100 hover:text-white cursor-pointer mb-5 w-max"
                >
                    <HiArrowNarrowLeft style={{ fontSize: "30px" }} />
                </div>

                <div className="flex justify-between w-full gap-8">
                    <div
                        className={`h-max rounded-xl overflow-hidden ${styles.gameImg}`}
                    >
                        <img
                            src={game.thumbnail}
                            alt=""
                            className={`${styles.img}`}
                        />
                    </div>
                    <div className={`text-white ${styles.content}`}>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-max font-groches text-lg text-white bg-purple px-3 rounded-lg">
                                {game.status}
                            </div>
                            <div className="w-max font-groches text-lg text-white bg-purple px-3 rounded-lg">
                                {game.genre}
                            </div>
                            <div className="w-max font-groches text-lg text-white bg-purple px-3 rounded-lg">
                                {game.platform}
                            </div>
                        </div>
                        <h2 className="font-groches text-5xl mb-3">
                            {game.title}
                        </h2>

                        <h2 className="font-bold text-sm font-poppins flex items-center gap-2 mb-3">
                            <span>Release Date</span> -
                            <span className="text-purple text-sm border-2 border-purple rounded px-2 inline-block py-1">
                                {game.release_date}
                            </span>
                        </h2>

                        <h2 className="font-bold text-sm font-poppins flex items-center gap-2 mb-3">
                            <span>Publisher</span> -
                            <span className="text-purple text-base">
                                {game.publisher}
                            </span>
                        </h2>

                        <h2 className="font-bold text-sm font-poppins flex items-center gap-2 mb-7">
                            <span>Developed by</span> -
                            <span className="text-purple text-base">
                                {game.developer}
                            </span>
                        </h2>

                        <a
                            href={game.game_url}
                            target="_blank"
                            className={`transition-colors duration-150 ease-in py-1.5 w-full block text-center font-groches text-2xl ${styles.playBtn}`}
                        >
                            Play
                        </a>
                    </div>
                </div>

                <div
                    className="my-16 w-11/12 mx-auto bg-white"
                    style={{ height: "1px" }}
                ></div>

                <div className="flex items-center justify-between">
                    <div
                        className={`flex flex-col items-center gap-5 ${styles.short}`}
                    >
                        <p className="text-3xl font-groches text-white text-center">
                            {game.short_description}
                        </p>
                        <div className="flex items-center gap-7">
                            <button
                                onClick={scrollLeft}
                                className={`py-1.5 px-2 ${styles.leftBtn}`}
                            >
                                <BsChevronLeft style={{ fontSize: "25px" }} />
                            </button>
                            <button
                                onClick={scrollRight}
                                className={`py-1.5 px-2 ${styles.rightBtn}`}
                            >
                                <BsChevronRight style={{ fontSize: "25px" }} />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex items-center overflow-auto gap-4 px-5 ssContainer ${styles.ssContainer}`}
                    >
                        {game.screenshots.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveImg(index)}
                                className={`rounded-xl overflow-hidden cursor-pointer ${
                                    index === activeImg
                                        ? styles.activeGameSs
                                        : styles.gameSs
                                }`}
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className={`${styles.gameSsImg}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="my-16 w-11/12 mx-auto bg-white"
                    style={{ height: "1px" }}
                ></div>

                <div>
                    <h2 className="text-4xl text-center font-groches text-white mb-8">
                        Minimum Requirements
                    </h2>
                    <div className="w-full flex justify-center flex-wrap gap-5">
                        <div
                            className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                        >
                            <span className={`text-4xl font-groches`}>OS</span>
                            <span className="text-base text-center font-bold">
                                {game.minimum_system_requirements.os}
                            </span>
                        </div>
                        <div
                            className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                        >
                            <span className={`text-4xl font-groches`}>
                                Processor
                            </span>
                            <span className="text-base text-center font-bold">
                                {game.minimum_system_requirements.processor}
                            </span>
                        </div>
                        <div
                            className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                        >
                            <span className={`text-4xl font-groches`}>
                                Memory
                            </span>
                            <span className="text-base text-center font-bold">
                                {game.minimum_system_requirements.memory}
                            </span>
                        </div>
                        <div
                            className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                        >
                            <span className={`text-4xl font-groches`}>
                                Graphics
                            </span>
                            <span className="text-base text-center font-bold">
                                {game.minimum_system_requirements.graphics}
                            </span>
                        </div>
                        <div
                            className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                        >
                            <span className={`text-4xl font-groches`}>
                                Storage
                            </span>
                            <span className="text-base text-center font-bold">
                                {game.minimum_system_requirements.storage}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className="my-16 w-11/12 mx-auto bg-white"
                    style={{ height: "1px" }}
                ></div>

                <div className={`w-full mb-10`}>
                    <h2 className="text-white font-groches text-4xl mb-8 text-center w-full">
                        Description
                    </h2>
                    <p
                        data-text={game.description}
                        className={`font-poppins text-base font-semibold text-violet-800 w-full relative ${styles.description}`}
                    >
                        <span className={`${styles.originalDesc}`}>
                            {game.description}
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const { data } = await axios.get(
        `https://www.freetogame.com/api/game?id=${id}`
    );

    return {
        props: { game: data },
    };
};

export const getStaticPaths = async () => {
    const { data } = await axios.get("https://www.freetogame.com/api/games");

    const paths = data.map((game) => {
        return {
            params: { id: game.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export default gameDetails;