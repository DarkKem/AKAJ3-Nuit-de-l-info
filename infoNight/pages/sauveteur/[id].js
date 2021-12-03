import React, {useEffect} from 'react';
import Router from 'next/router'
import {server} from "../../config";
import moment from "moment";

const Index = ({data}) => {
    return (
        <div className={"divForElement"}>
            <h1>{data.name} {data.firstname} - {data.lieu_naissance}</h1>
            <h2>{moment(data.day_of_birth).format("DD MM YYYY")}-{moment(data.day_of_death).format("DD MM YYYY")}</h2>
            <p>{data.pere}</p>
            <p>{data.mere}</p>
            <p>{data.nb_sauvetage} sauvetages effectués</p>
            <p>{data.text_autre}</p>
        </div>
    );
};

export default Index;
export const getServerSideProps = async (context) => {
    let request = `${server}/api/sauveteur/${context.params.id}`
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