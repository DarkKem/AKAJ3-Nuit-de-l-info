import React, {Fragment} from 'react';
import Image from "next/image";
import Link from "next/link";
const Sauveteur = ({sauveteur}) => {
    return (
        <Fragment>
            <Link href={`/sauveteur/${sauveteur.id}`}>
                <div className={"divElemSearch"}>

                    <div style={{width: "40%", height: "100%"}}>
                        <Image src={"/static/background/sea.jpg"} layout={"responsive"}
                               objectFit={"cover"} width={16} height={16}/>
                    </div>
                    <div style={{width: "55%", overflow: "wrap"}} className={"rightSide"}>
                <h2>{sauveteur.firstname} <span className={"name"}>{sauveteur.name}</span></h2>
                {JSON.stringify(sauveteur)}
                    </div></div>
            </Link>

        </Fragment>
    );
};

export default Sauveteur;