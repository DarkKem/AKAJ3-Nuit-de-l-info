import React, {useEffect} from 'react';
import Router from 'next/router'
import {server} from "../../config";
import moment from "moment";

const Index = ({data}) => {
    return (
        <div className={"divForElement"}>
            <h1>{moment(data.date_sauvetage).format("DD MM YYYY")}</h1>
            <h2>{data.nb_personne} personnes sauvées</h2>
            <h3>{data.equipage_sauve} équipages sauvés</h3>
            <p>{data.description}</p>
        </div>
    );
};

export default Index;
export const getServerSideProps = async (context) => {
    let request = `${server}/api/sauvetage/${context.params.id}`
    const response = await fetch(request);
    console.log('ok')
    let sauveteur = await response.json()
    console.log(sauveteur)
    if(sauveteur.length ===0 )
    {
        await Router.replace("/404")
    }
    return {
        props: {
            data: sauveteur[0]
        }
    }

}