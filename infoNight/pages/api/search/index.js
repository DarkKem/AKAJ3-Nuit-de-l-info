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
    //?nom=""&prenom=""&date=""&type=""
    let params = req.query;
    console.log(params)
    let datas = await db(params.type).select();
    res.status(200).json({data: datas})

}

export default Index;