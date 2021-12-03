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
        alert("Demande envoyé")
        document.getElementById("form").reset();
        if (serverRes.status === 200) {
           
        }
        // don't redirect the page
        // where we'll add our form logic
      }
      const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        console.log(captchaCode);
        if(!captchaCode) {
            
          return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        alert(`Hey, ${email}`);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
      }
    return (
        <div>
           <form id='form' onSubmit={registerUser}>
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

            <textarea name="contenu" id="Contenu" required />
            <button type="submit">Soummettre une information</button>
            </form>
        </div>
    );
};


