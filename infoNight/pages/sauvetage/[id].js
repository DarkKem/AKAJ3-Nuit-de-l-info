import React, {useEffect} from 'react';
import Router from 'next/router'
import {server} from "../../config";

const Index = ({data}) => {
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>
            {JSON.stringify(data)}

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