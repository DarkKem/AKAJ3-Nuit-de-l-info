import db from "../../../config/db";
const Index = async (req, res) => {
    try {

        switch (req.method) {
            case 'GET':
                await handleGET(req, res);
                break;
            case 'POST':
                await handlePOST(req, res);
                break;
            case 'PUT':
                await handlePUT(req, res);

                break;
            case 'DELETE':
                await handleDELETE(req, res);
                break;

        }
    } catch (e) {
        console.error('erreur: ', e);
        res.status(500).json({error: e.message})
    }
};
const handleGET = async (req, res) => {
    console.log('GET')
    let datas = await db('bateau').select()
    console.log('AFTERGET')

    res.status(200).json({data: datas})

}
const handlePOST = async (req, res) => {
    let body = await JSON.parse(req.body)
    const result = await db("bateau").insert(body).returning('*');
    res.status(200).json({data: result})
}
const handlePUT = async (req, res) => {
    let body = await JSON.parse(req.body)
    const result = await db("bateau").update(body).where('id', body.id).returning('*');
    res.status(200).json({data: result})

}
const handleDELETE = async (req, res) => {
    let body = await JSON.parse(req.body)

    const result = await db("bateau").delete().where('id', body.id);

    res.status(200).json({message: 'Well Deleted'})

}
export default Index;