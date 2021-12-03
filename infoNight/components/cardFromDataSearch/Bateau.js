import React, {Fragment} from 'react';
import Link from "next/link"
import Image from "next/image";

const Bateau = ({bateau}) => {
    return (
        <Fragment>
            <Link href={`/bateau/${bateau.id}`}>
                <div className={"divElemSearch"}>

                    <div style={{width: "40%", height: "100%"}}>
                        <Image src={"/static/background/sea.jpg"} layout={"responsive"}
                               objectFit={"cover"} width={16} height={16}/>
                    </div>
                    <div style={{width: "55%", overflow: "wrap"}} className={"rightSide"}>
                        {JSON.stringify(bateau)}
                    </div></div>
            </Link>
        </Fragment>
    );
};

export default Bateau;