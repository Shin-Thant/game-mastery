import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/LatestGame.module.css";
import { useRouter } from "next/router";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
    addGame,
    addNewGame,
    removeGame,
} from "../features/favoriteSlice/favoriteSlice";

function LatestGame({ id, img, name, genre, platform, game }) {
    const { favoriteGames } = useSelector((state) => state.favorite);

    const router = useRouter();

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
        <div className={`rounded-xl p-3 font-poppins ${styles.game}`}>
            <div className={`rounded-lg overflow-hidden ${styles.gameImg}`}>
                {/* <Image src={img} width={"100px"} height={"150px"} /> */}
                <img src={img} alt="" />
                <button
                    onClick={() => router.push(`/gameDetails/${id}`)}
                    className={`bg-white py-1 px-3 text-purple text-xl rounded font-groches ${styles.detailsBtn}`}
                >
                    View Details
                </button>
            </div>
            <div className="flex flex-col items-start gap-4 mt-4">
                <div className="flex items-center justify-between w-full gap-1">
                    <h1
                        className={`text-base xmobile:text-lg font-bold text-purple`}
                        title={name}
                    >
                        {name?.length > 32 ? `${name.slice(0, 30)}...` : name}
                    </h1>
                    <div
                        onClick={favoriteHandler}
                        className={`bg-purple rounded-full p-1.5 cursor-pointer text-white`}
                    >
                        {isFavorite ? (
                            <AiFillHeart className="text-base" />
                        ) : (
                            <AiOutlineHeart className="text-base" />
                        )}
                    </div>
                </div>
                <div className="w-full flex justify-between items-center font-bold text-sm gap-3">
                    <div className="w-max bg-purple text-white rounded-lg py-1.5 px-3">
                        {platform}
                    </div>
                    <div
                        className="w-max text-violet-700 px-3 py-1.5 border-2 border-violet-700 rounded-lg"
                        // style={{ flex: "-1" }}
                    >
                        {genre}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestGame;
