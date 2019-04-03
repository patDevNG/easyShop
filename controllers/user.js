const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = {
  login: (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
      if (error) {
        console.log(error);
      } else {
        if (!user) {
          return res.status(401).send("Invalid Email");
        } else {
          bcrypt.compare(userData.password, user.password, (err, result)=>{
            if(err){
                console.log(err);
            }else{
                if(result===true){
                    let payload ={ subject:user._id}
                    let token =jwt.sign(payload,"secretKey");
                    let fullName = {
                      firstName:result.firstName,
                      lastName:result.lastName
                    }
                    return res.status(200).json({token,fullName});
                }else{
                 return res.status(401).send("Invalid Password")
                }
            }
          })
          
        }   
        
      }
    });
  },

  register: (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (err, user) => {
      if (err) {
        console.log(err);
      } else {
        if (user) {
          return res.status(401).send("Email Already Exists");
        } else {
          addUser(userData);
        }
      }
    });

    addUser = (userData) => {
      let user = new User( userData,(userData.password = User.hashPassword(userData.password)));
      user.save((err, registeredUser) => {
        if (err) {
          console.log(err);
        } else {
            let payload = {subject:registeredUser._id}
            let token = jwt.sign(payload,'secretKey')
            let fullName = {firstName: registeredUser.firstName,
            lastName:registeredUser.lastName}
          // res.status(200).send({token});
          res.status(200).json({token,fullName})
        }
      });
    };
  },

  getAllUser:(req,res)=>{
  User.find((err,users)=>{
    if(err)
    console.log(err)
    else
    res.status(200).json(users);
  })
      },
  
  getUser:(req,res)=>{
    User.findById(req.params._id, (err,user)=>{
      if (err) 
      console.log(err)
      else
      console.log(user)
      // res.status(200).send(user)
    })
  }
}
 

  
