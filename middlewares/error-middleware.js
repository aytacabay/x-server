module.exports = async (req, res, next) => {
    let dataPayload;

    dataPayload = {
        postMethod: req.method,
        ip: req.ip,
        currentTime: new Date().getTime(),
        url: req.params[0],
    };

    if (req.method !== 'HEAD' || req.method !== 'OPTIONS') {
        await req.app.locals.db.collection("errorcatch").insertOne(dataPayload, function (err, res) {
            res.insertedId ? null : console.log(res.insertedId + "Data islenemedi...");
            next();
        });
    } else {
        return null
    }

};
