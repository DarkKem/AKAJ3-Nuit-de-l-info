import React, {useState} from 'react';
import {server} from "../../config";
import isEmail from 'validator/lib/isEmail';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faExclamationTriangle,
    faUserTie,
    faKey,
    faCheckCircle,
    faQrcode
} from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import Router from "next/router";
import cookie from "cookie";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [qrcode, setQrcode] = useState('')
    const [messageSuccess, setMessageSuccess] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault()
        setMessageError(false)
        setMessageSuccess(false)
        setLoading(true)

        if (username && password && qrcode) {
            console.log(password)
            const resp = await fetch(`${server}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    qrcode: qrcode,
                })
            })
            if (resp.status.toString().includes('40')) {
                setMessageError(true)
            } else if (resp.status.toString().includes('200')) {
                // const json = await resp.json()
                setMessageSuccess(true)
                console.log(resp)
                setTimeout(() => {
                    Router.push('/')
                }, 2000)
            }

        } else {
            setMessageError(true)
        }
        setLoading(false)
    }
    return (
        <form onSubmit={handleLogin} className={""}>
            <h1 style={{color: "#274789"}}>LogIn</h1>
            <label htmlFor="username" className={``}>
                <FontAwesomeIcon icon={faUserTie}
                                 className={""}/></label>

            <input type="username" id={"username"} name={"username"} placeholder="Username" value={username}
                   onChange={event => setUsername(event.target.value)}
                   className={`
                                      `}
                   required/>

            <label htmlFor="password" className={`
                    `}> <FontAwesomeIcon icon={faKey}
                                         className={""}/>
            </label>
            <input type="password" id={"password"} name={"password"} placeholder="Password" value={password}
                   onChange={event => setPassword(event.target.value)}
                   className={``}
                   required/>
            <label htmlFor="qrcode" className={`
                    `}> <FontAwesomeIcon icon={faQrcode}
                                         className={""}/>
            </label>
            <input type="qrcode" id={"qrcode"} name={"qrcode"} placeholder="QrCode" value={qrcode}
                   onChange={event => setQrcode(event.target.value)}
                   className={``}
                   required/>
            {messageError &&
            <div
                className="">
                <FontAwesomeIcon icon={faExclamationTriangle} className={"align-middle inline"}/>

                <p className={""}>Une erreur est survenue ! Veuillez vérifier vos
                    identifiants</p>
                <FontAwesomeIcon icon={faExclamationTriangle} className={""}/>

            </div>}
            {messageSuccess &&
            <div
                className="">
                <FontAwesomeIcon icon={faCheckCircle} className={""}/>

                <p className={""}>Connecté avec succès, vous allez être redirigé</p>
                <FontAwesomeIcon icon={faCheckCircle} className={""}/>

            </div>}
            <div className="">
                <button type="submit"
                        className={""}>Se
                    connecter
                </button>
            </div>
            {loading && "loading.."}
        </form>

    );
};

export default Login;
