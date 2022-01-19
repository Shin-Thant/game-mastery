import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Game.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
    addGame,
    addNewGame,
    removeGame,
} from "../features/favoriteSlice/favoriteSlice";

function Game({ id, img, name, game }) {
    const router = useRouter();

    const { favoriteGames } = useSelector((state) => state.favorite);

    const [isFavorite, setIsFavorite] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        favoriteGames.find((item) => item?.id === id)
            ? setIsFavorite(true)
            : setIsFavorite(false);
    }, [favoriteGames]);

    const favoriteHandler = () => {
        if (!isFavorite) {
            dispatch(addNewGame(game));
            setIsFavorite(true);
        } else {
            dispatch(removeGame(id));
            setIsFavorite(false);
        }
    };

    return (
        <div
            className={`h-max rounded-lg relative overflow-hidden ${styles.game}`}
        >
            <img src={img} alt="" className={`${styles.gameImg}`} />

            <div
                className={`flex flex-col justify-center items-center gap-3 ${styles.hoverSection}`}
            >
                <h1
                    className={`text-white font-groches text-center text-3xl ${styles.gameName}`}
                >
                    {name}
                </h1>
                <div className="flex items-center justify-center gap-3">
                    <button
                        onClick={() => router.push(`/gameDetails/${id}`)}
                        className={`bg-white py-1 px-3 text-purple text-xl rounded font-groches ${styles.detailsBtn}`}
                    >
                        View Details
                    </button>
                    <div
                        onClick={favoriteHandler}
                        className="bg-white rounded-full p-1.5 cursor-pointer"
                    >
                        {isFavorite ? (
                            <AiFillHeart className="text-xl text-purple" />
                        ) : (
                            <AiOutlineHeart className="text-xl text-purple" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;
