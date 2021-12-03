import React from 'react';
import {server} from "../config/index"
import ReCAPTCHA from "react-google-recaptcha";

export default function formadd() {
    const recaptchaRef = React.createRef();

     const registerUser = event => {
        event.preventDefault() 
        recaptchaRef.current.execute();
        let request = `${server}/api/backoffice`
        let serverRes =  fetch(request, {
            method: "POST",
            body: JSON.stringify({
               titre: event.target.titre.value,
               categorie: event.target.categorie.value,
               contenu : event.target.contenu.value
            })
        })
        if (serverRes.status === 200) {
            refreshTable()
        }
        // don't redirect the page
        // where we'll add our form logic
      }
    return (
        <div>
           <form onSubmit={registerUser}>
           <ReCAPTCHA
	    ref={recaptchaRef}
	    size="invisible"
	    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        // onChange={onReCAPTCHAChange}
	  />
            <label htmlFor="categorie">categorie</label>
            <input name="categorie" id="categorie" type="text" autoComplete="Catégorie..." required />
            <label htmlFor="titre">Titre</label>
            <input name="titre" id="titre" type="text" autoComplete="Titre..." required />
            <label htmlFor="Contenu">Contenu</label>
            <textarea name="contenu" id="Contenu"/>
            <button type="submit">Soummettre une information</button>
            </form>
        </div>
    );
};


