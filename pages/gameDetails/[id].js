import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/GameDetails.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
    addNewGame,
    removeGame,
} from "../../features/favoriteSlice/favoriteSlice";

export default function GameDetails({ game }) {
    const { favoriteGames } = useSelector((state) => state.favorite);

    const [isFavorite, setIsFavorite] = useState(false);

    const [activeImg, setActiveImg] = useState(0);

    const [readMore, setReadMore] = useState(false);

    const router = useRouter();

    const dispatch = useDispatch();

    useEffect(() => {
        favoriteGames.find((item) => item?.id === game.id)
            ? setIsFavorite(true)
            : setIsFavorite(false);
    }, [favoriteGames]);

    const favoriteHandler = () => {
        if (!isFavorite) {
            dispatch(addNewGame(game));
            setIsFavorite(true);
        } else {
            dispatch(removeGame(game.id));
            setIsFavorite(false);
        }
    };

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
                className={`w-full py-4 sm:py-7 px-3 sm:px-6 rounded-xl ${styles.gameContainer}`}
            >
                <div
                    onClick={goBack}
                    className="text-gray-100 hover:text-white cursor-pointer mb-5 w-max"
                >
                    <HiArrowNarrowLeft style={{ fontSize: "30px" }} />
                </div>

                <div
                    className={`flex justify-between w-full gap-5 xl:gap-8 ${styles.detailsHeader}`}
                >
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

                        <div className="w-full flex items-center justify-start gap-3 mb-3">
                            <h2 className="font-groches text-4xl md:text-5xl ">
                                {game.title}
                            </h2>
                        </div>

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

                        <div className="flex items-center gap-5 w-full">
                            <button
                                onClick={favoriteHandler}
                                className="bg-white rounded-lg p-2 cursor-pointer"
                            >
                                {isFavorite ? (
                                    <AiFillHeart className="text-xl text-purple" />
                                ) : (
                                    <AiOutlineHeart className="text-xl text-purple" />
                                )}
                            </button>
                            <a
                                href={game.game_url}
                                target="_blank"
                                rel="noreferrer"
                                className={`transition-colors duration-150 ease-in py-1.5 w-full block text-center font-groches text-2xl ${styles.playBtn}`}
                            >
                                Play
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="my-16 w-11/12 mx-auto bg-white"
                    style={{ height: "1px" }}
                ></div>

                <div
                    className={`w-full flex justify-center screenshorts:justify-between screenshorts:items-center ${styles.imagesAndContent}`}
                >
                    <div className={`flex items-center gap-5 ${styles.short}`}>
                        <p className="text-3xl font-groches text-white text-center">
                            &nbsp; &nbsp; {game.short_description}
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
                        className={`h-max flex items-center overflow-auto screenshorts:px-5 ssContainer ${styles.ssContainer}`}
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

                {game?.minimum_system_requirements && (
                    <>
                        <div>
                            <h2 className="text-3xl md:text-4xl text-center font-groches text-white mb-8">
                                Minimum Requirements
                            </h2>
                            <div className="w-full flex justify-center flex-wrap gap-5">
                                <div
                                    className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                                >
                                    <span
                                        className={`text-3xl font-groches transition-colors duration-100 ease-linear`}
                                    >
                                        OS
                                    </span>
                                    <span className="text-base text-center font-bold transition-colors duration-100 ease-linear">
                                        {game.minimum_system_requirements.os
                                            ? game?.minimum_system_requirements
                                                  ?.os
                                            : "---"}
                                    </span>
                                </div>
                                <div
                                    className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                                >
                                    <span
                                        className={`text-3xl font-groches transition-colors duration-100 ease-linear`}
                                    >
                                        Processor
                                    </span>
                                    <span className="text-base text-center font-bold transition-colors duration-100 ease-linear">
                                        {game.minimum_system_requirements
                                            .processor
                                            ? game?.minimum_system_requirements
                                                  ?.processor
                                            : "---"}
                                    </span>
                                </div>
                                <div
                                    className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                                >
                                    <span
                                        className={`text-3xl font-groches transition-colors duration-100 ease-linear`}
                                    >
                                        Memory
                                    </span>
                                    <span className="text-base text-center font-bold transition-colors duration-100 ease-linear">
                                        {game.minimum_system_requirements.memory
                                            ? game?.minimum_system_requirements
                                                  ?.memory
                                            : "---"}
                                    </span>
                                </div>
                                <div
                                    className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                                >
                                    <span
                                        className={`text-3xl font-groches transition-colors duration-100 ease-linear`}
                                    >
                                        Graphics
                                    </span>
                                    <span className="text-base text-center font-bold transition-colors duration-100 ease-linear">
                                        {game.minimum_system_requirements
                                            .graphics
                                            ? game?.minimum_system_requirements
                                                  ?.graphics
                                            : "---"}
                                    </span>
                                </div>
                                <div
                                    className={`text-white font-poppins flex flex-col justify-center items-center p-7 rounded-xl gap-5 ${styles.requirements}`}
                                >
                                    <span
                                        className={`text-3xl font-groches transition-colors duration-100 ease-linear`}
                                    >
                                        Storage
                                    </span>
                                    <span className="text-base text-center font-bold transition-colors duration-100 ease-linear">
                                        {game.minimum_system_requirements
                                            .storage &&
                                        game.minimum_system_requirements
                                            .storage !== "?"
                                            ? game?.minimum_system_requirements
                                                  ?.storage
                                            : "---"}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className="my-16 w-11/12 mx-auto bg-white"
                            style={{ height: "1px" }}
                        ></div>{" "}
                    </>
                )}

                <div className={`w-full mb-10`}>
                    <h2 className="text-white font-groches text-3xl md:text-4xl mb-5 sm:mb-10 text-center w-full">
                        Description
                    </h2>
                    <div
                        className={`font-poppins text-sm mobile:text-base font-semibold text-violet-800 w-full relative transition-all duration-300 ease-linear ${
                            styles.description
                        } ${readMore && styles.activeDescription}`}
                    >
                        <span className={`w-full`}>
                            {game.description}
                            <div
                                onClick={() => setReadMore(false)}
                                className={`w-max text-center cursor-pointer mt-3 border-2 border-purple rounded px-2 py-1 mx-auto ${styles.readLess}`}
                            >
                                See Less!
                            </div>
                        </span>

                        <span
                            onClick={() => setReadMore(true)}
                            className={`text-purple font-poppins cursor-pointer bg-white border-2 border-purple rounded px-2 py-1 ${styles.readMore}`}
                        >
                            See More!
                        </span>
                    </div>
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
