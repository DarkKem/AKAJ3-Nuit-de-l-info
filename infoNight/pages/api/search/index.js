import db from "../../../config/db";
const Index = async (req, res) => {
    try {

        switch (req.method) {
            case 'GET':
                await handleGET(req, res);
                break;
            default:
                res.status(404).json({error: "Method not allowed"});

        }
    } catch (e) {
        console.error('erreur: ', e);
        res.status(500).json({error: e.message})
    }
};
const handleGET = async (req, res) => {
    let body = req.body;
    let params = req.params;
    let datas = await db(params.type).select().where(body);
    res.status(200).json({data: datas})

}

export default Index;