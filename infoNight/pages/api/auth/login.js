import {compare} from "bcrypt";
import cookie from 'cookie';
import {sign} from 'jsonwebtoken'
import {secret} from '../../../config/secret'
import db from "../../../config/db";
//
const login = async (req, res) => {

    if (req.method === 'POST') {
        if (req.body.username !== "" && req.body.password !== "" && req.body.qrcode !== "") {
            try {
                let jsonres = await fetch(`http://ec2-3-129-65-69.us-east-2.compute.amazonaws.com:8080/2fa/check/${req.body.username}/${req.body.qrcode}`)
                let qrcode = await jsonres.json();
                console.log('qrcode', qrcode)
                if (qrcode) {


                    const person = await db("user").select().where({username: req.body.username})
                    compare(req.body.password, person[0].password, (err, result) => {
                        if (result && !err) {
                            console.log('in')
                            const claims = {id: person[0].id, username: person[0].username};
                            const jwt = sign(claims, secret, {expiresIn: '24h'});
                            let dataUser = {
                                id: person[0].id,
                                username: person[0].username,
                            }
                            // Setting DataUser Cookie
                            // Setting Auth Cookie

                            res.setHeader('Set-Cookie', [cookie.serialize('auth', jwt, {
                                httpOnly: true,
                                secure: process.env.NODE_ENV !== 'development',
                                sameSite: 'strict',
                                maxAge: 365 * 24 * 60 * 60,
                                path: '/'
                            }), cookie.serialize('user', JSON.stringify(dataUser), {
                                secure: process.env.NODE_ENV !== 'development',
                                sameSite: 'strict',
                                maxAge: 365 * 24 * 60 * 60,
                                path: '/'
                            })])
                            res.json({
                                message: 'Welcome back to the app'
                            })
                        } else {
                            console.log(err)
                            res.status(400).json({message: 'Ups, something went wrong!'})
                        }

                    });
                } else {
                    res.status(400).json({message: 'Bad QrCode'})
                }
            } catch (err) {
                console.log(err)
                res.status(400).json({message: 'An error occured'})
            }
        } else {
            res.status(400).json({message: 'One of the inputs are empty'})
        }
    } else {
        res.status(405).json({message: 'Method not allowed'})
    }
}
export default login;