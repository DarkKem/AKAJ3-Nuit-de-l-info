import React, {Fragment} from 'react';
import moment from "moment";
import Image from "next/image"

const Sauvetage = ({sauvetage}) => {
    return (
        <Fragment>
            <div style={{width: "40%", height: "100%"}}>
                <Image src={"/static/background/sea.jpg"} layout={"responsive"}
                       objectFit={"cover"} width={16} height={16}/>
            </div>
            <div style={{width: "55%", overflow: "wrap"}} className={"rightSide"}>
                <h2>{moment(sauvetage.date_sauvetage).format("DD MM YYYY")}</h2>
                <h3>{sauvetage.nb_personne} personnes sauvées</h3>
                <p>{sauvetage.description}</p>
            </div>
        </Fragment>
    );
};

export default Sauvetage;