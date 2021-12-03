import React from 'react';
import db from "../../../../config/db";

const Index = async (req, res) => {
    // console.log('query', req.query)
    if (req.method === 'GET') {
        switch (req.query.type) {
            case "sauvetage":
                await handleRes(req,res);
                                return;

            case "sauveteur":
                await handleRes(req,res);
                                return;

            case "sauve":
                await handleRes(req,res);
                                return;

            case "bateau":
                await handleRes(req,res);
                return;
            default:
                res.status(401).json({error: "methods not implemented"})

        }

    } else {
        res.status(401).json({error: "Method not allowed"});
    }
};
const handleRes =  async (req,res) => {
    try {

        let id = req.query.id
        let result = await db(req.query.type).select().where({id: id})
        console.log(result)
        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(404).json({error: `${req.query.type} not found`})
        }
    } catch (err) {
        console.error(err)
        res.status(404).json({error: err})
    }

}

export default Index;