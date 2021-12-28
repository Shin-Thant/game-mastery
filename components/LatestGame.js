import React from "react";
import Image from "next/image";
import styles from "../styles/LatestGame.module.css";

function LatestGame({ id, img, name, genre }) {
    return (
        <div className={`rounded-xl p-3 font-poppins ${styles.game}`}>
            <div className={`rounded-lg overflow-hidden ${styles.gameImg}`}>
                {/* <Image src={img} width={"100px"} height={"150px"} /> */}
                <img src={img} alt="" />
                <button
                    className={`bg-white py-1 px-3 text-purple text-xl rounded font-groches ${styles.detailsBtn}`}
                >
                    View Details
                </button>
            </div>
            <div className="flex items-center mt-3 justify-between ">
                <h1 className={`text-lg font-bold text-purple`}>{name}</h1>
                <h2 className="font-semibold text-sm text-white">{genre}</h2>
            </div>
        </div>
    );
}

export default LatestGame;
