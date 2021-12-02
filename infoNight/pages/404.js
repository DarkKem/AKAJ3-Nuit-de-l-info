import React from 'react';
import Link from "next/link"

const index = () => {
    return (
        <div className={"my-28 text-xl text-gray-700 p-10 text-center"}>
            <div className="text-5xl text-gray-400">ERROR 404</div>
            <div className="my-16 block">
                Oups.. Il semblerait que tu t&apos;es perdu ou que tu n&apos;aie pas accès à cette page
            </div>
            <Link href={"/"}>
                <a
                className={"rounded px-4 py-2 shadow bg-gray-700 text-white transition hover:bg-gray-500 active:bg-atouLightOrange"}>Clique
                ici pou revenir sur la page d&apos;accueil</a></Link>

        </div>
    );
};

export default index;