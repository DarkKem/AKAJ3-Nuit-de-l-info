import React, {useEffect} from 'react';
import Router from 'next/router'
import {server} from "../../config";
import moment from "moment";

const Index = ({data}) => {
    return (
        <div className={"divForElement"}>
            {JSON.stringify(data)}
            <h1>{data.name} {data.type}</h1>
            <h2>{moment(data.date_creation).format("DD MM YYYY")}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default Index;
export const getServerSideProps = async (context) => {
    let request = `${server}/api/bateau/${context.params.id}`
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