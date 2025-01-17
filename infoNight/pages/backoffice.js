import React, { useEffect } from 'react';
import {server} from "../config/index"


export default function backoffice({data}) {
    async function traite(id) {
            let request = `${server}/api/backoffice`
            let serverRes = await fetch(request, {
                method: "DELETE",
                body: JSON.stringify({
                    id: id,
                })
            })
            if (serverRes.status === 200) {
                alert("Demande supprimé")
            }           
    }
    return (
        <div className={"admin"}>
            <h2>Admin</h2>
            <div className={"iframe-container"}>
                <iframe style={{border: "0", overflow: "hidden"}}
                    frameBorder="0" height="100%" width="70%"
                    src="https://nuit-info-2021.toucantoco.com/embed.html?id=58aad1e4-62d5-439f-af08-cee332bc76b0&stage=staging">
                </iframe>
            </div>
            <div className={"modification-container"}>
            {data.length>0 ? data.map((elem,key)=>(
                    <div key={key} className={"modification-content"}>
                        <h3>{elem.titre}</h3>
                        <h4>{elem.categorie}</h4>
                        <p>{elem.contenu}  </p>
                        <button onClick={()=>{traite(elem.id)}}>Traité</button>
                    </div>
            )):null}
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const json = await fetch(`${server}/api/backoffice`)
    let resJson= await json.json()
    return {props:{data:resJson.data}}
}
