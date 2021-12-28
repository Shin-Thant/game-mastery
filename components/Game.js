import React from "react";
import styles from "../styles/Game.module.css";

function Game({ id, img, name }) {
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
                    className={`bg-white py-1 px-3 text-purple text-xl rounded font-groches ${styles.detailsBtn}`}
                >
                    View Details
                </button>
            </div>
        </div>
    );
}

export default Game;
