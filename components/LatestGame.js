import React from "react";
import Image from "next/image";
import styles from "../styles/LatestGame.module.css";
import { useRouter } from "next/router";

function LatestGame({ id, img, name, genre, platform }) {
    const router = useRouter();

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
            <div className="flex flex-col items-start gap-2 mt-3">
                <h1 className={`text-lg font-bold text-purple`}>{name}</h1>
                <div className="w-full flex justify-between items-center font-bold text-sm gap-3">
                    <div className="w-max bg-white text-purple rounded-lg py-1.5 px-3">
                        {platform}
                    </div>
                    <div className="w-max text-violet-700 px-3 py-1.5 border-2 border-violet-700 rounded-lg">
                        {genre}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestGame;
