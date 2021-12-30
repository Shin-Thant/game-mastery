import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Game.module.css";

function Game({ id, img, name }) {
    const router = useRouter();

    return (
        <div
            className={`h-max rounded-lg relative overflow-hidden ${styles.game}`}
        >
            <img src={img} alt="" className={`gameImg`} />

            <div
                className={`flex flex-col justify-center items-center gap-3 ${styles.hoverSection}`}
            >
                <h1
                    className={`text-white font-groches text-center text-4xl ${styles.gameName}`}
                >
                    {name}
                </h1>
                <button
                    onClick={() => router.push(`/gameDetails/${id}`)}
                    className={`bg-white py-1 px-3 text-purple text-xl rounded font-groches ${styles.detailsBtn}`}
                >
                    View Details
                </button>
            </div>
        </div>
    );
}

export default Game;
