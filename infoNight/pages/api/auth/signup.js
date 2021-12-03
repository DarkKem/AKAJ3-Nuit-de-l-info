import {hash} from 'bcrypt'
import db from "../../../config/db";

const signup = async (req, res) => {
    if (req.method === 'POST') {

        console.log(req.body);
        if (req.body.password !== "" && req.body.username !== "") {
            hash(req.body.password, 10, async (err, hash) => {
                try {
                    const statementID = await db("user").insert({
                        username: req.body.username,
                        password: hash,
                    }).returning('id')

                    res.status(200).json({message:"well registered"})
                } catch (err) {
                    console.log(err)
                    res.status(400).json({message: 'An error occured, the email maybe already used'})
                }

            })
        } else {
            res.status(400).json({message: 'One of the inputs are empty'})
        }
    } else {
        res.status(405).json({message: 'Method not allowed'})
    }
}
export default signup;