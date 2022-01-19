import React from "react";
import styles from "../styles/FavoriteGameCard.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeGame } from "../features/favoriteSlice/favoriteSlice";
import { RiFullscreenFill } from "react-icons/ri";
import { useRouter } from "next/router";

function FavoriteGameCard({
    id,
    name,
    img,
    genre,
    platform,
    shortDescription,
    releaseDate,
}) {
    const dispatch = useDispatch();

    const router = useRouter();

    const favoriteHandler = () => {
        dispatch(removeGame(id));
    };

    const viewDetails = () => {
        router.push(`/gameDetails/${id}`);
    };

    return (
        <div className={`rounded-xl w-full h-max ${styles.cardContainer}`}>
            <div
                className={`rounded-xl overflow-hidden ${styles.imgContainer}`}
            >
                <button
                    onClick={viewDetails}
                    className={`${styles.detailsBtn}`}
                >
                    <RiFullscreenFill />
                </button>

                <img src={img} alt={`${name} image`} className={styles.img} />
            </div>
            <div className={`${styles.content}`}>
                <div className="flex items-center w-full justify-between gap-4 mb-0 xtablet:mb-2">
                    <h2
                        className={`font-bold font-poppins text-purple w-max ${styles.name}`}
                    >
                        {name?.length > 25 ? `${name.slice(0, 30)}...` : name}
                        {/* {name} */}
                    </h2>
                    <div
                        onClick={favoriteHandler}
                        className={`bg-purple rounded-full p-1.5 cursor-pointer ${styles.favoriteBtn}`}
                        title="Remove from favorite"
                    >
                        <AiFillHeart className="text-white" />
                    </div>
                </div>

                <div
                    className={`flex items-center w-full justify-start flex-wrap gap-2 ${styles.tags}`}
                >
                    <div
                        className={`w-max font-groches text-base mobile:text-lg text-white bg-purple px-3 rounded-md ${styles.genre}`}
                        title="Genre"
                    >
                        {genre}
                    </div>
                    <div
                        className={`w-max font-groches text-base mobile:text-lg text-white bg-purple px-3 rounded-md ${styles.platform}`}
                        title="Platform"
                    >
                        {platform}
                    </div>
                    <div
                        className={`w-max border-2 border-purple rounded-md px-3 font-groches text-purple text-base mobile:text-lg ${styles.date}`}
                        title="Release Date"
                    >
                        {releaseDate}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavoriteGameCard;
