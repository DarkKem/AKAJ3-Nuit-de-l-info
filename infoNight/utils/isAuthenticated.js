import {verify} from "jsonwebtoken";
import {secret} from "../../config/secret";

export const authenticated = (fn) => (req, res) => {
    verify(req.cookies.auth, secret, async function (err, decoded) {
        if (!err && decoded) {
            return await fn(req, res);
        }
        res.status(401).json({message: 'Sorry you are not authenticated'});
    });
}