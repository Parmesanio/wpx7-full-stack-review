module.exports = {

    getDb: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_memes_by_user_id(1).then(memes => {
            res.status(200).send(memes);
        }).catch(err => {
            console.log('error in getDb memes', err);
            res.status(500).send('Unexpected error occured');
        })
    }
    // create: (req, res) => {
    //     const dbInstance = req.app.get('db');
    //     dbInstance.create_meme()
    // }
}