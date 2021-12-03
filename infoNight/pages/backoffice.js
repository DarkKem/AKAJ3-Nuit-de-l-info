import React, { useEffect } from 'react';
import {server} from "../config/index"


export default function backoffice({data}) {

    return (
        <div>
            <h1>Admin</h1>
            {data.length>0 ? data.map((elem,key)=>(
                <div key={key}>
                    <h1>{elem.titre}</h1>
                    <h3>{elem.categorie}</h3>
                    <p>{elem.contenu}   </p>
                    <button >accepter</button>
                    <button>refuser</button>
                    </div>

            )):NULL}
        </div>
    );
};


export const getServerSideProps = async (context) => {
    console.log('ici');
    const json = await fetch(`${server}api/backoffice`)
    let resJson= await json.json()
    return {props:{data:resJson.data}}
}
