const express = require('express')
const router = express.Router();
const formidable = require('formidable');


router.post('/upload', (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', (name, file) => {
        console.log("name", name);
        file.path = __dirname + `/images/${new Date().getTime()}` + file.name;
    });

    form.on('file', (name, file) => {
        console.log('Uploaded ' + file.name);
        res.send({image: `${file.path}`});
    });
    

});

module.exports = router