const Shop = require("../models/shop");
const formidable = require("formidable");
// const fs = require("fs");

module.exports = {
  addShop: (req, res) => {
    let shopData = req.body;
    let shop = new Shop(shopData, (shopData.shoppics = uploadImage()));
    shop.save((err, addedShop) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(addedShop);
      }
    });
  },
//   uploadImage: (req, res) => {
//     const form = new formidable.IncomingForm();

//     form.parse(req, function(err, fields, files) {
//       let patch = Math.floor(Math.random() * 10000);
//       fs.rename(
//         files.file.path,
//         __dirname + "/client/uploads/" + patch + files.file.name, (err) => {
//             console.log(err);
//         },
//         res.send({
//             imageUrl: patch + files.file.name
//         })
//       );
//     });

    // form.on('fileBegin', (name, file) => {
    //     console.log("name", name);
    //     file.path = __dirname + `/client/uploads/${new Date().getTime()}` + file.name;
    // });

    // form.on('file', (name, file) => {
    //     console.log('Uploaded ' + file.name);
    //     res.send({image: `${file.path}`});

    // });
  

  shop: (req, res) => {
    res.send("from shop routes!!!!!");
  },

  allShops: (req, res) => {
    res.send("All Shops....");
  }

//   uploadImage: (req, res) => {
//     const form = new formidable.IncomingForm();

//     form.parse(req);

//     form.on("fileBegin", (name, file) => {
//     //   console.log("name", name);
//       file.path = __dirname + `/images/${new Date().getTime()}` + file.name;
//     });

//     form.on("file", (name, file) => {
//       console.log("Uploaded " + file.name);
//       res.send({ image: `${file.path}` });
//     });
//   }
};


